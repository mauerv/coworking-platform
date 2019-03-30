import React from 'react'
import PropTypes from 'prop-types'

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

FigureWithButton.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
}

export default FigureWithButton

