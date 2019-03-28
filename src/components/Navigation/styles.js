import styled from 'styled-components'

export const NavWrapper = styled.div`
	display: flex;
	justify-content: space-between;	
	padding: 0 3%;
	align-items: center;
	background-color: ${props => props.theme.blue};
`

export const NavList = styled.ul`
	display: flex;
	justify-content: flex-end;
	flex-grow: 0.3;
	align-items: center;
	color: ${props => props.theme.white};
`

export const NavLink = styled.li`
	a {
		color: ${props => props.theme.white};
	}
	button {
		color: white;
		border: 0;
		padding: 0;
		background-color: ${props => props.theme.blue};
	}
	button:hover {
		cursor: pointer;
	}
	margin-left: 30px;
`

export const NavLogo = styled.div`
	a {
		color: ${props => props.theme.white};
		font-weight: bold;
	}
`