import React from 'react'
import PropTypes from 'prop-types'

import {
 CheckboxWrapper,
 CheckboxLabel,
 MainIcon
} from './styles'

const Checkbox = ({ 
	iconName, 
	iconSize,
	id,  
	label, 
	checked, 
	name, 
	onCheckboxToggle 
}) => (
  <CheckboxWrapper>
    <MainIcon icon={iconName} size={iconSize || '3x'} alt={iconName} />
    <CheckboxLabel htmlFor={id}>{label}</CheckboxLabel>
    <input 
			type="checkbox" 
			checked={checked}
			id={id} 
			name={name}
			onChange={onCheckboxToggle}
		/>
  </CheckboxWrapper>
)

Checkbox.propTypes = {
	iconName: PropTypes.string.isRequired,
	iconSize: PropTypes.string,
	label: PropTypes.string.isRequired,
	checked: PropTypes.bool.isRequired,
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	onCheckboxToggle: PropTypes.func.isRequired
}

export default Checkbox

						
							
							
							