import React from 'react'
import { useState } from 'react'

const Tour = ({ id, image, info, name, price, removeTour }) => {

const [readMore, setReadMore]= useState(false)
// console.log(info.substring(0, 10))

  return (
    <>
      <article className="single-tour">
        <img src={image} alt={name} className="img" />
        <span className="tour-price"> ${price}</span>
        <div className="tour-info">
          <h5>{name}</h5>
          <p>{readMore ? info : `${info.substring(0,150)} ... ` }


            <button type='button' className="info-btn" onClick={()=> setReadMore(!readMore)}>
              {readMore ? ` Show less` : ` Read more`}
            </button>
          </p>
        </div>
        <button
         type='button'
          className="btn btn-block delete-btn"
          onClick={() => removeTour(id)}
        >
          Not Interested
        </button>
      </article>
    </>
  )
}

export default Tour
