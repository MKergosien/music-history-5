// The main module (i.e. javascripts/main.js) should then use the 
// return objects from all three dependencies to populate your song list.

requirejs(
    ['dom-access', 'populate-songs', 'get-more-songs'],
	function(domAccesss, pop, get_more) {

	    pop.querySongs(function(data) {
	      console.log("data", data);

			for (var i = 0; i < data.length; i++) {
	        var songName = data[i].name;
	        var songArtist = data[i].artist;
	        var songAlbum = data[i].album;
	        var songsText = '<div class="song-name"><h3>' + songName + "</h3><p>" + songArtist + " | " + songAlbum + "</p><button class='deleteButton'>Delete</button></div>";
	        $("#more").before(songsText);
	      	};

	    });
	    
	    $("#more").on("click", function() {

		    get_more.querySongs2(function(data) {
		      console.log("data", data);

		        for (var i = 0; i < data.length; i++) {
		          var songName = data[i].name;
		          var songArtist = data[i].artist;
		          var songAlbum = data[i].album;
		          var songsText = '<div class="song-name"><h3>' + songName + "</h3><p>" + songArtist + " | " + songAlbum + "</p><button class= 'deleteButton'>Delete</button></div>";
		          $
		            ("#more").before(songsText);
		        };

		    });

	    });

		
		$(document).on("click", '.deleteButton', function() {
	        $(this).parent().remove();
	    });

	});