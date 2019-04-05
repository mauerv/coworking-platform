import React from 'react'

import { 
	FeatureWrapper,
	FeatureTextWrap,
	FeatureImage, 
	FeatureTitle, 
	FeatureText, 
	FeatureButton 
} from './styles'

const Feature = ({title, text, linkText, onLinkClick, img}) => (
	<FeatureWrapper>
		<FeatureTextWrap>
			<FeatureTitle>
				{title}
			</FeatureTitle>
			<FeatureText>
				{text}
			</FeatureText>
			<FeatureButton onClick={onLinkClick} href={'#'}>
				{linkText}
			</FeatureButton>
		</FeatureTextWrap>
		<FeatureImage src={img} />
	</FeatureWrapper>
)

export default Feature