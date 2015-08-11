// The main module (i.e. javascripts/main.js) should then use the 
// return objects from all three dependencies to populate your song list.

requirejs.config({
  baseUrl: './javascript',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'hbs': '../bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min'
  },
  shim: {
    'bootstrap': ['jquery']
  }
});

requirejs(
    ["jquery", "hbs", "bootstrap", 'dom-access', 'populate-songs' ],
	  function($, Handlebars, bootstrap, domAccess, pop) {
      var artists=[];
      var albums=[];
      var allSongs;

      pop.querySongs(function(data) {
        allSongs = data; 
          // ARTIST DROP DOWN SELECT FILTER MENU
        require(
          ['hbs!../templates/artistdrop'], 
          function(artistTemplate){
            $("#artist_type").html(artistTemplate(data));
          }); 

          // ALBUM DROP DOWN SELECT FILTER MENU
        require(
          ['hbs!../templates/albumdrop'], 
          function(albumTemplate){
            $("#album_type").html(albumTemplate(data));
          }); 

          // LIST OF SONGS (RIGHT COLUMN OF INDEX.HTML)
        require(
          ['hbs!../templates/songs'],
          function(songTemplate){
            var populatedTemplate = songTemplate(data);
            $("#songs").html(populatedTemplate);
          }); 


      });   
      
        // ADD NEW MUSIC(ADDMUSIC.HTML)

    $("#addMusic").click(function(){

      var newSong = {};
      newSong.album = $("#albumName").val();
      newSong.artist = $("#artistName").val();
      newSong.name = $("#songName").val();
      console.log(newSong);
        // Look here to see if song exist or not in "allSongs".. if not, call ajax (example-line 78)

       $.ajax({
        url: "https://glaring-torch-7889.firebaseio.com/songs.json",
        method: "POST",
        data: JSON.stringify(newSong)
      }).done(function(addedSong) {
        console.log("Your new song is", addedSong);
      });
    });

      // FILTER MUSIC (Artist & Album) IN INDEX.HTML (BUTTON)

    $("#filter").click(function(){
      var selectAlbum = $("#album_type").val();
      var selectArtist = $("#artist_type").val();
      var filteredSongs = [];

      console.log(allSongs.songs);
      for (var key in allSongs.songs) {
        if (allSongs.songs[key].artist === selectArtist || allSongs.songs[key].album === selectAlbum) {
          filteredSongs.push(allSongs.songs[key]);
        };
      };

      console.log(filteredSongs);
      require(
          ['hbs!../templates/songs'],
          function(songTemplate){
            var populatedTemplate = songTemplate({songs:filteredSongs});
            $("#songs").html(populatedTemplate);
          }); 

    });

      // DELETE SONGS BUTTON (NOTCURRENTLY WORKING)

    $(document).on("click", '.deleteButton', function() {
        $(this).parent().remove();
    });    
  });  
