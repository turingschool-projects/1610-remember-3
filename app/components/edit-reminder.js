import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service(),
  router: Ember.inject.service('-routing'),
  tagName: 'section',
  classNames: ['edit-reminder'],

  title: '',
  date: '',
  notes: '',

  actions: {
    editReminder() {
      this.model.setProperties('title', 'date', 'notes');
      this.model.save().then(() => {
        this.get('router').transitionTo('reminders.reminder', [this.model.id.toString()]);
      })
    }
  }
});
