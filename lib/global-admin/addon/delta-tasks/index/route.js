import Route from '@ember/routing/route';
import { callApiNaive, defaultSettings } from 'ui/utils/util';


export default Route.extend({
  async model() {

    const response = await callApiNaive(`https://159.89.201.54:8443/engine-rest/task?sortBy=created&sortOrder=desc`);

    const data = [];
    response.forEach( (response) => {
      callApiNaive(`https://159.89.201.54:8443/engine-rest/task/${response.id}/form-variables`).then((formVariables) => {
        const cur = {};
        cur.id = response.processInstanceId;
      cur.project = formVariables.project && formVariables.project.value;
      cur.submissionId = formVariables.submissionId && formVariables.submissionId.value;
      cur.created = response.created;
      cur.name = response.name;
      if(!response.formKey) data.push(cur);
    });
    })
    console.log(data);
    return data;
  },
  actions: {
    sessionChanged: function() {
      this.refresh();
    }
  }
});
