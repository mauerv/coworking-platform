import React, { Component } from 'react'
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
	error: null
}

class CoworkCreate extends Component {
	constructor(props) {
		super(props)

		this.state = { ...INITIAL_STATE }
	}

	render() {
		const { error } = this.props

		return (
			<div>
				<FormWrapper>
					<FormRow>
						<FormItem>
							<TextLabel for={"cowork-name"}>Cowork Name</TextLabel>
							<TextInput 
								id="cowork-name"
								type="text"
								placeholder="Cowork Name"
							/>
						</FormItem>
						<FormItem>
							<TextLabel for={"location"}>Location</TextLabel>
							<TextInput 
								id="location"
								type="text"
								placeholder="Cowork Location"
							/>
						</FormItem>
					</FormRow>
					<FormRow>
						<FormItem>
							<TextLabel for={"small-description"}>Small Description</TextLabel>
							<TextInput 
								id="small-description"
								type="text"
								placeholder="Small Description"
							/>
						</FormItem>
					</FormRow>
					<FormRow>
						<FormItem>
							<TextLabel for={"description"}>Description</TextLabel>
							<TextArea id="description">
							</TextArea>
						</FormItem>
					</FormRow>
					<AmmenitiesRow>
						<FormCheckbox>
							<img src={"coffee.png" } />
							<label for="whiteboard">Whiteboard</label>
							<input 
								type="checkbox" 
								value="Whiteboard"
								id="whiteboard" 
							/>
						</FormCheckbox>
						<FormCheckbox>
							<img src={"coffee.png" } />
							<label for="coffee">Coffee</label>
							<input 
								type="checkbox" 
								value="Coffee"
								id="coffee" 
							/>
						</FormCheckbox>
						<FormCheckbox>
							<img src={"coffee.png" } />
							<label for="fridge">Fridge</label>
							<input 
								type="checkbox" 
								value="Fridge"
								id="fridge" 
							/>
						</FormCheckbox>
						<FormCheckbox>
							<img src={"coffee.png" } />
							<label for="Mate">Mate</label>
							<input 
								type="checkbox" 
								value="Mate"
								id="Mate" 
							/>
						</FormCheckbox>
						<FormCheckbox>
							<img src={"coffee.png" } />
							<label for="ping-pong">PingPong</label>
							<input 
								type="checkbox" 
								value="PingPong"
								id="ping-pong" 
							/>
						</FormCheckbox>
						<FormCheckbox>
							<img src={"coffee.png" } />
							<label for="music">Music</label>
							<input 
								type="checkbox" 
								value="Music"
								id="music" 
							/>
						</FormCheckbox>
					</AmmenitiesRow>
					<FormRow>
						<FormItem>
							<TextLabel for={"opening-hours"}>Opening Hours Weekdays</TextLabel>
							<TextInput 
								id="hours-weekdays"
								type="text"
								placeholder="8:00 - 20:00"
							/>	
						</FormItem>
						<FormItem>				
							<TextLabel for={"hours-weekends"}>Opening Hours Weekends</TextLabel>
							<TextInput 
								id="hours-weekends"
								type="text"
								placeholder="Closed"
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

export default CoworkCreate
