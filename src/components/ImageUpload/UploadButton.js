import React from 'react'
import PropTypes from 'prop-types'

import { 
	UploadButtonWrapper,
	UploadIcon,
	UploadInput
} from './styles'

const UploadButton = ({ onChange }) =>
	<UploadButtonWrapper>
		<label htmlFor='single'>
			<UploadIcon icon='image' size='8x' />
		</label>
		<UploadInput type='file' id='single' onChange={onChange} />
	</UploadButtonWrapper>

UploadButton.propTypes = {
	onChange: PropTypes.func.isRequired
}

export default UploadButton