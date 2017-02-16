import { test } from 'qunit';
import moduleForAcceptance from 'remember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | reminders');

test('clicking delete button in show reminder removes reminder, reroutes to reminders', function(assert) {
  server.createList('reminder', 5);
  visit('/reminders');


  andThen(function() {
    assert.equal(currentURL(), '/reminders');
  });

  click('.spec-reminder-list-item--title:first');

  andThen(function() {
    assert.equal(find('.reminder-item').length, 5);
    assert.equal(find('.show-reminder').length, 1);
  });



  click('.spec-btn-show-delete');

  andThen(function() {
    assert.equal(find('.reminder-item').length, 4);
    assert.equal(currentURL(), '/reminders');
  });


});
