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
    querySongs: function(callbackfunction) {
      $.ajax({ url: "https://glaring-torch-7889.firebaseio.com/.json" }).done(function(data) {
        console.log(data);
        callbackfunction.call(this, data);
      });
    }
  };
});

