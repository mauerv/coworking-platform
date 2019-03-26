import styled from 'styled-components'

export const FeatureWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 250px;
  align-items: center;
`

export const FeatureTextWrap = styled.div`
	width: 50%;
`

export const FeatureImage = styled.img`
	height: 150px;
`

export const FeatureTitle = styled.h2`
	color: ${ props => props.theme.darkBlue };
`

export const FeatureText = styled.p`
`

export const FeatureButton = styled.a`
	color: ${ props => props.theme.white };
	background-color: ${ props => props.theme.darkBlue };
  border-radius: 5px;
  padding: 10px 20px
  margin: 15px 0;
	display: inline-block;	
`