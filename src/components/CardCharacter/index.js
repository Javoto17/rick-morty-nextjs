import React from 'react'
import PropTypes from 'prop-types'

const CardCharacter = ({ character }) => {
  const { origin, status, name, image } = character
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-8 mb-4 bg-white shadow">
      <img className="w-full" src={image} alt="Sunset in the mountains"/>
      <div className="px-6 py-4">
        <p className="font-bold text-xl mb-2">
          {name}
        </p>
        <div className="divide-y divide-gray-400">
          <div className="flex py-2">
            <span className="font-bold pr-2 text-left inline-block">
             Status:
            </span>
            <p className="text-right font-regular inline-block w-full">
              {status}
            </p>
          </div>
          <div className="flex py-2">
            <span className="font-bold pr-2 text-left inline-block">
             Status:
            </span>
            <p className="text-right font-regular inline-block w-full">
              {status}
            </p>
          </div>
        </div>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
      </div>
    </div>
  )
}

CardCharacter.propTypes = {

}

export default CardCharacter
