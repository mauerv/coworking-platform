import React from 'react'
import { 
	CheckboxIcon,
} from './styles'

export default ({ onChange }) =>
	<div>
		<label htmlFor='single'>
			<CheckboxIcon icon='image' size='10x' />
		</label>
		<input type='file' id='single' onChange={onChange} />
	</div>
