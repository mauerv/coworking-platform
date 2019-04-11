import React from 'react'
import PropTypes from 'prop-types'

import { 
	GridWrapper,
	GridItems,
	GridTitle 
} from './styles'

const Grid = ({ gridTitle, children, justifyContent, alignTitle }) => (
	<GridWrapper>
		{gridTitle && <GridTitle alignTitle={alignTitle}>{gridTitle}</GridTitle>}
		<GridItems justifyContent={justifyContent}>
			{children}
		</GridItems>
	</GridWrapper>
)

Grid.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element).isRequired,
	gridTitle: PropTypes.string,
	justifyContent: PropTypes.string,
	alignTitle: PropTypes.string
}

export default Grid