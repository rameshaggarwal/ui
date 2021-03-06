import Controller from '@ember/controller';
import { callApiNaive, defaultSettings } from 'ui/utils/util';
import { next } from '@ember/runloop';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Controller.extend({

  access:       service(),
  submissionId: 0,
  isAdmin:      alias('access.admin'),
  actions:      {
    newProject() {
      this.set('formtype', 'deltarequest');
      this.set('task_name', 'New');
      this.set('submission', {});
      this.set('submissionId', 0);
      this.set('startform', 1);
      this.set('showModal', false);

      next(() => {
        this.set('showModal', true)
      });
    },
    handleShow(id, task_name) {
      this.set('formtype', 'deltarequest');
      this.set('submissionId', id);
      this.set('startform', 0);

      callApiNaive(`https://mkmtcojqfzqvaje.form.io/deltarequest/submission/${ id }`).then((response) => {
        this.set('submission', response);
        this.set('showModal', false);
        this.set('task_name', task_name);

        next(() => {
          this.set('showModal', true)
        });
      });
    },
    hideModal() {
      this.set('showModal', false);
      this.send('sessionChanged');
    },
    handleDelete(id) {
      const del = confirm("Delete Project? This project will be deleted from pipeline. You can still access project's logs from all projects tab.");

      if (del) {
        callApiNaive(`https://deltadevops.app:8553/engine-rest/process-instance/${ id }`, defaultSettings({}, 'delete')).then(() => this.send('sessionChanged'));
      }
    },
    gotoProject(id) {
      callApiNaive(`https://mkmtcojqfzqvaje.form.io/deltarequest/submission/${ id }`).then((submission) => {
        const url = submission.data.cluster;

        window.location.replace(url);
      });
    },
    handleAssign(id, task_name, task_id, submissionId) {
      this.set('formtype', 'assigntask');
      this.set('submissionId', submissionId);
      this.set('submission', {});
      this.set('startform', task_name); // taskname
      this.set('task_id', task_id);
      this.set('showModal', false);

      next(() => {
        this.set('showModal', true)
      });
    },
    handleComplete(id, submissionId, task_name) {
      callApiNaive(`https://mkmtcojqfzqvaje.form.io/deltarequest/submission/${ submissionId }`).then((submissionValues) => {
        submissionValues.data.comments = submissionValues.data.comments || '';
        submissionValues.data.comments += `${ new Date().toUTCString() } => <b>Task Completed: ${ task_name }</b><br/>`;

        callApiNaive(`https://mkmtcojqfzqvaje.form.io/deltarequest/submission/${ submissionId }`, defaultSettings(submissionValues, 'put'))
      })
      callApiNaive(`https://deltadevops.app:8553/engine-rest/task/${ id }/complete`, defaultSettings()).then(() => this.send('sessionChanged'));
    }
  }

});
