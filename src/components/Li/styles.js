import styled from 'styled-components'
import { 
	MainButton,
	LightContainer
} from '../../theme/utilComponents'

export const LiWrapper = styled(LightContainer)`
	justify-content: space-between;
	align-items: center;
	border: 1px solid ${props => props.theme.white}	
`

export const LiText = styled.p`
	a {
		color: ${props => props.theme.darkBlue};
  	font-weight: 500;
	}	
`

export const LiButtons = styled.div`
	display: flex;
	justify-content: space-between;
`

export const LiButton = styled(MainButton)`
	margin-left: 30px;
`
