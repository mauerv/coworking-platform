import React from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'

import { 
	Wrapper,
	Title,
	Text,
	Price,
	Rating,
	CardContent,
	CardStats
} from './styles'

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1
}

const Card = ({ title, text, price, rating, images, id }) => (
 	<Link to={`${ROUTES.COWORKS}/${id}`}>
	<Wrapper>
		<Slider {...settings}>
			{images.map(image => (
	      <div>
	        <img src={`${process.env.PUBLIC_URL}/${image}`} />
	      </div>
			))}
		</Slider>	
		<CardContent>
			<Title>
				{title}
			</Title>	
			<Text>
				{text}
			</Text>
		</CardContent>
		<CardStats>
			<Price>
				{price}
			</Price>
			<Rating>
				{rating}
			</Rating>
		</CardStats>
	</Wrapper>
	</Link>
)

export default Card