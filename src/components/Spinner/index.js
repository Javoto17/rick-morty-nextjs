import React from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'

const Spinner = (props) => {
  return (
    <div>
      <FontAwesomeIcon icon={faLaptopCode} />
    </div>
  )
}

Spinner.propTypes = {}

export default Spinner
