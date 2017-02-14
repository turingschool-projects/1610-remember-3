/* globals server */

import { test } from 'qunit';
import moduleForAcceptance from 'remember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | reminders list');

test('viewing the homepage renders reminders list', function(assert) {
  server.createList('reminder', 5);

  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/reminders');
    assert.equal($('.spec-reminder-list-item').length, 5);
  });
});

test('clicking on an individual reminder list item shows diplay item data', function(assert) {
  server.createList('reminder', 5);

  visit('/');
  click('.spec-reminder-list-item--title:first');

  andThen(function() {
    assert.equal($('.no-items-msg').length, 0);
    assert.equal($('.spec-reminder-display-item').length, 1);
  });
});

test('shows message if no reminders to display', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal($('.no-items-msg').length, 1);
  });
});
