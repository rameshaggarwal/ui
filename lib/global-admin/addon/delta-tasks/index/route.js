import Route from '@ember/routing/route';
import { callApiNaive } from 'ui/utils/util';
import { all } from 'rsvp';


export default Route.extend({
  model() {
    return callApiNaive(`https://159.89.201.54:8553/engine-rest/task?sortBy=created&sortOrder=desc`).then((responses) => {
      const promises = [];
      const response = [];

      responses.forEach((responser) => {
        if (!responser.formKey) {
          response.push(responser);
          promises.push(callApiNaive(`https://159.89.201.54:8553/engine-rest/task/${ responser.id }/form-variables`))
        }
      })

      return all(promises).then((formVariables) => {
        const data = [];

        for (let i = 0;i < response.length;i++) {
          const cur = {};

          cur.id = response[i].processInstanceId;
          cur.task_id = response[i].id;
          cur.name = response[i].name;
          cur.created = response[i].created;
          cur.project = formVariables[i].project && formVariables[i].project.value;
          cur.submissionId = formVariables[i].submissionId && formVariables[i].submissionId.value;
          data.push(cur);
        }

        return data;
      })
    })
  },
  actions: {
    sessionChanged() {
      this.refresh();
    }
  }
});
