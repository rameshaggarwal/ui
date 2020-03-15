import Component from '@ember/component';
import layout from './template';
import { scheduleOnce } from '@ember/runloop';
import { Formio } from 'formiojs';
import {callApiNaive, defaultSettings} from 'ui/utils/util';


const ExportedComponent = Component.extend({
  layout,
  init() {
    this._super(...arguments);
  },
  submissionId: '',
   didInsertElement() {
    this._super(...arguments);
    scheduleOnce('afterRender', this, () => {
      console.log(this.get('submission'));
      if(this.get('formtype')==='deltarequest' && ((!this.get('submission').data) || (!this.get('submission').data.submit))) {
        const bodyToSend = {
          "data": {
            "created": new Date().toUTCString()
          }
        }
        callApiNaive(`https://mkmtcojqfzqvaje.form.io/deltarequest/submission`, defaultSettings(bodyToSend)).then((response) => {
          this.submissionId = response._id;
        })
      }
      Formio.createForm(document.getElementById('formio'), `https://mkmtcojqfzqvaje.form.io/${this.get('formtype')}`).then(async (form) => { 
        
      form.submission = this.get('submission');
      form.on('submitDone', (submission) => {
        if(this.get('formtype')==='deltarequest') {
          const values = {'variables': {}};
          values.variables.submissionId = {'value': this.submissionId};
          values.variables.project = {'value': submission.data.project};
          console.log(values);
          callApiNaive(`https://159.89.201.54:8553/engine-rest/process-definition/key/devops/start`, defaultSettings(values));
        }
      });
    
    } );
    });
  }
});

ExportedComponent.reopenClass({
  positionalParams: ['submission', 'formtype']
});


export default ExportedComponent;