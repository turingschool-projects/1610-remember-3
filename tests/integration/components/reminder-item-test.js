import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('reminder-item', 'Integration | Component | reminder item', {
  integration: true
});

test('it renders', function(assert) {
  let reminder = {title: 'title', date: 'today', notes: 'note'};
  this.set('reminder', reminder);
  this.render(hbs`{{reminder-item reminder=reminder}}`);
  assert.equal(this.$('.reminder-item--notes').text(), 'note', 'reminder diplays note');
});
