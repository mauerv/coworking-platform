import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CardLink = styled(Link)`
	width: 200px;
	height: 350px;
	border: 1px solid ${props => props.theme.darkBlue};
	background: ${props => props.theme.lightBlue};
  padding: 15px 20px;
  border-radius: 4px;
	margin: 1%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

export const CardContent = styled.div`
		display: flex;
		flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

export const CardTitle = styled.h3`
	color: ${props => props.theme.darkBlue};
	font-weight: 600;
	margin: 10px 0 5px 0;
`

export const CardText = styled.p`
	color: ${props => props.theme.darkBlue};
	margin: 0;
`

export const CardPrice = styled.p`
	color: ${props => props.theme.darkBlue};
	font-weight: bold;
	margin: 0;
`

export const CardThumbnail = styled.div`
  height: 200px;
  width: 200px;
  margin: 0 auto;
  img {
  	max-width: 100%;
  	height: 100%;
  }
`

