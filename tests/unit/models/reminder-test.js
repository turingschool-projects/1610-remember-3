import { moduleForModel, test } from 'ember-qunit';

moduleForModel('reminder', 'Unit | Model | reminder', {
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  assert.ok(!!model);
});

test('should return undefined without valid input', function(assert) {
  const reminder = this.subject({});

  assert.equal(reminder.get('name'), undefined, 'reminder attributes throw error if empty');
});
