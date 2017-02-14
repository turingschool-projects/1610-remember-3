import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('new-reminder', 'Integration | Component | new reminder', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{new-reminder}}`);
  assert.equal(this.$().text().replace(/\s/g, ''), 'NewReminderSubmit');
});
