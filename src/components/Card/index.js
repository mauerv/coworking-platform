import React from 'react'
import PropTypes from 'prop-types'
import * as ROUTES from '../../constants/routes'

import { 
	CardLink,
	CardTitle,
	CardText,
	CardPrice,
	CardRating,
	CardContent,
	CardStats,
	CardThumbnail
} from './styles'

//<CardThumbnail>
	//<img src={`${process.env.PUBLIC_URL}/${images[0]}`} />
//</CardThumbnail>

const Card = ({ title, text, price, rating, images, id }) => (
	<CardLink to={`${ROUTES.COWORKS}/${id}`}>
		<CardContent>
			<CardThumbnail>
		 		<img src={`${process.env.PUBLIC_URL}/${images[0]}`} />
		 	</CardThumbnail>
			<CardTitle>
				{title}
			</CardTitle>	
			<CardText>
				{text}
			</CardText>
		</CardContent>
		<CardStats>
			<CardPrice>
				${price} Per Day
			</CardPrice>
			<CardRating>
				{rating}
			</CardRating>
		</CardStats>
	</CardLink>
)

Card.propTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	rating: PropTypes.number.isRequired,
	images: PropTypes.arrayOf(PropTypes.string),
	id: PropTypes.number.isRequired
}

export default Card