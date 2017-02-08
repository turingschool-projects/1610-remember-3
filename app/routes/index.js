import Ember from 'ember';

export default Ember.Route.extend({
  afterModel(model, transition) {
    this.transitionTo('reminders');
  }
});
