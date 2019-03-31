import React from 'react'

import {
	FigureWrapper,
	MainIcon,
	FigureLabel
} from './styles'

const Figure = ({ icon, label }) => (
	<FigureWrapper>
		<MainIcon icon={icon} size='2x' />
		<FigureLabel>{label}</FigureLabel>
	</FigureWrapper>
)

export default Figure