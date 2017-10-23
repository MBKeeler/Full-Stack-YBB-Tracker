'use strict'
const getFormFields = require(`../../../lib/get-form-fields`)
const store = require('../store')
const api = require('./api')
const ui = require('./ui')
const app_api = require('../app/app_api')
const app_ui = require('../app/app_ui')

// Authentication handlers

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  //  console.log('sign-up', data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

// for sign in
const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  //  console.log('sign-in', data)
  //  console.log(data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

// for signOut

const onSignOut = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log('onSignOut: ', data)
  //  console.log(data)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// for change password
const onChangePassword = function (event) {
  event.preventDefault()
  console.log('change password ran!')

  const data = getFormFields(this)
  console.log(data)
  api.changePassWord(data)
    .then(ui.changePWSuccess)
    .catch(ui.changePWFailure)
}

// app functions I will want to move out into it's own
const onEnterPlayer = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log('enterPlayer called', data)
  app_api.enterPlayer(data)
    .then(app_ui.enterPlayerSuccess)
    .catch(app_ui.enterPlayerFailure)
}

const onModifyPlayer = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  //  console.log('sign-up', data)
  app_api.modifyPlayer(data)
    .then(app_ui.modifyPlayerSuccess)
    .catch(app_ui.modifyPlayerSuccess)
}

const onDeletePlayer = function (event) {
  console.log('onDeletePlayer called')
  const data = getFormFields(this)
  event.preventDefault()
  //  console.log('sign-up', data)
  app-api.deletePlayer(data)
    .then(app_ui.deletePlayerSuccess)
    .catch(app_ui.deletePlayerSuccess)
}

const onFindPlayer = function (event) {
  console.log('onFindPlayer called')
  const data = getFormFields(this)
  event.preventDefault()
  //  console.log('sign-up', data)
  app_api.findPlayer(data)
    .then(app_ui.findPlayerSuccess)
    .catch(app_ui.findPlayerFailure)
}

const onShowAllPlayers = function (event) {
  console.log('onShowAllPlayers called')
  const data = getFormFields(this)
  event.preventDefault()
  //  console.log('sign-up', data)
  app_api.enterPlayer(data)
    .then(app_ui.showAllPlayersSuccess)
    .catch(app_ui.showAllPlayersFailure)
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#enter-player').on('submit', onEnterPlayer)
  $('#enter-player').on('submit', onEnterPlayer)
  $('#modify-player').on('submit', onModifyPlayer)
  $('#delete-player').on('click', onDeletePlayer)
  $('#find-player').on('click', onFindPlayer)
  $('#view-allPlayers').on('click', onShowAllPlayers)
}

module.exports = {
  addHandlers
}
