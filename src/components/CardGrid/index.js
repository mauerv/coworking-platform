import React from 'react'
import Card from '../Card'
import { GridWrapper } from './styles'

const CardGrid = ({ cardsData }) => (
	<GridWrapper>
		{cardsData.map(cardData => (
			<Card 
				title={cardData.name}
				text={cardData.shortDescription}
				price={cardData.price}
				rating={cardData.rating}
				images={cardData.images}
				id={cardData.id}
			/>
		))}
	</GridWrapper>
)

export default CardGrid