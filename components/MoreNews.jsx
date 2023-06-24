import React from 'react'
import { BrowserRouter , Link } from 'react-router-dom'

const MoreNews = ({news}) => {
  const {title , urlToImage , url , content} = news

  return (
    <div className='MoreNews'>
        <h2>{title}</h2>   

        <div className='urlImg'>
        <img src={urlToImage} alt='Something went wrong !'/>
        </div>

        <div className='content'>{content}</div>

        <div className='newLink'>
          <BrowserRouter>
            <Link to={url} target="_blank" className='Link'><b>Ver Noticia !</b></Link>
          </BrowserRouter>
        </div>
    </div>
  )
}

export default MoreNews