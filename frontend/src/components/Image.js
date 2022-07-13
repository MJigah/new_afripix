import React from 'react'

const Image = ({image}) => {
    return (
        <img src={`data:image/jpeg;base64,${image.imageBase64}`} alt={image.filename}/>
    )
}

export default Image
