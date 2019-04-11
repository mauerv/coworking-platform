import styled from 'styled-components'
import { Field } from 'redux-form'
 
import { 
	Alert,	
	MainIcon, 
	FormWrapper,
	FormRow,
	FormItem,
	FormLabel,
	FormSubmit
} from '../../theme/utilComponents'

export const CreateCoworkWrapper = styled.div`
	
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

export { 
	Alert, 
	MainIcon, 
	FormWrapper,
	FormRow,
	FormItem,
	FormLabel,
	FormSubmit
}