import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('contacts', function() {
    this.route('show', { path: '/:contact_id' });
  });
});

export default Router;
