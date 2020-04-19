/* eslint-env node */

const path = require('path');
const HttpProxy = require('http-proxy');

const config = require('../../config/environment')(process.env.EMBER_ENV).APP;

module.exports = function(app, options) {
  var httpServer = options.httpServer;


  const proxy = HttpProxy.createProxyServer({
    ws: true,
    xfwd: false,
    target: config.apiServer,
    secure: false,
    followRedirects: true,
  });

  proxy.on('error', onProxyError);

  const enableCors = function(req, res) {
    res.setHeader('access-control-allow-origin', 'https://192.168.1.20:8000');
    res.setHeader('access-control-allow-credentials', 'true');


    if (req.headers['access-control-request-method']) {
      res.setHeader('access-control-allow-methods', req.headers['access-control-request-method']);
    }

    if (req.headers['access-control-request-headers']) {
      res.setHeader('access-control-allow-headers', req.headers['access-control-request-headers']);
    }

    res.setHeader('access-control-max-age', 60 * 60 * 24 * 30);
  };
  proxy.on('proxyRes', function(proxyRes, req, res) {
    enableCors(req, res);


  });


  // WebSocket for Rancher
  httpServer.on('upgrade', (req, socket, head) => {
    if (req.url.startsWith('/_lr/')) {
      //return;
    }


    let targetHost = config.apiServer.replace(/^https?:\/\//, '');
    let host = req.headers['host'];

    req.headers['x-api-host'] = host;
    req.headers['host'] = targetHost;
    req.headers['origin'] = config.apiServer;
    req.socket.servername = targetHost;

    proxyLog('WS', req);
    console.log(socket);
    console.log(head);

    try {
      console.log("WSYES2");
      console.log(req.url);
      proxy.ws(req, socket, head);
    } catch (err) {
      console.log("WSNO2");
      console.log(req.url);
      console.log(err);
      proxyLog(err);
    }
  });

  let map = {
    'Project': config.projectEndpoint.replace(config.projectToken, ''),
    'Cluster': config.clusterEndpoint.replace(config.clusterToken, ''),
    'Global': config.apiEndpoint,
    'Public': config.publicApiEndpoint,
    'Magic': config.magicEndpoint,
    'Telemetry': config.telemetryEndpoint,

    'K8s': '/k8s',
    'Meta': '/meta',
    'Swagger': '/swaggerapi',
    'Version': '/version',
    'Apiui': '/api-ui',
    'Samlauth': '/v1-saml',
    'Drivers': '/assets/rancher-ui-driver-*',
    'K3Versions': '/v1-release',
  }

  app.use('/', function(req, res, next) {
    if (req.method === 'options') {
      console.log("YES4");
      console.log(req.url);
      console.log(res.statusCode);

      enableCors(req, res);
      res.writeHead(200);
      res.end();
      return;
    }
    if ((req.headers['user-agent'] || '').toLowerCase().includes('mozilla')) {
      console.log("YES");
      console.log(req.url);

      console.log(res.statusCode);

      next();
    } else {
      console.log("NO");
      console.log(req.url);

      console.log(res.statusCode);

      proxyLog('Root', req);

      req.headers['X-Forwarded-Proto'] = req.protocol;
      proxy.web(req, res, {
        target: config.apiServer,
        secure: true,
        changeOrigin: true
      });
    }
  }),

    console.log('Proxying APIs to', config.apiServer);
  Object.keys(map).forEach(function(label) {
    let base = map[label];
    app.use(base, function(req, res, next) {
      if (req.url === '/') {
        req.url = '';
      }
      // include root path in proxied request
      req.url = req.originalUrl;

      console.log("YES3");
      console.log(req.url);
      console.log(res.statusCode);

      req.headers['X-Api-Host'] = req.headers['host'];
      delete req.headers['host'];

      proxyLog(label, req);
      proxy.web(req, res);
    });
  });
}

function onProxyError(err, req, res) {
  console.log('Proxy Error on ' + req.method + ' to', req.url, err);
  console.log("ERR4");
  console.log(req.url);
  console.log(res.statusCode);
  var error = {
    type: 'error',
    status: 500,
    code: 'ProxyError',
    message: 'Error connecting to proxy',
    detail: err.toString()
  }

  if (req.upgrade) {
    res.end();
  }
  else {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(error));
  }
}

function proxyLog(label, req) {
  console.log(`[${label}]`, req.method, req.url);
}

function proxyError(label, req, err) {
  console.error(`[${label}][${req._source}]`, req.method, req.url, err);
}
