import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import Landing from './'
import PageHeader from '../PageHeader'
import Feature from '../Feature'

it('renders without crashing', () => {
	const div = document.createElement('div')
	ReactDOM.render(<Landing />, div)
})

it('renders a PageHeader component', () => {
	const component = shallow(<Landing />)
	component.html()
	expect(component.find('PageHeader').length).toEqual(1)
})

it('renders two Feature components', () => {
	const component = shallow(<Landing />)
	expect(component.find('Feature').length).toEqual(2)
})
