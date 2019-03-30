import React from 'react'

import ListItem from '../ListItem'

const List = ({ items }) => (
  <div>
    {items.map((item, i) => (
			<ListItem 
				key={i}
				text={item.name}
				onClickEdit={() => ''}
				onClickDelete={() => ''}
			/>
    ))}
  </div>
)

export default List