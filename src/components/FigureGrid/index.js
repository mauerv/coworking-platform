import React from 'react'
import Figure from '../Figure'

import { GridWrapper } from './styles'

const FigureGrid = ({ figures }) => (
	<GridWrapper>
		{figures.map(figure => (
			<Figure 
				image={`${process.env.PUBLIC_URL}/${figure.image}`} 
				label={figure.label} 
				key={figure.label}
			/>
		))} 
	</GridWrapper>
)

export default FigureGrid