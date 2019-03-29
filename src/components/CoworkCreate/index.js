import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
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
	ImageInput,
	AmmenitiesRow
} from './styles'

const INITIAL_STATE = {
	name: '',
	coworkLocation: '',
	smallDescription: '',
	description: '',
	ammenitiesWhiteboard: false,
	ammenitiesCoffee: false,
	ammenitiesFridge: false,
	ammenitiesMate: false,
	ammenitiesPingpong: false,
	ammenitiesMusic: false,
	openingWeekday: '',
	openingWeekend: '',
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
			ammenitiesWhiteboard,
			ammenitiesCoffee,
			ammenitiesFridge,
			ammenitiesMate,
			ammenitiesPingpong,
			ammenitiesMusic,
			openingWeekday,
			openingWeekend,
			error 
		} = this.state

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
							<img src={"coffee.png"} alt="coffee" />
							<label htmlFor="whiteboard">Whiteboard</label>
							<input 
								type="checkbox" 
								checked={ammenitiesWhiteboard}
								id="whiteboard" 
								name="ammenitiesWhiteboard"
								onChange={this.onCheckboxToggle}
							/>
						</FormCheckbox>
						<FormCheckbox>
							<img src={"coffee.png"} alt="coffee" />
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
							<img src={"coffee.png"} alt="coffee" />
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
							<img src={"coffee.png"} alt="coffee" />
							<label htmlFor="mate">Mate</label>
							<input 
								type="checkbox" 
								checked={ammenitiesMate}
								id="mate"
								name="ammenitiesMate"
								onChange={this.onCheckboxToggle} 
							/>
						</FormCheckbox>
						<FormCheckbox>
							<img src={"coffee.png"} alt="coffee" />
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
							<img src={"coffee.png"} alt="coffee" />
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
						<ImageInput type="button" onClick={() => alert("Not implemented")} value="Add Image" />
					</FormRow>
					<FormSubmit type="submit">Create Cowork</FormSubmit>
					{error && <Alert>{error}</Alert>}
				</FormWrapper>
			</div>
		)
	}
}

export default withRouter(CoworkCreate)
