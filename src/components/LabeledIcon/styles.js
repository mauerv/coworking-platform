import styled from 'styled-components'

import { MainIcon } from '../../theme/utilComponents'

export const LabeledIconWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 75px;
  justify-content: center;
  align-items: center;
  margin: 10px;
`

export const IconLabel = styled.p`
	color: ${props => props.theme.blue};
	font-weight: 500;
`

export { MainIcon }