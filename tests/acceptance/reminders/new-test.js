import { test } from 'qunit';
import moduleForAcceptance from 'remember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | reminders/new');

test('visiting /reminders/new', function(assert) {
  visit('/reminders');

  andThen(function() {
    fillIn('.reminder.title', 'Hello World');
    click('button');
  });
  andThen(function() {
    assert.equal(currentURL(), '/reminders/new');
  });
});
