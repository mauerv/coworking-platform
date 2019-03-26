import React from 'react'

import PageHeader from '../PageHeader'
import Feature from '../Feature'

const Landing = () => (
	<div>
		<PageHeader />
		<Feature 
			title={'For Digital Workers'}
			text={'Are you an entrepreneur, developer or designer looking for that perfect spot to work and colaborate with others?'}
			linkText={'Explore Coworks'}
			onLinkClick={() => alert('I do nothing.')}
			img={'work.png'}
		/>
		<Feature
			title={'Have a Space?'}
			text={'Have some room in your home that others could use as a cowork? Do you work from home and would enjoy some other minds around to give you insights?'}
			linkText={'Add a Cowork'}
			onLinkClick={() => alert('I do nothing.')}
			img={'home.png'}
		/>
	</div>
)
export default Landing


