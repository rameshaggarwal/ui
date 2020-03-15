import Route from '@ember/routing/route';
import { callApiNaive, defaultSettings } from 'ui/utils/util';


export default Route.extend({
   model() {
    return callApiNaive(`https://159.89.201.54:8553/engine-rest/task?sortBy=created&sortOrder=desc`).then((response) => {
      const promises= [];
      response.forEach((response) => {
        promises.push(callApiNaive(`https://159.89.201.54:8553/engine-rest/task/${response.id}/form-variables`))
      })
      return Ember.RSVP.all(promises).then((formVariables) => {
        const data = [];
        for(let i=0; i<response.length; i++) {
          const cur = {};
          cur.id = response[i].processInstanceId;
          cur.name = response[i].name;
          cur.created = response[i].name;
          cur.project = formVariables[i].project && formVariables[i].project.value;
          cur.submissionId = formVariables[i].submissionId && formVariables[i].submissionId.value;
          if(!response[i].formKey) data.push(cur);
        }
        console.log(data);
        return data;
      })
  })
  },
  actions: {
    sessionChanged: function() {
      this.refresh();
    }
  }
});
