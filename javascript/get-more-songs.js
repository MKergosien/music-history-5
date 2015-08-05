// The get-more-songs file should contain the AJAX call to your second 
// JSON file with songs in it. This module should return the array of songs.

// define(function() {
// 	var songArray = []
// 	$.ajax({ url: "songs2.json", async: false }).done(function(data) {	
// 	songArray = data.songs;
// 	console.log("songArray", songArray);
// 	})
// 	console.log("songArray2", songArray);
// 	return songArray;
// });


define(function() {
  return {
    querySongs2: function(callback) {
      $.ajax({ url: "./javascript/songs2.json" }).done(function(data) {
        callback.call(this, data);
       
      });
    }
  };
});

