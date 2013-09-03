var App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({

});

App.IndexController = Ember.ObjectController.extend({
  headerName: 'Super Bookmarks App',
  appVersion:  2.1,
  vpWidth: document.documentElement.clientWidth,
  vpHeight: document.documentElement.clientHeight
});


var templates = [
	'bookmarks',
	'bookmarks_new'
];

ToTitleCase = function(str) {
    return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
};

LoadTemplate = function(viewfile){
	var deferred = $.Deferred(),
		req = $.ajax({
			url: 'js/app/templates/'+viewfile+'.html',
			dataType: 'text'
		});

	req.done(function(response){
		responses.push({name: viewfile, tpl: response})
		deferred.resolve(); //On Done resolve the promise
	});

	req.fail(function(error){
		console.log('xhr error');
		deferred.reject('error');
	});

	return deferred.promise();
};

var responses = [],
	promises = $.map(templates, function(filename){ return LoadTemplate(filename) });

$.when.apply($, promises)
	.then( function(){
		for (var i = 0, len = responses.length; i < len; i++) {
			var viewname = responses[i]['name'].replace('_', ' ');
			viewname = ToTitleCase(viewname).replace(' ', '') + 'View';
			App[viewname] = Ember.View.extend({
				template: Ember.Handlebars.compile(responses[i]['tpl'])
			});
		}
	}
);


