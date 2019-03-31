import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const FigureWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 75px;
  justify-content: center;
  align-items: center;
  margin: 10px;
`

export const FigureIcon = styled(FontAwesomeIcon)`
	color: ${props => props.theme.blue};
`

export const FigureLabel = styled.p`
	color: ${props => props.theme.blue};
	font-weight: 500;
`