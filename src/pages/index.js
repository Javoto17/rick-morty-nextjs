import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import Link from 'next/link'

import MainLayout from '../layouts/MainLayout'

import { characterService } from '../services'

import CardCharacter from '../components/CardCharacter'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Home({ characters }) {
  useEffect(() => {
    console.log(characters)
  }, [characters])

  return (
    <MainLayout>
      <div className="py-20">
        <h1 className="title mx-auto px-8">Rick and Morty</h1>
        <div className="mx-auto sm:w-1/4 md:w-3/4 lg:w-3/4 xl:w-3/4 w-3/4 w-full px-8">
          <form className="flex flex-row shadow rounded">
            <input
              className="h-16 bg-gray-100 text-grey-darker py-2 font-normal text-grey-darkest border border-gray-100 font-bold w-full py-1 px-2 pl-2 outline-none text-lg text-gray-600 rounded-l focus:border-current focus:border-1"
              type="text" placeholder="Character" />
            <span
              className="flex bg-gray-100 rounded-r rounded-l-none border-0 ">
              <button
                className="bg-secondary hover:bg-blue-500 text-lg text-white md:py-3 md:px-6 px-4 py-4 rounded-r">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </span>
          </form>
        </div>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {characters && characters.length && characters.map(
          (character) => (
            <Link href="/character/[id]" as={`/character/${character.id}`} key={character.id}>
              <a>
                <CardCharacter character={character} />
              </a>
            </Link>
          ))
        }
      </div>

    </MainLayout>
  )
}

export async function getStaticProps() {
  const res = await characterService.getAllCharacters()
  const characters = res.data.results

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
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number
  }))
}

export default Home
