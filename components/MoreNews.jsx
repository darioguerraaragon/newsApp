import React from 'react'
import { BrowserRouter , Link } from 'react-router-dom'

const MoreNews = ({news}) => {
  const {title , urlToImage , url , author , description , publishedAt} = news

  return (
    <div className='MoreNews'>
        <h2>{title}</h2>   

        <div className='urlImg'>
        <img src={urlToImage} alt='Something went wrong !'/>
        </div>

        <div className='content'>{description}</div>

        <div className='contentLink'>

          <div className='author'><b>Author -</b>{author}</div>

          <div className='newLink'>
            <BrowserRouter>
              <Link to={url} target="_blank" className='Link'><b>Ver Noticia !</b></Link>
            </BrowserRouter>
          </div>

          <div className='publishedAt'>{publishedAt}</div>
         
        </div>
    </div>
  )
}

export default MoreNews