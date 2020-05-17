import axios from 'axios'

import config from '../utils/config'

async function getCharacter (id) {
  const character = await axios.get(`${config.api}/character/${id}`)

  return character
}

async function getAllCharacters (filter = {
  page: null,
  name: null,
  status: null,
  species: null,
  type: null,
  gender: null
}) {
  let url = `${config.api}character/`

  if (filter) {
    const paramsKey = Object.keys(filter)

    const params = paramsKey.filter(key => filter[key])

    params.map((key, i) => {
      const prefix = i === 0 ? '?' : '&'
      if (filter[key]) {
        url += `${prefix}${key}=${filter[key]}`
      }
    })
  }

  try {
    const res = await axios.get(url)
    return res.data
  } catch (error) {
    return {
      results: []
    }
  }
}

async function getMultipleCharacters (listOfIds) {
  let charactersIds = ''

  if (listOfIds && listOfIds.length) {
    charactersIds = listOfIds.join()
  }

  const characters = await axios.get(`${config.api}/character/${charactersIds}`)

  return characters
}

export { getCharacter, getAllCharacters, getMultipleCharacters }
