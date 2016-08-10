$(document).ready(function() {
  $.ajax({
    url: 'http://api.icndb.com/jokes/random'
  }).done(function(results) {
    console.log(results);
    $('.current_joke').text(results.value.joke);
  })


  $('#submit').on('submit', function(d) {
    d.preventDefault();


    var currentJoke = $('.current_joke').text();
    //console.log(currentJoke)
    $('ul').append("<li>"+currentJoke+"</li>")


    $.ajax({
      url: 'http://api.icndb.com/jokes/random'
    }).done(function(results) {
      console.log(results);
      $('.current_joke').text(results.value.joke);
    })
  })
});
