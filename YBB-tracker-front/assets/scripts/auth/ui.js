'use strict'
const store = require('../store')

// begin authentication relate functions
const signUpSuccess = function (data) {
  // console.log(data)
  $('#signup-message').html('You have signed up successfully. Now login.')
  $('#sign-up').fadeOut()
}

const signUpFailure = function (error) {
  console.error(error)
  $('#signup-message').html('Sign up has <span style="color:#ff0000">failed</span>. Please try again.')
}

const signInSuccess = function (data) {
  console.log(data)
  $('.enter-data').show()
  $('.welcome-box').hide()
  $('.navigation-bar').show()
  $('#nav-message').html('You have signed in successfully').fadeOut(8000)
  // we have to store the user data or header somwhere.  sto we will put it in ../store.js
  store.user = data.user
}

const signInFailure = function (error) {
  console.error(error)
  $('#signin-message').show().html('Sign In <span style="color:#f4c542">failed</span>. Please try again')
}

const signOutSuccess = function () {
  // console.log(data)
  $('.enter-data').hide()
  $('.navigation-bar').hide()
  $('.welcome-box').show()
  $(':input', '#sign-in').val('')
  $('#signin-message').html('You have signed out successfully').fadeOut(8000)
  // need to clear memory of the user information which includes token and auth header
  store.user = null
}

const signOutFailure = function (error) {
  console.error(error)
  $('#nav-message').html('Sign Out <span style="color:#f4c542">Failed</span>')
}

const changePWSuccess = function () {
  $('#nav-message').show().html('You have successfully changed your password')
  $(':input', '#change-password').val('')
  $('#change-password').hide()
}

const changePWFailure = function (error) {
  console.error(error)
  $('#nav-message').html('Change of Password  <span style="color:#f4c542">Failed</span>. Please try again.')
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
