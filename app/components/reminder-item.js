import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['reminder-item'],
  store: Ember.inject.service(),


  actions: {
    deleteAReminder() {
      // this.get('store');
      this.get('store').deleteRecord(this.reminder);

      this.reminder.save().then(() => {
        this.sendAction('backToReminders');
      });


    }
  }
});
