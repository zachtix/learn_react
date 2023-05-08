import React from 'react';
import './TattooPost.css'

function TattooPost(props) {
  const { title, thumbnailUrl} = props.tattoo
  return(
    <div className='tattoo-post'>
      <div className='tattoo-post-bg' />
      <div className='tattoo-post-content'>
        <img src={thumbnailUrl} />
        <h4>{title}</h4>
      </div>
    </div>
  )
}

export default TattooPost