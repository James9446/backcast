var AppView = Backbone.View.extend({

  el: '#app',

  //listening to the collection or the models and knowing which is currently selected?
  event: {'all': 'handleEvent'},

  handleEvent: function(event) {
    console.log('AppView select event:', event)
  },

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);  //this is the collection
    // this.videos.on('all', function(event) {
    //   console.log('AppView select event:', event);
    // });
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    //this.$el.html('<p>HEY THERE</p>');
    let currentCollection = this.videos;
    new VideoListView({ el: '.list', collection: currentCollection}).render();
    new VideoPlayerView({el: '.player', collection: currentCollection}).render(currentCollection.models[3].attributes);


    return this;
  },

  template: templateURL('src/templates/app.html')

});
