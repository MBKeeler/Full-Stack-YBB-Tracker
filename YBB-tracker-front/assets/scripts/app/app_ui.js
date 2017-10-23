'use strict'
// const config = require('../config')
// const store = require('../store')
const showPlayerTemplate = require('../templates/player_list.handlebars')
const store = require('../store')

const enterPlayerSuccess = function () {
  console.log('data entered successfully')
  $('#nav-message').html('Player data entered successfully')
  $(':input', '#enter-data').empty()
}

const enterPlayerFailure = function (error) {
  console.error('enterPlayer failed: ', error)
  $('#signup-message').html('Player has not been saved. Please check your data and try again.')
}

const modifyPlayerSuccess = function () {
  console.log('modifyPlayerSuccess called')
}

const modifyPlayerFailure = function (error) {
  console.log('modifyPlayerFailure called', error)
}

const findPlayerSuccess = function (data) {
  console.log('findPlayerSuccess called', data)
  $('show-a-player').html('data goes here: ' + data)
}

const findPlayerFailure = function (error) {
  console.log('findPlayerFailure called', error)
}

const deletePlayerSuccess = function () {
  console.log('deletePlayerSuccess called')
}

const deletePlayerFailure = function (error) {
  console.log('deletePlayerFailure called', error)
}

const showAllPlayersSuccess = function (data) {
  console.log('showAllPlayersSuccess called', data)
}

const showAllPlayersFailure = function (error) {
  console.log('showAllPlayersFailure called', error)
}

const getPlayersSuccess = (data) => {
  console.log(data)
  const showPlayersHtml = showPlayerTemplate({ players: data.players })
  $('#view-allPlayers').append(showPlayersHtml)
}

const toggleViewMode = function () {
  $('.view-data').show()
  $('.enter-data').hide()
}

const toggleEntryMode = function () {
  $('.enter-data').show()
  $('.view-data').hide()
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
  showAllPlayersSuccess,
  showAllPlayersFailure,
  toggleEntryMode,
  toggleViewMode,
  getPlayersSuccess
}
