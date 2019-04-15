import React from 'react'
import PropTypes from 'prop-types'

import Li from '../Li'

import * as ROUTES from '../../constants/routes'

import { 
	ListWrapper,
	ListTitle 
} from './styles'

const List = ({ listTitle, items }) => (
  <ListWrapper>
  	{listTitle && <ListTitle>{listTitle}</ListTitle>}
    {items.map((item, i) => (
			<Li 
				key={i}
				text={item.coworkName} 
				url={`${ROUTES.COWORKS}/${item.uid}`}
				onClickEdit={() => ''}
				onClickDelete={() => ''}
			/>
    ))}
  </ListWrapper>
)

List.propTypes = {
	listTitle: PropTypes.string,
	items: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired
	}).isRequired).isRequired
}

export default List