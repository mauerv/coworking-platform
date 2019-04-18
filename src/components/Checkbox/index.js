import React from 'react'

import {
 CheckboxWrapper,
 CheckboxLabel,
 MainIcon
} from './styles'

const	Checkbox = ({ 
	input, 
	label, 
	type, 
	icon, 
	iconSize, 
	meta: { touched, error } 
}) => (
		<CheckboxWrapper>
			<MainIcon icon={icon} size={iconSize || '3x'} alt={icon} />
			<CheckboxLabel>{label}</CheckboxLabel>
			<input {...input} type={type} />
			{touched && error && <span>{error}</span>}
		</CheckboxWrapper>
	)

export default Checkbox

						
							
							
							