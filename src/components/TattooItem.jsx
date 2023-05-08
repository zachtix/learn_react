import React from 'react';
import './TattooItem.css'

function TattooItem(props) {
  const {title, thumbnailUrl} = props.tattoo
  return (
    <div className="tattoo-item">
      <img src={thumbnailUrl} />
      <h4>{title}</h4>
    </div>
  );
}

export default TattooItem
