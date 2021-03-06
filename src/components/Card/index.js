import React from 'react'
import PropTypes from 'prop-types'

import * as ROUTES from '../../constants/routes'

import { 
	CardLink,
	CardTitle,
	CardText,
	CardPrice,
	CardContent,
	CardThumbnail
} from './styles'

const Card = ({ name, shortDescription, price, images, id }) => (
	<CardLink to={`${ROUTES.COWORKS}/${id}`}>
		<CardContent>
			<CardThumbnail>
		 		<img src={images ? images[0] : `${process.env.PUBLIC_URL}/olegario.jpg`} alt='' />
		 	</CardThumbnail>
			<CardTitle>
				{name}
			</CardTitle>	
			<CardText>
				{shortDescription}
			</CardText>
		</CardContent>
		<CardPrice>
			${price} Per Day
		</CardPrice>
	</CardLink>
)

Card.propTypes = {
	name: PropTypes.string.isRequired,
	shortDescription: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	images: PropTypes.arrayOf(PropTypes.string),
	id: PropTypes.string.isRequired
}

export default Card