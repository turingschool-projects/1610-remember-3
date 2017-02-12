/* globals server */

import { test } from 'qunit';
import moduleForAcceptance from 'remember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | reminders list');

test('viewing the homepage', function(assert) {
  server.createList('reminder', 5);

  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/reminders');
    assert.equal($('.spec-reminder-list-item').length, 5);
  });
});

test('clicking on an individual item shows item data', function(assert) {
  server.createList('reminder', 5);

  visit('/');
  click('.spec-reminder-list-item--title:first');

  andThen(function() {
    assert.equal($('.spec-reminder-display-item').length, 1);
  });
});
