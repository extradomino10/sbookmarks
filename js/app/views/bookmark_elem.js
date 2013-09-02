App.BookmarkElemView = Ember.View.extend({
	tagName: 'li',
	template: Ember.Handlebars.compile([
		'<div class="actions">',
			'<a href="javascript:void(0)" {{action favoriteItem this}}><i {{bindAttr class="favorite:icon-star-empty:icon-star"}}></i></a>',
			'<a href="javascript:void(0)" {{action deleteItem this}}><i class="icon-trash"></i></a>',			
		'</div>',
		'{{UpprCase title}}  <small>{{url}}</small>'
	].join('')),
	classNameBindings: ['defaultClass', 'kind'],
	defaultClass: 'new-item',
	kind: null,

	didInsertElement: function(e){
		//Insert Handler
		// this.get('parentView') in here references `view`
		console.log('element inserted');
	},

	willDestroyElement: function(e){

	}

});