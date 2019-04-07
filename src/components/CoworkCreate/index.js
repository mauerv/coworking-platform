import React, { Component } from 'react'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'

import { 
	withAuthorization, 
	withEmailVerification,
	userIsAuthenticated
} from '../Session'

import ImageUpload from '../ImageUpload'
import Grid from '../Grid'
import Checkbox from '../Checkbox'

import * as ROUTES from '../../constants/routes'

import { ammenities } from '../../util/dummyData'

import { 
	FormWrapper,
	FormRow,
	FormItem,
	TextInput,
	TextLabel,
	TextArea,
	FormSubmit,
	Alert
} from './styles'

const INITIAL_STATE = {
	name: '',
	coworkLocation: '',
	smallDescription: '',
	description: '',
	ammenitiesSmoking: false,
	ammenitiesCoffee: false,
	ammenitiesFridge: false,
	ammenitiesMeetings: false,
	ammenitiesPingpong: false,
	ammenitiesMusic: false,
	openingWeekday: '',
	openingWeekend: '',
	imageOne: '',
	imageTwo: '',
	imageThree: '',
	error: null
}

class CoworkCreate extends Component {
	constructor(props) {
		super(props)

		this.state = { ...INITIAL_STATE }
	}

	onCreateCowork = event => {
		event.preventDefault()

		const { authUser, firebase, history } = this.props

		firebase.coworks().push({
			...this.state,
			userId: authUser.uid
		}).then(ref => {
			firebase.user(authUser.uid).child('coworks').push(ref.key)
			this.setState({ ...INITIAL_STATE })
			history.push(`${ROUTES.COWORKS}/${ref.key}`)
		})
	}

	onTextInputChange = event => {
		this.setState({ [event.target.name]: event.target.value })
	}

	onCheckboxToggle = event => {	
		this.setState({ [event.target.name]: event.target.checked })
	}

	render() {
		const { 
			name, 
			smallDescription, 
			coworkLocation, 
			description,
			ammenitiesSmoking,
			ammenitiesCoffee,
			ammenitiesFridge,
			ammenitiesMeetings,
			ammenitiesPingpong,
			ammenitiesMusic,
			openingWeekday,
			openingWeekend,
			imageOne,
			imageTwo,
			imageThree,
			error 
		} = this.state

		const isInvalid = 
			name === '' || 
			smallDescription === '' ||
			description === '' ||
			openingWeekday === '' ||
			openingWeekend === ''

		return (
			<div>
				<FormWrapper onSubmit={this.onCreateCowork}>
					<FormRow>
						<FormItem>
							<TextLabel htmlFor="cowork-name">Cowork Name</TextLabel>
							<TextInput 
								id="cowork-name"
								name="name"
								type="text"
								value={name}
								placeholder="Cowork Name"
								onChange={this.onTextInputChange}
							/>
						</FormItem>
						<FormItem>
							<TextLabel htmlFor="location">Location</TextLabel>
							<TextInput 
								id="location"
								name="coworkLocation"
								type="text"
								value={coworkLocation}
								placeholder="Cowork Location"
								onChange={this.onTextInputChange}
							/>
						</FormItem>
					</FormRow>
					<FormRow>
						<FormItem>
							<TextLabel htmlFor="small-description">Small Description</TextLabel>
							<TextInput 
								id="small-description"
								name="smallDescription"
								type="text"
								value={smallDescription}
								placeholder="Small Description"
								onChange={this.onTextInputChange}
							/>
						</FormItem>
					</FormRow>
					<FormRow>
						<FormItem>
							<TextLabel htmlFor="description">Description</TextLabel>
							<TextArea 
								id="description" 
								name="description"
								value={description}
								onChange={this.onTextInputChange}
							>

							</TextArea>
						</FormItem>
					</FormRow>
					<Grid>
						{ammenities.map((ammenity, i) => (
							<Checkbox 
								iconName={ammenity.iconName}
								id={ammenity.id}
								label={ammenity.label}
								checked={this.state[ammenity.name]}
								name={ammenity.name}
								onCheckboxToggle={this.onCheckboxToggle}
								key={i}
							/>
						))}
					</Grid>
					<FormRow>
						<FormItem>
							<TextLabel htmlFor="hours-weekdays">Opening Hours Weekdays</TextLabel>
							<TextInput 
								id="hours-weekdays"
								name="openingWeekday"
								type="text"
								value={openingWeekday}
								placeholder="8:00 - 20:00"
								onChange={this.onTextInputChange}
							/>	
						</FormItem>
						<FormItem>				
							<TextLabel htmlFor="hours-weekends">Opening Hours Weekends</TextLabel>
							<TextInput 
								id="hours-weekends"
								name="openingWeekend"
								type="text"
								value={openingWeekend}
								placeholder="Closed"
								onChange={this.onTextInputChange}
							/>
						</FormItem>
					</FormRow>
					<Grid justifyContent='space-around'>
						<ImageUpload 
							image={imageOne}
							onImageUpdate={url => this.setState({imageOne: url})}
							onRemoveImage={() => this.setState({imageOne: ''})} 
						/>
						<ImageUpload 
							image={imageTwo}
							onImageUpdate={url => this.setState({imageTwo: url})}
							onRemoveImage={() => this.setState({imageTwo: ''})}
						/>
						<ImageUpload 
							image={imageThree}
							onImageUpdate={url => this.setState({imageThree: url})}
							onRemoveImage={() => this.setState({imageThree: ''})}
						/>
					</Grid>
					<FormSubmit type="submit" disabled={isInvalid}>Create Cowork</FormSubmit>
					{error && <Alert>{error}</Alert>}
				</FormWrapper>
			</div>
		)
	}
}

export default compose(
	withEmailVerification,
	withAuthorization(userIsAuthenticated),
	withRouter
)(CoworkCreate)
