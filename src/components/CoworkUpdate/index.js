import React, { Component } from 'react'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'
import { Field, FormSection, reduxForm } from 'redux-form'

import { 
	withAuthorization, 
	withEmailVerification,
	userIsAuthenticated
} from '../../session'

import Grid from '../Grid'
import Checkbox from '../Checkbox'

import * as ROUTES from '../../constants/routes'

import {
	UpdateCoworkWrapper,
	FormWrapper,
	FormRow,
	FormItem,
	FormLabel,
	TextInput,
	FormSubmit
} from './styles'

class CoworkUpdate extends Component {
	componentDidMount() {
		this.props.onCoworkDataFetch(this.props.match.params.cowork_id)
	}

	onUpdateCowork = values => {
		const { authUser, firebase, history } = this.props
		const { ...coworkData } = values
		coworkData.userId = authUser.uid
		coworkData.ammenities = Object.keys(values.ammenities)
		const storage = firebase.storage.ref()

		Promise.all(
			Object.keys(values.images).map(key => {
				let img = values.images[key][0]
				return storage.child(img.name).put(img)
			})
		)
		.then(uploadedImgs => {
			return Promise.all(
				uploadedImgs.map(uploadedImg => {
					return storage.child(uploadedImg.ref.fullPath).getDownloadURL()
				})
			)
		})
		.then(urls => {
			coworkData.images = urls

			firebase.cowork(this.props.match.params.cowork_id).set(coworkData).then(ref => {
				this.props.onCoworkListSet({ [ref.key]: coworkData })
				this.props.onUserCoworkAdd(ref.key)
				history.push(`${ROUTES.COWORKS}/${ref.key}`)
			})
		})	
	}
	

	renderField = ({ input, label, placeholder, type, meta: { touched, error } }) => (
		<FormItem>
			<FormLabel>{label}</FormLabel>
			<TextInput {...input} type={type} placeholder={placeholder} />
			{touched && error && <span>{error}</span>}
		</FormItem>
	)

	renderFileUpload = ({ input, type, meta: { touched, error, warning } }) => {
		delete input.value

		return (
			<FormItem>
				<FormLabel htmlFor={input.name}>
					<input {...input} type={type} />
				</FormLabel>
			</FormItem>
		)
	}

	render() {
		const { handleSubmit, ammenities, initialValues, cowork } = this.props
		return (
			<UpdateCoworkWrapper>
				<FormWrapper onSubmit={handleSubmit(this.onUpdateCowork)}>
					<FormRow>
						<Field name='coworkName' component={this.renderField} label='Cowork Name' />
						<Field name='coworkLocation' component={this.renderField} label='Cowork Location' />
					</FormRow>
					<FormRow>
						<Field name='smallDescription' component={this.renderField} label='Small Description' /> 
					</FormRow>
					<FormRow>
						<Field name='description' type='textarea' component={this.renderField} label='Description' /> 
					</FormRow>
					<FormSection name='ammenities'>
						<Grid justifyContent='space-around'>
							{ammenities.map((ammenity, index) => (
								<Field 
									{...ammenity} 
									key={ammenity.label}
									name={ammenity.uid} 
									type='checkbox' 
									component={Checkbox} 
								/>
							))}
						</Grid>
					</FormSection>
					<FormRow>
						<Field name='openingWeekday' component={this.renderField} label='Opening Weekday' /> 
						<Field name='openingWeekend' component={this.renderField} label='Opening Weekend' />
					</FormRow>
					<Grid justifyContent='space-around' gridTitle='Add Images' >
						<FormSection name='images'>
							<Field name='picture1' type='file' component={this.renderFileUpload} label='Upload Image' />
							<Field name='picture2' type='file' component={this.renderFileUpload} label='Upload Image' />
							<Field name='picture3' type='file' component={this.renderFileUpload} label='Upload Image' />
						</FormSection>
					</Grid>
					<FormSubmit type="submit">Updates Cowork</FormSubmit>
				</FormWrapper>
			</UpdateCoworkWrapper>
		)
	}
}

export default compose(
	withEmailVerification,
	withAuthorization(userIsAuthenticated),
	withRouter,
	reduxForm({
		form: 'updateCowork',
		enableReinitialize: true
	})
)(CoworkUpdate)
