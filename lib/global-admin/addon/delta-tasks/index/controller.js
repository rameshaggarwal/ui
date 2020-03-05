import Controller from '@ember/controller';
import { callApiNaive, defaultSettings } from 'ui/utils/util';


export default Controller.extend({
  handleShow(id) {
    this.formtype = "deltarequest";

    callApiNaive(`https://mkmtcojqfzqvaje.form.io/deltarequest/submission/${id}`).then((response) => {
      
      this.submission = response;
      this.set('showModal', false);

      next(() => {
      this.set('showModal', true)
    });
  });
  },
  formtype: "deltarequest",
  submission: {},
   handleDelete(id) {
    callApiNaive(`http://159.89.201.54:8080/engine-rest/process-instance/${id}`, defaultSettings({}, 'delete')).then(()=>  this.send("sessionChanged") );
  },
  handleAssign(id) {
    this.formtype = "assigntask";
    this.submission = {};
    this.set('showModal', false);

    next(() => {
    this.set('showModal', true)
  });
  },
   handleComplete(id) {
    callApiNaive(`http://159.89.201.54:8080/engine-rest/task/${id}/complete`, defaultSettings(values)).then(()=>  this.send("sessionChanged") );
  }

});
