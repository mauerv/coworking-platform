import styled from 'styled-components'

import { 
	MainButton,
	MainIcon, 
	Alert 
} from '../../theme/utilComponents'

export const FormWrapper = styled.form` 
	display: flex;
	flex-direction: column;
`

export const FormRow = styled.div`
	display: flex;
	justify-content: flex-start;
	margin: 20px 0;
`

export const AmmenitiesRow = styled(FormRow)`
	flex-wrap: wrap;
`

export const FormItem = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 20px;
	flex-grow: 1;
`

export const FormCheckbox = styled(FormItem)` 
	align-items: center;
	input {
		margin: 10px 0;
	}
`

export const TextLabel = styled.label`
	margin-bottom: 5px;
`

export const TextInput = styled.input`
	padding: 10px 30px 10px 10px;
  border-radius: 5px;
`

export const TextArea = styled.textarea`
	height: 100px;
  border-radius: 5px;
  padding: 10px;
  border-width: 2px;
  border-style: inset;
  border-color: initial;
  border-image: initial;	
`

export const FormSubmit = styled(MainButton)`
	margin: 20px;
  padding: 10px 50px; 
  align-self: center;
`

export { Alert, MainIcon }