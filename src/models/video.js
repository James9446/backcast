var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
  },

  select: function() {
    this.trigger('select', this);
    //this does something to go up the pipeline to 
    //App View to hear which is currently selected
  }

});
