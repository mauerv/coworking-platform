import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Li from '../Li'

import * as ROUTES from '../../constants/routes'

import { 
	ListWrapper,
	ListTitle 
} from './styles'

class List extends Component {
	render() {
		const { listTitle, items, onClickDelete, onClickUpdate } = this.props
		return (
		  <ListWrapper>
		  	{listTitle && <ListTitle>{listTitle}</ListTitle>}
		    {items.map((item, i) => (
					<Li 
						key={i}
						text={item.coworkName} 
						url={`${ROUTES.COWORKS}/${item.uid}`}
						onClickUpdate={() => onClickUpdate(item.uid)}
						onClickDelete={() => onClickDelete(item.uid, item.userId)}
					/>
		    ))}
		  </ListWrapper>
		)
	}
}

List.propTypes = {
	listTitle: PropTypes.string,
	items: PropTypes.arrayOf(PropTypes.shape({
		coworkName: PropTypes.string.isRequired,
		uid: PropTypes.string.isRequired
	}).isRequired).isRequired
}

export default List