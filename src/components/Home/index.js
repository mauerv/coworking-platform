import React, { Component } from 'react'

import Grid from '../Grid'
import Card from '../Card'

import { HomeWrapper } from './styles'

export default class Home extends Component {
	componentDidMount() {
		this.props.firebase.coworks().on('value', snapshot => {
			this.props.doCoworkListSet(snapshot.val())
		})
	}

	componentWillUnmount() {
		this.props.firebase.coworks().off()
	}

	render() {
		const { coworks } = this.props
		
		return (
			<HomeWrapper>
				<Grid 
					gridTitle="Find the best work spaces in Mendoza"
				>
					{coworks.map((cowork, i) => (
						<Card 
						 key={i} 
						 name={cowork.name} 
						 shortDescription={cowork.smallDescription} 
						 price={24}
						 images={[cowork.imageOne, cowork.imageTwo, cowork.imageThree]} 
						 id={cowork.uid}
						/>
					))}
				</Grid>
			</HomeWrapper>
		)
	}
}
