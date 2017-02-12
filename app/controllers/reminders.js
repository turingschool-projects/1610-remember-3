import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
  sortProperties: ['date:desc'],
  sortedReminders: Ember.computed.sort('model', 'sortProperties')
});
