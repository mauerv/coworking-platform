import React from 'react'
import { compose } from 'recompose'

import { withAuthorization, withEmailVerification } from '../Session'

import Grid from '../Grid'
import Card from '../Card'

import { HomeWrapper } from './styles'

import { coworks } from '../../util/dummyData'

const HomePage = () => (
	<HomeWrapper>
		<Grid 
			gridTitle="Find the best work spaces in Mendoza"
			gridData={coworks}
			Component={Card}
		/>
	</HomeWrapper>
)

const condition = authUser => !!authUser

export default compose(
	withEmailVerification,
	withAuthorization(condition)
)(HomePage)