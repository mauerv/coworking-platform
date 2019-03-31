import styled from 'styled-components'
import { ContainerTitle } from '../../theme/utilComponents'

export const GridWrapper = styled.div`
	display: flex;
  flex-wrap: wrap;
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'center'};
`

export const GridTitle = styled(ContainerTitle)`
	text-align: ${props => props.alignTitle ? props.alignTitle : 'center'};
`