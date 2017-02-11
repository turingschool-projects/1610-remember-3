/* globals server */

import { test } from 'qunit';
import moduleForAcceptance from 'remember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | reminders list');

test('viewing the homepage', function(assert) {
  server.createList('reminder', 5);

  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/reminders');
    assert.equal($('.spec-reminder-item').length, 5);
  });
});

test('clicking on an individual item shows item data', function(assert) {
  server.createList('reminder', 5);

  visit('/');
  click('.spec-reminder-item--title:first');

  let title = server.db.reminders[0].title;
  let date = server.db.reminders[0].date;
  let notes = server.db.reminders[0].notes;

  andThen(function() {
    assert.equal(currentURL(), '/reminders/1');
    assert.equal($('.spec-reminder-item--title:first').text().trim(), title);
    assert.equal($('.spec-reminder-item--date:first').text().trim(), 'Date: ' + date);
    assert.equal($('.spec-reminder-item--notes:first').text().trim(), notes);
  });
});
