import styled from 'styled-components'

export const NavigationWrapper = styled.div`
	display: flex;
	justify-content: flex-end;	
	padding: 0 3%;
	align-items: center;
	background-color: ${props => props.theme.blue};
`

export const NavigationList = styled.ul`
	display: flex;
	justify-content: space-evenly;
	flex-grow: 0.3;
	align-items: center;
	color: ${props => props.theme.white};
`

export const NavigationLink = styled.li`
	a {
		color: ${props => props.theme.white};
	}
	button {
		color: white;
		border: 0;
		background-color: ${props => props.theme.blue};
	}
	button:hover {
		cursor: pointer;
	}
`