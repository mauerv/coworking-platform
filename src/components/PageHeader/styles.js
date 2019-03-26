import styled from 'styled-components'

export const HeaderWrapper = styled.div`
	font-family: Roboto, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
  flex-direction: column;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.darkBlue};
`

export const HeaderImage = styled.h1`
	font-size: 3em;
	margin: 0;
`

export const HeaderText = styled.h2`
	font-size: 2em;
	margin: 0;
`