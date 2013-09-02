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
		deferred.resolve();
	});

	req.fail(function(error){
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