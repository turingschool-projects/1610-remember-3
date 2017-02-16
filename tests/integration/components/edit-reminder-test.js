import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('edit-reminder', 'Integration | Component | edit reminder', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{edit-reminder}}`);
  assert.equal(this.$().text().replace(/\s/g, ''), 'EditReminderSave');
});
