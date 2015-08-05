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
    ["jquery", "hbs", "bootstrap", 'dom-access', 'populate-songs', 'get-more-songs'],
	  function($, Handlebars, bootstrap, domAccess, pop, get_more) {

	    pop.querySongs(function(data) {
        require(
          ['hbs!../templates/songs'],
          function(songTemplate){
            $("#songs").html(songTemplate(data));
          });  
      }); 

    $("#more").click(function(){
      console.log("you clicked me");
      get_more.querySongs2(function(data) {
        console.log(data);
        require(
          ['hbs!../templates/songs'],
          function(songTemplate){
            $("#songs").append(songTemplate(data));
          });
      } );
    });  
      
    $(document).on("click", '.deleteButton', function() {
        $(this).parent().remove();
    });    
  });  
