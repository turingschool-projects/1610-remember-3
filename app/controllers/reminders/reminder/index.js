import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    goBackToRemindersList() {
      this.transitionToRoute('reminders');
    }
  }
});
