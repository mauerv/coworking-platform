import React, { Component } from 'react'
import Slider from 'react-slick'
import { compose } from 'recompose'

import { 
	withAuthorization, 
	withEmailVerification, 
	userIsAuthenticated
} from '../../session'

import Grid from '../Grid'
import LabeledIcon from '../LabeledIcon'

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

class CoworkPage extends Component {
	componentDidMount() {
		// fetch data from firebase if it's not on redux 
		if (this.props.cowork === undefined) {
			const { cowork_id } = this.props.match.params;
			this.props.firebase.cowork(cowork_id).on('value', snapshot => {
				// if the cowork doesn't exist on redux, show a 404 error

				// if it is, dispatch action to add data to store
				this.props.doCoworkSet({ ...snapshot.val(), uid: cowork_id })
			})
		}
	}

	componentWillUnmount() {
		this.props.firebase.cowork().off()
	}

	render() {
		const { cowork } = this.props

		return (
			<div>
				<HeroSlider>
					<Slider {...settings}>
						{cowork.images.map((image, i) => (
							<div key={i}>
								<img src={image} alt='' /> 
							</div>
						))}
					</Slider>
				</HeroSlider>
				<ProfileRow>
					<div>
						<h1>{cowork.name}</h1>
						<p>{cowork.coworkLocation}</p>
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
						
					<LabeledIcon 
						iconName={'mug-hot'}
						label={'Coffee'}
						key={0}
					/>
					</Grid>
				</ProfileRow>
				<ProfileRow>
					<h1>Opening Hours</h1>
					<p><strong>Monday/Friday: </strong>{cowork.openingWeekday}</p>
					<p><strong>Weekends: </strong>{cowork.openingWeekend}</p>
				</ProfileRow>
				<ProfileRow>
					<h1>Daily Price</h1>
					<p>$10</p>
				</ProfileRow>				
			</div>
		)
	}
}

export default compose(
	withEmailVerification,
	withAuthorization(userIsAuthenticated)
)(CoworkPage)
