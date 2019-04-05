import styled from 'styled-components'

import { MainIcon } from '../../theme/utilComponents'

// ImageUpload
export const ImageUploadWrapper = styled.div`
	width: 215px;
	height: 215px;
  display: flex;
  align-items: center;
  justify-content: center;
`

// DisplayImage
export const DisplayImageWrapper = styled.div`
	position: relative;
	img {
		max-width: 100%;
		max-height: 100%;
	}
`

// Spinner
export const SpinnerWrapper = styled.div`

`

export const CloseIcon = styled(MainIcon)`
	position: absolute;
  right: 0;
  top: 0;
  background: ${props => props.theme.darkBlue};
  color: ${props => props.theme.blue};
  border-radius: 100%;
  cursor: pointer;
`

// UploadButton
export const UploadButtonWrapper = styled.div` 
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`

export const UploadIcon = styled(MainIcon)`
	&:hover {
		cursor: pointer;
	}
`

export const UploadInput = styled.input`
	width: 215px;
	&:hover {
		cursor: pointer;
	}
`