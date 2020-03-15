import Controller from '@ember/controller';
import {callApiNaive,defaultSettings} from 'ui/utils/util';
import {next} from '@ember/runloop';


export default Controller.extend({
  actions: {
    handleShow(id) {
      this.set("formtype","deltarequest");
      callApiNaive(`https://mkmtcojqfzqvaje.form.io/deltarequest/submission/${id}`).then((response) => {
        this.set('submission',response);
        this.set('submissionId',id);
        this.set('showModal',false);

        next(() => {
          this.set('showModal',true)
        });
      });
    },
    handleDelete(id) {
      callApiNaive(`https://mkmtcojqfzqvaje.form.io/deltarequest/submission/${id}`).then((submissionValues) => {
        submissionValues.data.comments=submissionValues.data.comments||'';

        submissionValues.data.addComment='';
        callApiNaive(`https://mkmtcojqfzqvaje.form.io/deltarequest/submission/${this.get('submissionId')}`,defaultSettings(submissionValues,'put'))
      })
      callApiNaive(`https://mkmtcojqfzqvaje.form.io/deltarequest/submission/${id}`,defaultSettings({},'delete')).then(() => this.send("sessionChanged"));
    }
  }

});
