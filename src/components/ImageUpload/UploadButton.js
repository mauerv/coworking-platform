import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default ({ onChange }) =>
	<div className='button'>
		<label htmlFor='single'>
			<FontAwesomeIcon icon='image' color='#3B599' size='10x' />
		</label>
		<input type='file' id='single' onChange={onChange} />
	</div>
