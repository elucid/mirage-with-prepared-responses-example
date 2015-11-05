import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'mirage-with-prepared-responses-example/tests/helpers/start-app';

module('Acceptance | contacts list', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('Index shows list of contacts', function(assert) {
  server.createList('contact', 4);

  visit('/contacts');

  andThen(function() {
    let contacts = find('ul#contacts li');

    assert.equal(contacts.length, 4, 'should be 4 contacts displayed');
  });
});
