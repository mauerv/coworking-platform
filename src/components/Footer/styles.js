import styled from 'styled-components'

export const FooterWrapper = styled.div`
	left: 0px;
	bottom: 0px;
	height: 75px;
	width: 96%;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.blue};
  border-color: ${props => props.theme.darkBlue};
  display: flex;
  justify-content: flex-start;
  padding: 0 2%;
`

export const FooterLogo = styled.h1`

`
