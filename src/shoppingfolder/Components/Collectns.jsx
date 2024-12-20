import React from 'react'

const Collectns = (props) => {
  const{title,image1,image2,image3,image4,image5,image6}=props.men
  return (
    <div className='collectionSection'>
    <h2>{title}</h2>
    <div className='menImages '>
      <img src={image1} alt={title} />
      <img src={image2} alt={title} />
      <img src={image3} alt={title} />
      <img src={image4} alt={title} />
      <img src={image5} alt={title} />
      <img src={image6} alt={title} />
    </div>
    </div>
  )
}

export default Collectns
