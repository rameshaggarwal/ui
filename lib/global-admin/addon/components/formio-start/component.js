import Component from '@ember/component';
import layout from './template';
import {scheduleOnce} from '@ember/runloop';
import {Formio} from 'formiojs';
import {callApiNaive,defaultSettings} from 'ui/utils/util';


const ExportedComponent=Component.extend({
  layout,
  init() {
    this._super(...arguments);
  },
  didInsertElement() {
    this._super(...arguments);
    scheduleOnce('afterRender',this,() => {

      Formio.createForm(document.getElementById('formio'),`https://mkmtcojqfzqvaje.form.io/${this.get('formtype')}`).then(async (form) => {

        form.submission=this.get('submission');
        var array=new Uint32Array(1);
        window.crypto.getRandomValues(array);
        this.set('submission.data',this.get('submission').data||{});
        this.set('submission.data.id',array[0]);
        console.log(this.get('taskid'));
        form.on('submitDone',(submitted) => {
          if(this.get('formtype')==='deltarequest'&&this.get('startform')) {
            callApiNaive(`https://mkmtcojqfzqvaje.form.io/deltarequest/submission`).then((response) => {
              response.forEach((response) => {
                if(response.data.id===this.get('submission.data.id')) {
                  const values={'variables': {}};

                  values.variables.submissionId={'value': response._id};
                  values.variables.project={'value': submitted.data.project};

                  callApiNaive(`https://159.89.201.54:8553/engine-rest/process-definition/key/devops/start`,defaultSettings(values));
                }
              });
            });

          }

          if(this.get('formtype')==='assigntask') {


            callApiNaive('https://159.89.201.54:9443/assign_mail2',defaultSettings(
              {
                to_email: submitted.data.email,
                task_name: this.get('startform'),
                from_email: 'debbie@deltadatamandiri.com'
              })).then((response) => console.log(response)).catch((error) => console.error(error))

            console.log(this.get('taskid'));

            callApiNaive(`https://159.89.201.54:8553/engine-rest/task/${this.get('taskid')}/assignee`,defaultSettings({userId: submitted.data.email}))
          }


        });

      });
    });
  }
});

ExportedComponent.reopenClass({
  positionalParams: ['submission','formtype','startform','taskid']
});


export default ExportedComponent;