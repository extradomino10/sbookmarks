App.BookmarksNewController = Ember.ObjectController.extend({
	save: function(){
		this.set('favorite', false);
		this.set('title', $elem('titleField').value);
		this.set('url', $elem('urlField').value);
		
		this.get('model.transaction').commit();
		this.get('target').transitionTo('bookmarks');
	}
});