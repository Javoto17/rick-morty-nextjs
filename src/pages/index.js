import React, { useEffect, useState, useRef, useCallback } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'

import MainLayout from '../layouts/MainLayout'

import { characterService } from '../services'

import ListOfCharacters from '../components/ListOfCharacters'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSearch } from '@fortawesome/free-solid-svg-icons'

import useNearScreen from '../hooks/useNearScreen'

import compare from 'just-compare'

// import debounce from 'just-debounce-it'

const initialFilter = {
  name: null,
  status: null,
  species: null,
  type: null,
  gender: null,
  page: null
}

function Home ({ characters }) {
  const [listOfCharacters, setListOfCharacters] = useState(characters)
  const [filter, setFilter] = useState(initialFilter)
  const refEnd = useRef(null)
  const { isNearScreen } = useNearScreen({
    rootMargin: '100px',
    externalRef: listOfCharacters && !!listOfCharacters.length ? refEnd : 0
  }, false)

  useEffect(() => {
    async function getCharacters () {
      const { info, results } = await characterService.getAllCharacters(filter)
      if (info && results) {
        setListOfCharacters(filter.page !== 1 ? [...listOfCharacters, ...results] : results)
      }
    }
    if (!compare(filter, initialFilter)) {
      getCharacters()
    }
  }, [filter])

  const { register, handleSubmit } = useForm()

  const onSubmit = ({ name }) => {
    setFilter({
      ...filter,
      name,
      page: 1
    })
  }

  const onScroll = useCallback(() => {
    setFilter({ ...filter, page: filter.page + 1 })
  }, [isNearScreen])

  useEffect(() => {
    if (isNearScreen) {
      onScroll()
    }
  }, [onScroll, isNearScreen])

  return (
    <MainLayout>
      <div className="py-20">
        <h1 className="title my-16 mx-8">Rick and Morty</h1>
        <div className="mx-auto sm:w-1/4 md:w-3/4 lg:w-3/4 xl:w-3/4 w-3/4 w-full px-8">
          <form
            className="flex flex-row shadow rounded"
            onSubmit={handleSubmit(onSubmit)}>
            <input
              className="h-16 bg-gray-100 text-grey-darker py-2 font-normal text-grey-darkest border border-gray-100 font-bold w-full py-1 px-2 pl-2 outline-none text-lg text-gray-600 rounded-l focus:border-current focus:border-1"
              type="text"
              placeholder="Character"
              name="name"
              ref={register}
            />
            <span className="flex bg-gray-100 rounded-r rounded-l-none border-0 ">
              <button
                className="bg-secondary hover:opacity-75 focus:outline-none text-lg text-white md:py-3 md:px-6 px-4 py-4 rounded-r"
                type="submit">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </span>
          </form>
        </div>
      </div>

      <ListOfCharacters data={listOfCharacters} />

      <div id="visor-end-list" ref={refEnd}></div>
    </MainLayout>
  )
}

export async function getStaticProps () {
  const res = await characterService.getAllCharacters(null)
  const characters = res.results

  return {
    props: {
      characters
    }
  }
}

Home.defaultProps = {
  characters: []
}

Home.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number
    })
  )
}

export default Home
