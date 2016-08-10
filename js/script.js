$(document).ready(function() {

  $('#submit').on('submit', function(d) {
    d.preventDefault();
      console.log('Documentation button was clicked')

    $.ajax({
      url: 'http://api.icndb.com/jokes/random'
    }).done(function(results) {
      console.log(results);
    $('.current_joke').text(results.value.joke);
    })
    .fail(function() {
      alert( "error" );
    });
    return false;
  })
});


$.ajax({
  url: 'http://api.icndb.com/jokes/random'
}).done(function(results) {
  console.log(results);
$('.current_joke').text(results.value.joke);
})
.fail(function() {
  alert( "error" );
});
