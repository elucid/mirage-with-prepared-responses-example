import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'mirage-with-prepared-responses-example/tests/helpers/start-app';

module('Acceptance | default page', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('App defaults to the contacts page', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/contacts', 'should redirect to the contacts page');
  });
});
