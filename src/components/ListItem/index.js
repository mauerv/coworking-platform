import React from 'react'

const ListItem = ({ text, onClickEdit, onClickDelete }) => (
	<div>
		<p>{text}</p>
		<div>
			<button onClick={onClickEdit}>Edit</button>
			<button onClick={onClickDelete}>Delete</button>
		</div>
	</div>
)

export default ListItem