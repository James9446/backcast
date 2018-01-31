var VideoListView = Backbone.View.extend({

  //el: '.list',

  initialize: function() {
    //event listener for collection change - cause a render event
    let currentView = this;
    this.collection.on('all', this.render.bind(this));
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    let currentCollection = this.collection;
    //console.dir(currentCollection);
    currentCollection.models.forEach(function(videoModel) {
      new VideoListEntryView({el: '.video-list', model: videoModel}).render();
    });
      
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
