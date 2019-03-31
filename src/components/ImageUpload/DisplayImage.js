import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default ({ image, onRemoveImage }) =>
	<div>
		<div
			onClick={() => onRemoveImage()}
			className='delete'
		>
			<FontAwesomeIcon icon='times-circle' size='2x' />
		</div>
		<img src={image} alt='' />
	</div>
