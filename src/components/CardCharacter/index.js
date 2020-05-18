import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

import useNearScreen from '../../hooks/useNearScreen'

import styles from './index.module.css'

const CardCharacter = ({ character }) => {
  const { isNearScreen, fromRef } = useNearScreen({
    rootMargin: '100px'
  })

  const { origin, status, name, image, gender, location, species } = character

  return (
    <div
      className='max-w-sm rounded overflow-hidden shadow-lg mx-8 mb-4 bg-white shadow'
      ref={fromRef}
    >
      <div className={styles.imagecard}>
        <img className='w-full' src={isNearScreen ? image : ''} alt={name} />
      </div>
      <div className='px-6 py-4'>
        <p className='font-bold text-2xl mb-2'>{name}</p>
        {location && (
          <p className='font-medium my-2 truncate text-gray-700 mx-auto text-xs sm:text-lg md:text-base text-base xl:text-xs'>
            <span className='pr-2 text-blue-500'>
              <FontAwesomeIcon icon={faMapMarkerAlt} size='lg' />
            </span>
            {location.name}
          </p>
        )}
        <div className='divide-y divide-gray-400 mb-2'>
          <div className='flex py-2 align-middle'>
            <span className={styles.infoCardTitle}>Status:</span>
            <p className={styles.infoCardText}>{status}</p>
          </div>
          <div className='flex py-2 align-middle'>
            <span className={styles.infoCardTitle}>Origin:</span>
            <p className={styles.infoCardText}>{origin.name}</p>
          </div>
          <div className='flex py-2'>
            <span className={styles.infoCardTitle}>Gender:</span>
            <p className={styles.infoCardText}>{gender}</p>
          </div>
        </div>
        <div className='flex flex-grow flex-wrap gap-2'>
          <div className='bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-1 hover:bg-gray-400'>{`#${species}`}</div>
          <div className='bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-1 hover:bg-gray-400'>{`#${status}`}</div>
          <div className='bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-1 hover:bg-gray-400'>{`#${gender}`}</div>
        </div>
      </div>
    </div>
  )
}

CardCharacter.propTypes = {
  character: PropTypes.shape({
    origin: PropTypes.shape({
      name: PropTypes.string
    }),
    status: PropTypes.string,
    location: PropTypes.shape({
      name: PropTypes.string
    }),
    name: PropTypes.string,
    image: PropTypes.string,
    gender: PropTypes.string,
    species: PropTypes.string
  })
}

export default CardCharacter
