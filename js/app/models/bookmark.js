//Data types: string, int, date, boolean
App.Bookmark = DS.Model.extend({
	title: DS.attr('string'),
	url: DS.attr('string'),
	favorite: DS.attr('boolean'),

	//Observer
	/*changedFavorite: Ember.observer(function(){
		this.get('transaction').commit();
		console.log('Transaction Commited');
	}, 'favorite'),*/

	changedFavorite: function(){
		this.toggleProperty('favorite');
	},

	deleteReg: function(){
		this.deleteRecord();
		this.get('transaction').commit();
	}
});

//var obj = App.Bookmark.find().get('lastObject')
//obj.deleteRecord();