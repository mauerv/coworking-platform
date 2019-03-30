import styled from 'styled-components'

import { 
	MainButton, 
	LightContainer,
	ContainerTitle 
} from '../../theme/utilComponents'

export const FigureContent = styled(LightContainer)`
	justify-content: space-between;
`

export const FigureTitle = styled(ContainerTitle)`

`

export const FigureText = styled.p`
	color: ${props => props.theme.darkBlue};
  font-weight: 500;	
`

export const FigureButton = styled(MainButton)`

`