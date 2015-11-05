import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'mirage-with-prepared-responses-example/tests/helpers/start-app';

module('Acceptance | navigate to contact', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('Clicking on a contact shows their page', function(assert) {
  let contact = server.create('contact', { firstName: 'Jane', lastName: 'Doe' });

  let firstName = contact.firstName;

  let fullName = `${contact.firstName} ${contact.lastName}`;

  visit('/contacts');

  andThen(function() {
    click(`a:contains("${firstName}")`);
  });

  andThen(function() {
    let name = $.trim(find('.contact').text());

    assert.equal(name, fullName, "contact's full name is displayed");
  });
});
