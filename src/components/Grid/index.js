import React from 'react'
import PropTypes from 'prop-types'

import { 
	GridWrapper,
	GridTitle 
} from './styles'

const Grid = ({ gridTitle, children, justifyContent, alignTitle }) => (
	<div>
		{gridTitle && <GridTitle alignTitle={alignTitle}>{gridTitle}</GridTitle>}
		<GridWrapper justifyContent={justifyContent}>
			{children}
		</GridWrapper>
	</div>
)

Grid.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element).isRequired,
	gridTitle: PropTypes.string,
	justifyContent: PropTypes.string,
	alignTitle: PropTypes.string
}

export default Grid