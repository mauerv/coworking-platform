import React, { Component } from 'react'

import { withFirebase } from '../../firebase'

import Spinner from './Spinner'
import DisplayImage from './DisplayImage'
import UploadButton from './UploadButton'

import { ImageUploadWrapper } from './styles'

class ImageUpload extends Component {
  state = {
    uploading: false,
  }

  onChange = event => {
    // Updates uploading state to show the loading spinner.
  	this.setState({ uploading: true })

    // Pointer to the local file.
  	const imgToUpload = event.target.files[0]
    // Reference to the root firebase storage.
  	const storageRef = this.props.firebase.storage.ref()
    // Reference to the file in firebase using the file name.
  	const imgRef = storageRef.child(imgToUpload.name)
    // Upload the file
  	imgRef.put(imgToUpload).then(snapshot => {
      // Using the returned snapshot get the image URL.
  		storageRef.child(snapshot.ref.fullPath).getDownloadURL()
  			.then(url => {
           // Return the local state to the initial value and update the parent's url.
  				 this.setState({ uploading: false })
  				 this.props.onImageUpdate(url)
  			})
  	})
  }
  
  render() {
  	const { uploading } = this.state
  	const { image, onRemoveImage } = this.props

  	const content = () => {
  		switch(true) {
  			case uploading:
  				return <Spinner />
  			case image !== '':
  				return <DisplayImage image={image} onRemoveImage={onRemoveImage}/>
  			default:
  				return <UploadButton onChange={this.onChange} />
  		}
  	}

  	return (
  		<ImageUploadWrapper>
  			{content()}
  		</ImageUploadWrapper>
  	)
  }
}

export default withFirebase(ImageUpload)