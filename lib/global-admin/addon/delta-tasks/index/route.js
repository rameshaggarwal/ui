import Route from '@ember/routing/route';
import { callApiNaive, defaultSettings } from 'ui/utils/util';


export default Route.extend({
  async model() {

    const response = await callApiNaive(`http://159.89.201.54:8080/engine-rest/task?sortBy=created&sortOrder=desc`);
    let done = response.length

    console.log(response);
    const data = [];
    response.forEach(async (response) => {
      const cur = {};
      cur.id = response.processInstanceId;
      const formVariables = await callApiNaive(`http://159.89.201.54:8080/engine-rest/task/${response.id}/form-variables`);
      console.log(formVariables);
      console.log(response);
      console.log(response.formKey);
      cur.project = formVariables.project && formVariables.project.value;
      cur.submissionId = formVariables.submissionId && formVariables.submissionId.value;
      cur.created = response.created;
      cur.name = response.name;
      if(!response.formKey) data.push(cur);
      done = done = 1;
      if(done===0) {
        return data;
      }
    })
    if(done===0) {
      return data;
    }
  },
  actions: {
    sessionChanged: function() {
      this.refresh();
    }
  }
});
