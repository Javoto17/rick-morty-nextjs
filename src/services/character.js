import axios from 'axios'

import config from '../utils/config'

async function getCharacter (id) {
  const character = await axios.get(`${config.api}/character/${id}`)

  return character
}

async function getAllCharacters () {
  const characters = await axios.get(`${config.api}/character/`)

  return characters
}

async function getMultipleCharacters (listOfIds) {
  let charactersIds = ''

  if (listOfIds && listOfIds.length) {
    charactersIds = listOfIds.join()
  }

  const characters = await axios.get(`${config.api}/character/${charactersIds}`)

  return characters
}

export {
  getCharacter,
  getAllCharacters,
  getMultipleCharacters
}
