import Route from '@ember/routing/route';
import { callApiNaive } from 'ui/utils/util';

export default Route.extend({
  async model() {
    const response = await callApiNaive(`https://mkmtcojqfzqvaje.form.io/deltarequest/submission?limit=100`);
    const data = [];

    response.forEach((response) => {
      response.data.id = response._id
      if (response.data.submit) {
        data.push(response.data);
      }
    })

    return data;
  },
  actions: {
    sessionChanged() {
      this.refresh();
    }
  }
});
