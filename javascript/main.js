// The main module (i.e. javascripts/main.js) should then use the 
// return objects from all three dependencies to populate your song list.

requirejs(
  ['dom-access', 'populate-songs', 'get-more-songs'], 
  function(domAccesss, pop, get_more) {

   	pop.querySongs(function(data) {
    console.log("data", data);
    });
    
    get_more.querySongs2(function(data) {
    console.log("data", data);
  	});
});



// function(domAccess, pop, get_more) {
//     var initialSongs = [];
    
    // Define a function for the dependencies
    // to execute when they are done getting
    // the data from the JSON files
    // var functionIWantToRunWhenThereIsData = function(data) {
    //   console.log("data", data);
    // }

    // Get the first list of songs
    // pop.querySongs(functionIWantToRunWhenThereIsData);

    // Get the second list of songs
    // get_more.querySongs(functionIWantToRunWhenThereIsData);

  // }