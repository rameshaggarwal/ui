import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    createThing() {
      alert('Delta Project Request Submitted!');
    }
  }
});
