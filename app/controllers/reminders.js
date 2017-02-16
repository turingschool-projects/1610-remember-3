import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['date:desc'],
  sortedReminders: Ember.computed.sort('model', 'sortProperties'),

  actions: {
    goBackToRemindersList() {
      this.transitionToRoute('reminders');
    }
  }
});
