// The populate-songs file should contain the AJAX call to your first 
// JSON file with songs in it. This module should return the array of songs.

// define(function() {
// 	var songArray = []
// 	$.ajax({ url: "songs.json"}).done(function(data) {	
// 	songArray = data.songs;
// 	console.log("songArray", songArray);
// 	return songArray;
// 	});
// });


define(function() {
  return {
    querySongs: function(callback) {
      $.ajax({ url: "./javascripts/songs.json" }).done(function(data) {
        callback.call(this, data.songs);
      });
    }
  };
});