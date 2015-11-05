import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'mirage-with-prepared-responses-example/tests/helpers/start-app';
import Mirage from 'ember-cli-mirage';

module('Acceptance | error page', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('App displays an error page when API returns 502', function(assert) {
  server.queueResponse('get', 'contacts', new Mirage.Response(502, {}, {}));

  visit('/contacts');

  andThen(function() {
    let title = find('h1').text();
    assert.equal(title, 'Error', 'should display the error template');
  });
});
