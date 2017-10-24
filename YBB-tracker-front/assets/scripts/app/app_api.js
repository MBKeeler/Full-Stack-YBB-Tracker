'use strict'
const config = require('../config')
const store = require('../store')

const enterPlayer = function (data) {
  console.log('app_api.enterPlayer called:', data)
  return $.ajax({
    url: config.apiOrigin + '/players',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const modifyPlayer = function (data) {
  console.log('app_api.modifyPlayer called: ', data.player.id)
  const playerID = data.player.id
  return $.ajax({
    url: config.apiOrigin + '/players/' + playerID,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deletePlayer = function (data) {
  console.log('deltePlayer called')
  return $.ajax({
    url: config.apiOrigin + '/players/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const findPlayer = function (data) {
  console.log('app_api.findPlayer called', data)
  return $.ajax({
    url: config.apiOrigin + '/players',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const showAllPlayers = function () {
  console.log('showAllPlayers called')
  return $.ajax({
    url: config.apiOrigin + '/players',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
    // data
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
