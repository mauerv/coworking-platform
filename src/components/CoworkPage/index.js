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

const CoworkPage = () => (
	<div>
		<HeroSlider>
			<Slider {...settings}>
				{coworks[0].images.map(image => (
					<div>
						<img src={'cowork-wide.png'} /> 
					</div>
				))}
			</Slider>
		</HeroSlider>
		<FlexColumn>
			<div>
				<h1>{coworks[0].name}</h1>
				<p>{coworks[0].location}</p>
				<p>
					{coworks[0].description}
				</p>
			</div>
			<div>
				<p>Rating {coworks[0].rating}</p>
			</div>
		</FlexColumn>
		<div>
			<h1>Ammenities</h1>
			<FigureGrid
				figures={coworks[0].ammenities}
			/>
		</div>
		<div>
			<h1>Opening Hours</h1>
			<p><strong>Monday/Friday: </strong>{coworks[0].weekdaySchedule}</p>
			<p><strong>Weekends: </strong>{coworks[0].weekendSchedule}</p>
		</div>
		<div>
			<h1>Daily Price</h1>
			<p>${coworks[0].price}</p>
		</div>				
	</div>
)

export default CoworkPage