import React from 'react'
import PropTypes from 'prop-types'

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

Feature.propTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	linkText: PropTypes.string.isRequired,
	onLinkClick: PropTypes.func.isRequired,
	img: PropTypes.string.isRequired
}

export default Feature