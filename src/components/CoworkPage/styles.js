import styled from 'styled-components'

export const HeroSlider = styled.div`
	background-color: ${props => props.theme.blue};
`

export const ProfileRow = styled.div`
	h1 {
		color: ${props => props.theme.darkBlue};
		margin-bottom: 10px;
	}
`

export const ProfileRowSplit = styled(ProfileRow)`
	display: flex;
	justify-content: space-between;
`