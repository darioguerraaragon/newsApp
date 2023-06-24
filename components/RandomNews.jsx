import React from 'react'
import { BrowserRouter , Link } from 'react-router-dom'

const RandomNews = ({ randN , setdata }) => {
  const {title , urlToImage , url , content} = randN

  const HandleCenter = (e) => {
    setdata({title , url , urlToImage , content})
  }
  
  return (
    <div className='randomNews' onClick={HandleCenter}>
        <div>
          <h2>{title}</h2>   
        </div>

        <div className='randomImg'>
         <img src={urlToImage} alt='Something went wrong !'/>
        </div>
    </div>
  )
}

export default RandomNews