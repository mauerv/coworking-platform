import React from 'react'
import PropTypes from 'prop-types'

import { 
	GridWrapper,
	GridTitle 
} from './styles'

const Grid = ({ gridTitle, gridData, Component, justifyContent, alignTitle }) => (
	<div>
		{gridTitle && <GridTitle alignTitle={alignTitle}>{gridTitle}</GridTitle>}
		<GridWrapper justifyContent={justifyContent}>
			{gridData.map((item, i ) => (
				<Component {...item} key={i} />
			))}
		</GridWrapper>
	</div>
)

Grid.propTypes = {
	gridTitle: PropTypes.string,
	gridData: PropTypes.array.isRequired,
	Component: PropTypes.element.isRequired,
	justifyContent: PropTypes.string,
	alignTitle: PropTypes.string
}

export default Grid