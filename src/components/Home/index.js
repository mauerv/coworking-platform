import React from 'react'
import { compose } from 'recompose'

import { withAuthorization, withEmailVerification } from '../Session'

import Grid from '../Grid'
import Card from '../Card'

import { coworks } from '../../util/dummyData'

import { HomeWrapper } from './styles'

const HomePage = () => (
	<HomeWrapper>
		<Grid 
			gridTitle="Find the best work spaces in Mendoza"
			gridData={coworks}
			Component={Card}
		>
			{coworks.map((cowork, i) => (
				<Card {...cowork} key={i} />
			))}
		</Grid>
	</HomeWrapper>
)

const condition = authUser => !!authUser

export default compose(
	withEmailVerification,
	withAuthorization(condition)
)(HomePage)