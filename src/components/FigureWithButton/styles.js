import styled from 'styled-components'

import { MainButton } from '../../theme/utilComponents'

export const FigureContent = styled.div`
	display: flex;
	justify-content: space-between;
	border: ${props => props.theme.darkBlue};
	background: ${props => props.theme.lightBlue};
  border-radius: 4px;
  padding: 15px 20px;
`

export const FigureTitle = styled.h1`
	color: ${props => props.theme.darkBlue};
	margin-bottom: 10px;
`

export const FigureText = styled.p`
	color: ${props => props.theme.darkBlue};
  font-weight: 500;	
`

export const FigureButton = styled(MainButton)`

`