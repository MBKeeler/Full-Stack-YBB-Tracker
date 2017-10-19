'use strict'
const store = require('../store')

// begin authentication relate functions
const signUpSuccess = function (data) {
  // console.log(data)
  $('#message').show().html('You have signed up <span style="color:#00ff00">successfully</span>. Now login to play.')
  $('#sign-up').fadeOut()
}

const signUpFailure = function (error) {
  console.error(error)
  $('#message').show().html('Sign up has <span style="color:#ff0000">failed</span>. Please try again.')
}

const signInSuccess = function (data) {
  // console.log(data)
  $('#message').html('You have signed in <span style="color:green">successfully</span>')
  // we have to store the user data or header somwhere.  sto we will put it in ../store.js
  store.user = data.user
}

const signInFailure = function (error) {
  console.error(error)
  $('#message').show().html('Sign In <span style="color:#ff0000">failed</span>. Please try again')
}

const signOutSuccess = function () {
  // console.log(data)
  $('#message').html('You have signed out <span style="color:green">successfully</span>')
  // need to clear memory of the user information which includes token and auth header
  store.user = null
}

const signOutFailure = function (error) {
  console.error(error)
  $('#message').html('Sign Out  <span style="color:#ff0000">Failed</span>')
}

const changePWSuccess = function () {
  $('#message3').show().html('You have <span style="color:green">successfully</span> changed your password')
  $(':input', '#change-password').val('')
}

const changePWFailure = function (error) {
  console.error(error)
  $('#message3').html('Change of Password  <span style="color:#ff0000">Failed</span>. Please try again.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePWSuccess,
  changePWFailure
}
