App.BookmarksController = Ember.ArrayController.extend({
	pushSort: function(attribute){
		if (this.get('sortProperties.firstObject') == attribute) {
			this.toggleProperty('sortAscending');
		} else {
			this.set('sortProperties', [attribute]);
			this.set('sortAscending', true);
		}
	},

	deleteItem: function(bookmark){
		//Delete a bookmark
		bookmark.deleteReg();
	},

	favoriteItem: function(bookmark){
		//Favorite a bookmark
		bookmark.changedFavorite();
	},

	//Computed property
	favorites: function(){
		return this.filterProperty('favorite', true);
	}.property('@each.favorite'),

	regular: function(){
		return this.filterProperty('favorite', false);
	}.property('@each.favorite')
});