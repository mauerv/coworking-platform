import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const MainIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.blue};
`

export const MainButton = styled.button`
  color: ${props => props.theme.white}
  background-color: ${props => props.theme.blue}
  border-color: ${props => props.theme.blue}
  border-radius: 5px;
  padding: 10px 20px; 
`

export const LightContainer = styled.div`
  display: flex;
  border: ${props => props.theme.darkBlue};
  background: ${props => props.theme.lightBlue};
  border-radius: 4px;
  padding: 15px 20px;
`

export const ContainerTitle = styled.h1`
  color: ${props => props.theme.darkBlue};
  margin-bottom: 10px;
`

export const Alert = styled.p`
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
  border-radius: 3px;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
`

// Form Components //

export const FormWrapper = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
`
export const FormRow = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 20px 0;
`

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  flex-grow: 1;
`
export const FormTitle = styled.h1`
  text-align: center;
  margin: 40px;
  color: ${props => props.theme.darkBlue};
`

export const FormLabel = styled.label`
  margin-bottom: 5px;
`

export const FormInput = styled.input`
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 10px 25px;
`

export const FormSubmit = styled(MainButton)`
  margin: 20px;
  padding: 10px 50px; 
  align-self: center;
`

