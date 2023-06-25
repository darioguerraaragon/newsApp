import React from 'react'

const RandomNews = ({ randN , setdata }) => {
  const {title , urlToImage , url , description , author , publishedAt} = randN

  const HandleCenter = (e) => {
    setdata({title , url , urlToImage , description , author , publishedAt})
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