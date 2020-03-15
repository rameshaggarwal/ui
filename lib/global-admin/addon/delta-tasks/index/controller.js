import Controller from '@ember/controller';
import { callApiNaive, defaultSettings } from 'ui/utils/util';
import { next } from '@ember/runloop';


export default Controller.extend({
  actions: {

  handleShow(id) {
    this.set('formtype', 'deltarequest');

    callApiNaive(`https://mkmtcojqfzqvaje.form.io/deltarequest/submission/${id}`).then((response) => {

      console.log("DOING");
      console.log(response);
      
      this.set('submission', response);
      this.set('showModal', false);

      next(() => {
      this.set('showModal', true)
    });
  });
  },
  handleDelete(id) {
    callApiNaive(`https://159.89.201.54:8553/engine-rest/process-instance/${id}`, defaultSettings({}, 'delete')).then(()=>  this.send("sessionChanged") );
  },
  handleAssign(id) {
    this.set('formtype', 'assigntask');
    this.set('submission', {});
    this.set('showModal', false);

    next(() => {
    this.set('showModal', true)
  });
  },
   handleComplete(id) {
    callApiNaive(`https://159.89.201.54:8553/engine-rest/task/${id}/complete`, defaultSettings()).then(()=>  this.send("sessionChanged") );
  }
}

});
