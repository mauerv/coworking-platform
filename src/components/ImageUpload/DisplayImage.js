import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

export default ({ image, onRemoveImage }) =>
	<div>
		<div
			onClick={() => onRemoveImage()}
			className='delete'
		>
			<FontAwesomeIcon icon={faTimesCircle} size='2x' />
		</div>
		<img src={image} alt='' />
	</div>
