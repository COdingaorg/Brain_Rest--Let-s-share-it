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
})