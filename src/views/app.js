var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);  //this is the collection
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    //this.$el.html('<p>HEY THERE</p>');
    return this.$el;
  },

  template: templateURL('src/templates/app.html')

});
