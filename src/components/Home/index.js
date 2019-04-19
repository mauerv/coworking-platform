import React, { Component } from 'react'

import Grid from '../Grid'
import Card from '../Card'

import { HomeWrapper } from './styles'

export default class Home extends Component {
	componentDidMount() {
		this.props.onCoworkListFetch()
	}

	componentWillUnmount() {
		this.props.firebase.coworks().off()
	}

	render() {
		const { coworks } = this.props

		return (
			<HomeWrapper>
				{coworks.length !== 0 ? (
					<Grid 
						gridTitle="Find the best work spaces in Mendoza"
					>
						{coworks.map((cowork, i) => (
							<Card 
							 key={i} 
							 name={cowork.coworkName} 
							 shortDescription={cowork.smallDescription} 
							 price={24}
							 images={cowork.images} 
							 id={cowork.uid}
							/>
						))}
					</Grid>
				) : (
					<div>
						<h2>There are no coworks.</h2>
					</div>
				)}

			</HomeWrapper>
		)
	}
}
