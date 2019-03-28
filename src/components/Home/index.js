import React from 'react'
import { compose } from 'recompose'

import { withAuthorization, withEmailVerification } from '../Session'
import CardGrid from '../CardGrid'
import { HomeWrapper } from './styles'

import { coworks } from '../../util/dummyData'

const HomePage = () => (
	<HomeWrapper>
		<h1>Find the best work spaces in Mendoza</h1>
		<CardGrid 
			cardsData={coworks}
		/>
	</HomeWrapper>
)

const condition = authUser => !!authUser

export default compose(
	withEmailVerification,
	withAuthorization(condition)
)(HomePage)