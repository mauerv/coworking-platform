import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DisplayImage = ({ image, onRemoveImage }) =>
	<div>
		<div
			onClick={() => onRemoveImage()}
			className='delete'
		>
			<FontAwesomeIcon icon='times-circle' size='2x' />
		</div>
		<img src={image} alt='' />
	</div>

DisplayImage.propTypes = {
	image: PropTypes.string.isRequired,
	onRemoveImage: PropTypes.func.isRequired
}

export default DisplayImage