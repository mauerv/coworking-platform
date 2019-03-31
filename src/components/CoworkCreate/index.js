import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import ImageUpload from '../ImageUpload'
import { 
	withAuthorization, 
	withEmailVerification 
} from '../Session'
import { compose } from 'recompose'
import { 
	FormWrapper,
	FormRow,
	FormItem,
	TextInput,
	TextLabel,
	TextArea,
	FormCheckbox,
	FormSubmit,
	Alert,
	AmmenitiesRow,
	MainIcon
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

		this.props.firebase.coworks().push({
			...this.state,
			userId: this.props.authUser.uid
		}).then(ref => {
			this.setState({ ...INITIAL_STATE })
			this.props.history.push(`${ROUTES.COWORKS}/${ref.key}`)
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
					<AmmenitiesRow>
						<FormCheckbox>
							<MainIcon icon="smoking" size='3x' alt="hot-mug" />
							<label htmlFor="smoking">Smoking</label>
							<input 
								type="checkbox" 
								checked={ammenitiesSmoking}
								id="smoking" 
								name="ammenitiesSmoking"
								onChange={this.onCheckboxToggle}
							/>
						</FormCheckbox>
						<FormCheckbox>
							<MainIcon icon="mug-hot" size='3x' alt="hot-mug" />
							<label htmlFor="coffee">Coffee</label>
							<input 
								type="checkbox" 
								checked={ammenitiesCoffee}
								id="coffee" 
								name="ammenitiesCoffee"
								onChange={this.onCheckboxToggle}
							/>
						</FormCheckbox>
						<FormCheckbox>
							<MainIcon icon="snowflake" size='3x' alt="hot-mug" />
							<label htmlFor="fridge">Fridge</label>
							<input 
								type="checkbox" 
								checked={ammenitiesFridge}
								id="fridge" 
								name="ammenitiesFridge"
								onChange={this.onCheckboxToggle}
							/>
						</FormCheckbox>
						<FormCheckbox>
							<MainIcon icon="handshake" size='3x' alt="hot-mug" />
							<label htmlFor="meetings">Meetings</label>
							<input 
								type="checkbox" 
								checked={ammenitiesMeetings}
								id="meetings"
								name="ammenitiesMeetings"
								onChange={this.onCheckboxToggle} 
							/>
						</FormCheckbox>
						<FormCheckbox>
							<MainIcon icon="table-tennis" size='3x' alt="hot-mug" />
							<label htmlFor="pingpong">PingPong</label>
							<input 
								type="checkbox" 
								checked={ammenitiesPingpong}
								id="pingpong" 
								name="ammenitiesPingpong"
								onChange={this.onCheckboxToggle}
							/>
						</FormCheckbox>
						<FormCheckbox>
							<MainIcon icon="music" size='3x' alt="hot-mug" />
							<label htmlFor="music">Music</label>
							<input 
								type="checkbox" 
								checked={ammenitiesMusic}
								id="music" 
								name="ammenitiesMusic"
								onChange={this.onCheckboxToggle}
							/>
						</FormCheckbox>
					</AmmenitiesRow>
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
					<FormRow>
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
					</FormRow>
					<FormSubmit type="submit" disabled={isInvalid}>Create Cowork</FormSubmit>
					{error && <Alert>{error}</Alert>}
				</FormWrapper>
			</div>
		)
	}
}

const condition = authUser => !!authUser

export default compose(
	withEmailVerification,
	withAuthorization(condition),
	withRouter
)(CoworkCreate)
