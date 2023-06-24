import React from 'react'
import { Link , BrowserRouter , Route , Routes } from 'react-router-dom'

const NewsArticles = ({ newsT }) => {
    const {title , author , publishedAt , urlToImage , url , content} = newsT

  return (
    <div className='container'>
        <div className='NewHead'>
          <small>
            <p>{author}</p>
          </small>
          <h2>{title}</h2>
          <small><b>{publishedAt}</b></small>

        </div>

       <img src={urlToImage} alt='Something went wrong at time to load de img'/>

       <div>
          <p><b>{content}</b></p>
       </div>

       <div className='newLink'>
          <BrowserRouter>
              <Link to={url} target="_blank">Ver Noticia !</Link>
          </BrowserRouter>
       </div>

    </div>
  )
}

export default NewsArticles