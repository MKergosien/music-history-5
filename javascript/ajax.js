$(document).ready(function() {

  $.ajax({ url: "songs.json" }).done(function(data) {
    
      for (var i = 0; i <data.songs.length; i++) {
        var songName = data.songs[i].name;
        var songArtist = data.songs[i].artist;
        var songAlbum = data.songs[i].album;
        var songsText = '<div class="song-name"><h3>' + songName + "</h3><p>" + songArtist 
                       + " | " + songAlbum + "</p><button class='deleteButton'>Delete</button></div>";
      $("#more").before(songsText);
      console.log(songsText);
      };
  });

$(document).on( "click", '.deleteButton', function() {
         $(this).parent().remove();
 });


});

  $("#more").on( "click", function() {
    console.log("more button clicked");
  

    $.ajax({ url: "songs2.json"}).done(function(data) {
      console.log(data);


      for (var i = 0; i <data.songs.length; i++) {
        var songName = data.songs[i].name;
        var songArtist = data.songs[i].artist;
        var songAlbum = data.songs[i].album;
        var songsText = '<div class="song-name"><h3>' + songName + "</h3><p>" + songArtist 
        + " | " + songAlbum + "</p><button class= 'deleteButton'>Delete</button></div>";
        $("#more").before(songsText);
        console.log(songsText);
      }
   });
  });