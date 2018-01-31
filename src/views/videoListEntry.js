var VideoListEntryView = Backbone.View.extend({
  
  events: {'click': 'handleClick'},
  //model: someModelHere
  //el:    'somestring'  '#id'
  //  -->$el  === $('somestring')   $('#id')
  handleClick: function() {
    this.model.select();
  },

  render: function() {
    // debugger;
    this.$el.html (this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
