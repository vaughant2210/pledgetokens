import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('tokens', function() {
    this.route('new');
    this.route('edit');
  });
  this.route('rewards', function() {
    this.route('new');
    this.route('edit');
  });
});

export default Router;
