import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { 
	DisplayImageWrapper,
	CloseIcon
} from './styles'

const DisplayImage = ({ image, onRemoveImage }) =>
	<DisplayImageWrapper>
		<CloseIcon 
			icon='times-circle' 
			size='2x' 
			onClick={() => onRemoveImage()}
		/>
		<img src={image} alt='' />
	</DisplayImageWrapper>

DisplayImage.propTypes = {
	image: PropTypes.string.isRequired,
	onRemoveImage: PropTypes.func.isRequired
}

export default DisplayImage