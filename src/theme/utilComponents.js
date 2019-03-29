import styled from 'styled-components'

export const MainButton = styled.button`
  color: ${props => props.theme.white}
  background-color: ${props => props.theme.blue}
  border-color: ${props => props.theme.blue}
  border-radius: 5px;
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
export const FormTitle = styled.h1`
  text-align: center;
  margin: 40px;
  color: ${props => props.theme.darkBlue};
`

export const FormWrapper = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const FormInput = styled.input`
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 10px 25px;
`

export const FormSubmit = styled(MainButton)`
  margin: 20px;
  padding: 10px 50px; 
`

