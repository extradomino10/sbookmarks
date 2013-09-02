//Handlebars helper demo
Ember.Handlebars.helper('UpprCase', function(str){
	var result = (str === null || str === undefined)? '' : str.toUpperCase();
	return result;
})