import Controller from '@ember/controller';
import { Formio } from 'formiojs';

export default Controller.extend({
  didInsertElement() {
    this._super(...arguments);
    console.log(this.element.querySelectorAll('div'));
    Formio.createForm(document.getElementById('formio'), 'https://mkmtcojqfzqvaje.form.io/deltarequest');
  }
});