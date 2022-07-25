import React from 'react'
import next2 from '../assets/next2.svg'
import gift from '../assets/gift.png'

/*step 7: creating a root function to use the prox to create the component*/
const CardUsers = ({randomUser, randomColors, getRandomAll}) => {
  const objectStyle={
    color: randomColors
  }
  const objectButtonStyle={
    backgroundColor: randomColors
  }
  
  return (
    <div className='card' style={objectStyle}>
      <i className="fa-solid fa-angles-left"></i>
      <p className='card__quote'>
        {`${randomUser.quote}`}
      </p>
      <i className="fa-solid fa-angles-right"></i> 
      <h3 className='card__author'>
        {`${randomUser.author}`}
      </h3>
      <div className='card__cont'>
      <button onClick={getRandomAll} className='card__btn' style={objectButtonStyle}><img className='btn' src={next2}/></button>
      <img className='gift' src={gift} alt="" />
      </div>
    </div>  
  )
}

export default CardUsers
/*step 8:next step to create the style of the card in App.css */