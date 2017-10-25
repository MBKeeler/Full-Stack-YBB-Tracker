'use strict'
// const config = require('../config')
// const store = require('../store')
const app_api = require('./app_api')
const showPlayerTemplate = require('../templates/helpers/player_list.handlebars')
// const store = require('../store')

const enterPlayerSuccess = function () {
//  console.log('data entered successfully')
  $('#nav-message').html('Player data entered successfully')
  $(':input', '#modify-player').val(' ')
}

const enterPlayerFailure = function (error) {
  // console.error('enterPlayer failed: ', error)
  $('#signup-message').html('Player has not been saved. Please check your data and try again.')
}

const modifyPlayerSuccess = function () {
//  console.log('modifyPlayerSuccess called')
$('#nav-message').html('Player data updated successfully')
$(':input', '#enter-data').empty()
}

const modifyPlayerFailure = function (error) {
  console.log('modifyPlayerFailure called', error)
}

const findPlayerSuccess = function (data) {
//  console.log('findPlayerSuccess called', data)
  $('show-a-player').html('data goes here: ' + data)
}

const findPlayerFailure = function (error) {
  console.log('findPlayerFailure called', error)
}

const deletePlayerSuccess = function () {
  // console.log('deletePlayerSuccess called')
  app_api.showAllPlayers()
}

const deletePlayerFailure = function (error) {
  console.log('deletePlayerFailure called', error)
}

// const showAllPlayersSuccess = function (data) {
//   console.log('showAllPlayersSuccess called', data)
// }
//
// const showAllPlayersFailure = function (error) {
//   console.log('showAllPlayersFailure called', error)
// }

const getPlayersSuccess = (data) => {
  // console.log(data)
  $('#view-PlayersList').show()
  const showPlayersHtml = showPlayerTemplate({ players: data.players })
  $('#view-PlayersList').append(showPlayersHtml)
  // $('#view-allPlayers').append(showPlayersHtml)
}

const toggleViewMode = function () {
  $('.view-data').show()
  $('.enter-data').hide()
}

const toggleEntryMode = function () {
  $('.enter-data').show()
  $('.view-data').hide()
}

const toggleModForm = function () {
  $('#modify-a-player').show()
  $('#view-PlayersList').hide()
}
const revealChngPwForm = function () {
  // console.log('app_ui.reavealChangePWForm called')
  $('#change-password').show()
}

const hideChngePwForm = function () {
  $('#change-password').hide()
}

module.exports = {
  enterPlayerSuccess,
  enterPlayerFailure,
  modifyPlayerSuccess,
  modifyPlayerFailure,
  findPlayerSuccess,
  findPlayerFailure,
  deletePlayerSuccess,
  deletePlayerFailure,
  // showAllPlayersSuccess,
  // showAllPlayersFailure,
  toggleEntryMode,
  toggleViewMode,
  getPlayersSuccess,
  toggleModForm,
  revealChngPwForm,
  hideChngePwForm
}
