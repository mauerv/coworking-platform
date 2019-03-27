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

const Card = ({ title, text, price, rating }) => (
 	<Link to={ROUTES.COWORK}>
	<Wrapper>
		<Slider {...settings}>
      <div>
        <img src={'cowork.jpeg'} />
      </div>
      <div>
        <img src={'cowork.jpeg'} />
      </div>
      <div>
        <img src={'cowork.jpeg'} />
      </div>
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