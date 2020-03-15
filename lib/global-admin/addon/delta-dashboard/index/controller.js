import Controller from '@ember/controller';
import {next} from '@ember/runloop';

export default Controller.extend({
  submission: {},
  formtype: "deltarequest",
  actions: {

    handleShow(id,task_name) {
      this.set('formtype','deltarequest');


      this.set('showModal',false);
      this.set('task_name',task_name);

      next(() => {
        this.set('showModal',true)
      });
    }
  }

});