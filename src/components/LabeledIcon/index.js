import React from 'react'
import PropTypes from 'prop-types'

import {
	LabeledIconWrapper,
	MainIcon,
	IconLabel
} from './styles'

const LabeledIcon = ({ iconName, label, iconSize }) => (
	<LabeledIconWrapper>
		<MainIcon icon={iconName} size={iconSize || '2x'} />
		<IconLabel>{label}</IconLabel>
	</LabeledIconWrapper>
)

LabeledIcon.propTypes = {
	iconName: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	iconSize: PropTypes.string
}

export default LabeledIcon