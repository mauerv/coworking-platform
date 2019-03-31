import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import {
	LiWrapper,
	LiText,
	LiButtons,
	LiButton
} from './styles'

const Li = ({ text, url, onClickEdit, onClickDelete }) => (
	<LiWrapper>
		<LiText>
			<Link to={url}>{text}</Link>
		</LiText>
		<LiButtons>
			<LiButton onClick={onClickEdit}>Edit</LiButton>
			<LiButton onClick={onClickDelete}>Delete</LiButton>
		</LiButtons>
	</LiWrapper>
)

Li.propTypes = {
	text: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	onClickEdit: PropTypes.func.isRequired,
	onClickDelete: PropTypes.func.isRequired
}

export default Li