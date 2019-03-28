import React from 'react'
import Slider from 'react-slick'
import { HeroSlider, FlexColumn } from './styles'
import FigureGrid from '../FigureGrid'
import { coworks } from '../../util/dummyData'

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	centerMode: true
}

const getCoworkById = (id) => {
	for (var i = 0; i < coworks.length; i++) {
		if (coworks[i].id == id) {
			return coworks[i]
		}
	}
} 

const CoworkPage = ({ match }) => {
	// Estoy Funciona MAL!! Buscar por ID no por index
	const cowork = getCoworkById(match.params.cowork_id);

	return (
		<div>
			<HeroSlider>
				<Slider {...settings}>
					{cowork.images.map((image, i) => (
						<div key={i}>
							<img src={`${process.env.PUBLIC_URL}/${image}`} /> 
						</div>
					))}
				</Slider>
			</HeroSlider>
			<FlexColumn>
				<div>
					<h1>{cowork.name}</h1>
					<p>{cowork.location}</p>
					<p>
						{cowork.description}
					</p>
				</div>
				<div>
					<p>Rating {cowork.rating}</p>
				</div>
			</FlexColumn>
			<div>
				<h1>Ammenities</h1>
				<FigureGrid
					figures={cowork.ammenities}
				/>
			</div>
			<div>
				<h1>Opening Hours</h1>
				<p><strong>Monday/Friday: </strong>{cowork.weekdaySchedule}</p>
				<p><strong>Weekends: </strong>{cowork.weekendSchedule}</p>
			</div>
			<div>
				<h1>Daily Price</h1>
				<p>${cowork.price}</p>
			</div>				
		</div>
	)
}



export default CoworkPage