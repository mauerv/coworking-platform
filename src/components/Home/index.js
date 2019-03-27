import React from 'react'
import { compose } from 'recompose'

import { withAuthorization, withEmailVerification } from '../Session'
import CardGrid from '../CardGrid'
import { HomeWrapper } from './styles'

const HomePage = () => (
	<HomeWrapper>
		<h1>Find the best work spaces in Mendoza</h1>
		<CardGrid />
	</HomeWrapper>
)

const condition = authUser => !!authUser

export default compose(
	withEmailVerification,
	withAuthorization(condition)
)(HomePage)