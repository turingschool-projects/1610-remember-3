import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    goBackToShowItem() {
      this.transitionToRoute('reminders.reminder', this.model.id);
    }
  }
});
