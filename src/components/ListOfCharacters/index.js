import React from 'react'
import PropTypes from 'prop-types'

import Link from 'next/link'

import CardCharacter from '../CardCharacter'

import styles from './index.module.css'

const ListOfCharacters = ({ data }) => {
  return (
    <div className={styles.gridcards}>
      {data &&
        data.length > 0 &&
        data.map(character => (
          <Link
            href="/character/[id]"
            as={`/character/${character.id}`}
            key={`character-${character.id}`}
          >
            <a className="transition ease-out duration-700 transform hover:scale-105">
              <CardCharacter character={character} />
            </a>
          </Link>
        ))}
      {data &&
        data.length === 0 &&
        <picture className="mx-auto py-8">
          <img src="/assets/img/morty_loading.gif" alt="There aren't results" />
        </picture>
      }
    </div>
  )
}

ListOfCharacters.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number
    })
  )
}

export default ListOfCharacters
