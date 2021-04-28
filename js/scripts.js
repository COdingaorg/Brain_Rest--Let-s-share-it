//business Logic

//User Logic
$(document).ready(function (event) {
  $('#celebrateHealth, #link1').click(function (event) {
    event.preventDefault()

    $('#userStoriesPage').show()
  })
  $('#closeStory').click(function () {
    $('#userStoriesPage').hide()
  })
  $('#signUpPage').click(function(event){
    event.preventDefault()
    $('#signupCont').show()
  })
  $('button#cancel').click(function(event){
    event.preventDefault()
    $('#signupCont').hide()
  })
  $('#comments p').after('<div class="interaction"><p class="readMore">Read More...</p><p class="replyTo">&downdownarrows;Reply</p></div><hr>');
  $('#comments .readMore').click(function(event){
    event.preventDefault();
    $('#comment1 p').first().css('overflow','show')
  })  
})