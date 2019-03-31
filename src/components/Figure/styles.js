import styled from 'styled-components'

export const FigureWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 75px;
  justify-content: center;
  align-items: center;
  margin: 10px;
`

export const FigureImage = styled.img`

`

export const FigureLabel = styled.p`
	color: ${props => props.theme.darkBlue};
	font-weight: 500;
`