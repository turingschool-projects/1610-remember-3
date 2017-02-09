import Ember from 'ember';

export default Ember.Component.extend({

  store: Ember.inject.service(),
  tagName: 'section',
  classNames: ['new-reminder'],

  title: '',
  date: new Date(),
  notes: '',

  actions: {
    createReminder() {
      const reminder = this.getProperties('title', 'date', 'notes');
      this.get('store').createRecord('reminder', reminder).save().then(() => {
        this.setProperties({ name: '', date: '', notes: '' });
      });
    }
  }
});
