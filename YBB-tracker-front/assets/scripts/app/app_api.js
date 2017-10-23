'use strict'
const config = require('../config')
const store = require('../store')

const enterPlayer = function (data) {
  console.log('enterData called')
  return $.ajax({
    url: config.apiOrigin + '/players/' + store.user.id,
    method: 'POST',
    data
  })
}

const modifyPlayer = function (data) {
  console.log('modifyPlayer called')
  return $.ajax({
    url: config.apiOrigin + '/players/' + store.user.id,
    method: 'PATCH',
    data
  })
}

const deletePlayer = function (data) {
  console.log('modifyPlayer called')
  return $.ajax({
    url: config.apiOrigin + '/players/' + store.user.id,
    method: 'DELETE',
    data
  })
}

const findPlayer = function (data) {
  console.log('findPlayer called')
  return $.ajax({
    url: config.apiOrigin + '/players/' + store.user.id,
    method: 'GET',
    data
  })
}

const showAllPlayers = function (data) {
  console.log('findPlayer called')
  return $.ajax({
    url: config.apiOrigin + '/players/' + store.user.id,
    method: 'POST',
    data
  })
}

module.exports = {
  enterPlayer,
  modifyPlayer,
  deletePlayer,
  findPlayer,
  showAllPlayers
}

//  associated curl .sh with enterData
// POST "http://localhost:4741/players" \
//   --header "Content-Type: application/json" \
//   --header "Authorization: Token token=$TOKEN" \
//   --data '{
//     "player": {
//       "first_name": "'"${FIRST_NAME}"'",
//       "last_name": "'"${LAST_NAME}"'",
//       "age": "'"${AGE}"'",
//       "grade": "'"${GRADE}"'",
//       "program": "'"${PROGRAM}"'",
//       "notes": "'"${NOTES}"'"
//       "catch": "'"${CATCH}"'",
//       "throw": "'"${THROW}"'",
//       "pitch": "'"${PITCH}"'",
//       "bat": "'"${BAT}"'",
//       "athleticism": "'"${ATHLETICISM}"'"
//     }
//   }'