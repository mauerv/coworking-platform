import React from 'react'
import Slider from 'react-slick'
import { compose } from 'recompose'

import { 
	withAuthorization, 
	withEmailVerification, 
	userIsAuthenticated
} from '../../session'

import Grid from '../Grid'
import LabeledIcon from '../LabeledIcon'

import { coworks } from '../../util/dummyData'

import { 
	HeroSlider, 
	ProfileRow
} from './styles'

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	arrows: false,
	slidesToScroll: 1,
	className: 'profile-carousel'
}

const getCoworkById = (id) => {
	for (var i = 0; i < coworks.length; i++) {
		if (coworks[i].id == id) {
			return coworks[i]
		}
	}
} 

const CoworkPage = ({ match }) => {
	const cowork = getCoworkById(match.params.cowork_id);

	return (
		<div>
			<HeroSlider>
				<Slider {...settings}>
					{cowork.images.map((image, i) => (
						<div key={i}>
							<img src={`${process.env.PUBLIC_URL}/${image}`} alt='' /> 
						</div>
					))}
				</Slider>
			</HeroSlider>
			<ProfileRow>
				<div>
					<h1>{cowork.name}</h1>
					<p>{cowork.location}</p>
					<p>
						{cowork.description}
					</p>
				</div>
			</ProfileRow>
			<ProfileRow>
				<Grid 
					gridTitle="Ammenities"
					justifyContent='space-between'
					alignTitle='left'
				>
					{cowork.ammenities.map((ammenity, i) => (
						<LabeledIcon 
							iconName={ammenity.iconName}
							label={ammenity.label}
							key={i}
						/>
					))}
				</Grid>
			</ProfileRow>
			<ProfileRow>
				<h1>Opening Hours</h1>
				<p><strong>Monday/Friday: </strong>{cowork.weekdaySchedule}</p>
				<p><strong>Weekends: </strong>{cowork.weekendSchedule}</p>
			</ProfileRow>
			<ProfileRow>
				<h1>Daily Price</h1>
				<p>${cowork.price}</p>
			</ProfileRow>				
		</div>
	)
}

export default compose(
	withEmailVerification,
	withAuthorization(userIsAuthenticated)
)(CoworkPage)
