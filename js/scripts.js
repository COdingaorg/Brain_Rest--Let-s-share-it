//business Logic
//user object construct

//User Logic
$(document).ready(function (event) {
  //create a user object
  $('#celebrateHealth, #link1').click(function (event) {
    event.preventDefault()

    $('#userStoriesPage').show()
  })
  //toggling user story
  $('#closeStory').click(function () {
    $('#userStoriesPage').hide()
  })
  //toggling signup page on all pages
  $('#signUpPage').click(function (event) {
    event.preventDefault()
    $('#signupCont').show()
  })
  $('button#cancel').click(function (event) {
    event.preventDefault()
    $('#signupCont').hide()
  })
  //readmore button opening the entire content of comment p
  $('.comments p').after('<div class="interaction"><p class="readMore">Read More...</p><p class="replyTo">&downdownarrows;Reply</p></div><hr>');
  $('.comments .readMore').click(function (event) {
    event.preventDefault();
    $('.comment1 p').first().css('overflow', 'show')
  })
  //adding replies to comments
  $('.replyTo').click(function(event){
    event.preventDefault()
    $('.replyTo').after('<form id="userReply">'+
                       '<input type="text" id="userReply" name="userReply" width="50px">'+
                       '<button type="submit" class="submit-reply btn btn-warning">Send</button>'
                       +'</form>')
    $('form#userReply').submit(function(event){
      event.preventDefault();
      var Replys = '<p id="Replys">'+$('form#userReply input').val()+'</p>';
      $('#comment1 p').first().append(Replys)
      $('form#userReply').hide();
      $('#comment1 p').first().css('overflow', 'auto')
    })
  })
  //Side bar toggling on smaller screens
  $('#sidebarButton').click(function (event) {
    event.preventDefault();
    $('#sidebar').toggle();
  })
  $('#close1').click(function (event) {
    event.preventDefault();
    $('#forum1').hide();
  })
  $('#close2').click(function (event) {
    event.preventDefault();
    $('#forum2').hide();
  })
  $('#forum1Link').click(function (event) {
    event.preventDefault();
    $('#forum1').show();
  })
  $('#forum2Link').click(function (event) {
    event.preventDefault();
    $('#forum2').show();
  })
  //sharing users view on the discussion
  $('form#addComment1 .shareButton').click(function(event){
    event.preventDefault();
  var comment = $('input #userComment1').val();
    $('.comments').css('background-color','green')
})
})