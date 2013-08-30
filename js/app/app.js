App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({

});

App.IndexController = Ember.ObjectController.extend({
  headerName: 'Super Bookmarks App',
  appVersion:  2.1
});

