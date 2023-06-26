import React from 'react'
import { BrowserRouter , Link } from 'react-router-dom'
import { useRef } from 'react'

const MoreNews = ({news , handlelike , sethandlelike}) => {
  const {title , urlToImage , url , author , description , publishedAt} = news
  const like = useRef()
  // convertir la fecha
  // pasarlo a fecha date
  const fecha = new Date(publishedAt);

  const opcionesFormato = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const fechaLegible = fecha.toLocaleString('es-ES', opcionesFormato);
  
  //likes
  if(handlelike){
    like.current.src = '/imgs/heart (1).png'
  }else{
    like.current.src = '/imgs/heart.png'
  }
  //
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

          <div className='publishedAt'>{fechaLegible}</div>

          <div className='like' onClick={(()=>{sethandlelike(true)})}>
            <img src='/imgs/heart.png' ref={like}/>
          </div>
         
        </div>
    </div>
  )
}

export default MoreNews