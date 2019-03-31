import React from 'react'

import {
	FigureWrapper,
	FigureIcon,
	FigureLabel
} from './styles'

const Figure = ({ icon, label }) => (
	<FigureWrapper>
		<FigureIcon icon={icon} size='2x' />
		<FigureLabel>{label}</FigureLabel>
	</FigureWrapper>
)

export default Figure