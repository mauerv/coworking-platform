import React from 'react'
import { shallow } from 'enzyme';

import Button from './'

const setup = () => {
	const props = {
		onClick: jest.fn(),
		text: 'Click Me'
	}
	const component = shallow(<Button {...props} />)

	return {
		component,
		props
	}
}

it('should render the correct text', () => {
	const { component } = setup()
	expect(component.find('button').text()).toBe('Click Me')
})

it('should execute the callback on click', () => {
	const { component, props } = setup()
	component.find('button').simulate('click')
	expect(props.onClick).toHaveBeenCalled()
})