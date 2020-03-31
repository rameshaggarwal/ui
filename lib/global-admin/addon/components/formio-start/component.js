import Component from '@ember/component';
import layout from './template';
import { scheduleOnce } from '@ember/runloop';
import { Formio } from 'formiojs';
import { callApiNaive, defaultSettings } from 'ui/utils/util';
import { inject as service } from '@ember/service';





const ExportedComponent = Component.extend({

  session: service(),
  scope: service(),
  globalStore: service(),
  layout,
  init() {
    this._super(...arguments);
  },
  didInsertElement() {
    this._super(...arguments);
    scheduleOnce('afterRender', this, () => {
      Formio.createForm(document.getElementById('formio'), `https://mkmtcojqfzqvaje.form.io/${this.get('formtype')}`).then(async (form) => {
        form.submission = this.get('submission');
        var array = new Uint32Array(1);

        window.crypto.getRandomValues(array);
        this.set('submission.data', this.get('submission').data || {});
        this.set('submission.data.id', array[0]);
        form.on('submitDone', (submitted) => {
          if (this.get('submissionId') !== 0) {
            callApiNaive(`https://mkmtcojqfzqvaje.form.io/deltarequest/submission/${this.get('submissionId')}`).then((submissionValues) => {
              submissionValues.data.comments = submissionValues.data.comments || '';
              if (submitted.data.addComment) {
                submissionValues.data.comments += `${new Date().toUTCString()} -> <i>admin</i>: ${submitted.data.addComment}<br/>`
              }
              if (submitted.data.email) {
                submissionValues.data.comments += `${new Date().toUTCString()} => <i>Task Assigned to</i> ${submitted.data.email}<br/>`
              }

              submissionValues.data.addComment = '';
              callApiNaive(`https://mkmtcojqfzqvaje.form.io/deltarequest/submission/${this.get('submissionId')}`, defaultSettings(submissionValues, 'put'))
            })
          }

          if (this.get('formtype') === 'deltarequest' && this.get('startform')) {
            callApiNaive(`https://mkmtcojqfzqvaje.form.io/deltarequest/submission`).then((response) => {
              response.forEach((response) => {
                if (response.data.id === this.get('submission.data.id')) {
                  response.data.comments = response.data.comments || '';
                  response.data.comments += `${new Date().toUTCString()} => <b> Project Started</b><br/>`;
                  if (submitted.data.addComment) {
                    response.data.comments += `${new Date().toUTCString()} -> <i>admin</i>: ${submitted.data.addComment}<br/>`
                  }

                  response.data.addComment = '';
                  callApiNaive(`https://mkmtcojqfzqvaje.form.io/deltarequest/submission/${response._id}`, defaultSettings(response, 'put'))

                  const values = { 'variables': {} };

                  values.variables.submissionId = { 'value': response._id };
                  values.variables.project = { 'value': submitted.data.project };

                  callApiNaive(`https://deltadevops.app:8553/engine-rest/process-definition/key/devops/start`, defaultSettings(values));
                }
              });
            });
          }

          if (this.get('formtype') === 'assigntask') {
            callApiNaive('https://159.89.201.54:8989/assign_mail2', defaultSettings(
              {
                to_email: submitted.data.email,
                task_name: this.get('startform'),
                from_email: 'debbie@deltadatamandiri.com'
              })).then((response) => console.log(response)).catch((error) => console.error(error))


            callApiNaive(`https://deltadevops.app:8553/engine-rest/task/${this.get('taskid')}/assignee`, defaultSettings({ userId: submitted.data.email }))
          }
        });
      });
    });
  }
});

ExportedComponent.reopenClass({ positionalParams: ['submissionId', 'submission', 'formtype', 'startform', 'taskid'] });


export default ExportedComponent;