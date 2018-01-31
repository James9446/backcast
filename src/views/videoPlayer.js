var VideoPlayerView = Backbone.View.extend({

  //collection : currentCollection
  //need one video model to feed this.template
  //collection[0] - current model

  initialize: function() {
    this.collection.on('select', this.render.bind(this));
  },

  render: function(modelAttributes) {
    this.$el.html(this.template.call(modelAttributes));
    //console.log("this.collection: ", this.collection.models[0].attributes);
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
