import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['show-reminder'],
  store: Ember.inject.service(),

  actions: {
    deleteReminder() {
      this.get('store').deleteRecord(this.model);
      this.model.save().then(() => {
        this.sendAction('backToReminders');
      });
    }
  }
});
