import { test } from 'qunit';
import moduleForAcceptance from 'remember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | reminders/edit');

test('editing a reminder returns user to reminder item', function(assert) {
  server.createList('reminder', 5);

  visit('/reminders/edit/1');

  andThen(function() {
    fillIn('.reminder-title', 'Hello World');
    click('.btn-update');
  });

  andThen(function() {
    assert.equal(currentURL(), '/reminders/1');

  });
});
