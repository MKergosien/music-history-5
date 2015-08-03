// The main module (i.e. javascripts/main.js) should then use the 
// return objects from all three dependencies to populate your song list.

requirejs(
  ['dom-access', 'populate-songs', 'get-more-songs'], 
  function(domAccesss, pop, get_more) {

   	pop.querySongs(function(data) {
    console.log("data", data);
    };
    
    get_more.querySongs(function(data) {
    console.log("data", data);
  	};
});
