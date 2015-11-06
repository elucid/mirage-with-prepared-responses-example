import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'mirage-with-prepared-responses-example/tests/helpers/start-app';
import Mirage from 'ember-cli-mirage';

module('Acceptance | contact search', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('contact search', function(assert) {
  server.createList('contact', 4);

  visit('/contacts');

  andThen(function() {
    server.queueResponse('get', 'contacts', new Mirage.Response(200, {}, {contacts: [
      {
        id: 17,
        firstName: 'Sven',
        lastName: 'Svenson'
      }
    ]}));

    fillIn('#search', 'Sven');
  });

  andThen(function() {
    let contacts = find('ul#contacts li');

    assert.equal(contacts.length, 1, 'should only return the search result');
  });
});
