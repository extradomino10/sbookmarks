//http://www.solitr.com/blog/2012/06/ember-input-field-with-save-button/
App.TextBox = Ember.TextField.extend({
  sourceBinding: Ember.Binding.oneWay(this.value)
});

function $elem(id){
	return document.getElementById(id);
}