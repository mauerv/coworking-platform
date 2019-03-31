import React from 'react'
import PropTypes from 'prop-types'
import Card from '../Card'
import { 
	GridWrapper,
	GridTitle 
} from './styles'

const CardGrid = ({ gridTitle, cardsData }) => (
	<div>
		{gridTitle && <GridTitle>{gridTitle}</GridTitle>}
		<GridWrapper>
			{cardsData.map(cardData => (
				<Card 
					title={cardData.name}
					text={cardData.shortDescription}
					price={cardData.price}
					rating={cardData.rating}
					images={cardData.images}
					id={cardData.id}
					key={cardData.id}
				/>
			))}
		</GridWrapper>
	</div>
)

CardGrid.propTypes = {
	gridTitle: PropTypes.string,
	cardsData: PropTypes.array.isRequired
}

export default CardGrid