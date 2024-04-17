import EmberRouter from '@ember/routing/router';
import config from 'host-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home', { path: '/' });
  this.route('ember-route');
  this.route('react-route');
});
