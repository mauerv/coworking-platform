import React from 'react'

import {
	FigureWrapper,
	FigureImage,
	FigureLabel
} from './styles'

const Figure = ({ image, label }) => (
	<FigureWrapper>
		<FigureImage src={image} />
		<FigureLabel>{label}</FigureLabel>
	</FigureWrapper>
)

export default Figure