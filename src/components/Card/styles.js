import styled from 'styled-components'

export const Wrapper = styled.div`
	width: 200px;
	background-color: ${props => props.theme.blue};
	border: 2px solid ${props => props.theme.white};
	border-radius: 10px;
	padding: 15px 30px;
	margin: 1%;
`

export const Carousel = styled.div`
	
`

export const Title = styled.h3`
	color: ${props => props.theme.white};
	margin-bottom: 10px;
`

export const Text = styled.p`
	margin: 0;
`

export const Rating = styled.p`
	color: ${props => props.theme.white};
`

export const Price = styled.p`
	color: ${props => props.theme.white};
`

export const CardContent = styled.div`
		display: flex;
		flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 10px 0;
`

export const CardStats = styled.div`
  display: flex;
  justify-content: space-between;
`