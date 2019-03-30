import React from 'react'

import {
	FigureContent,
	FigureTitle,
	FigureText,
	FigureButton
} from './styles'

const FigureWithButton = ({ title, text, onClick }) => (
	<div>
		{title && <FigureTitle>{title}</FigureTitle>}
		<FigureContent>
			<FigureText>{text}</FigureText>
			<FigureButton onClick={onClick}>Create Cowork</FigureButton>
		</FigureContent>
	</div>
)

export default FigureWithButton

