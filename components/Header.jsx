import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { HandleRandomNews } from './helpers/CallsToApi' 

const Header = ({setdata , setdatardm}) => {
  const [search, setsearch] = useState('')

  // random news =>
  useEffect(() => {
    HandleRandomNews(setdatardm , 'https://newsapi.org/v2/top-headlines?country=us')
  }, [])
  //

  const HandleText = (e) => {setsearch(e.target.value)}
   
  HandleRandomNews(setdatardm , `https://newsapi.org/v2/everything?q=${search}&from=2023`)    

  return (
    <header>
        <div className='logo'><img src='./imgs/news-report.png'/></div>
        <div className='search'>
            <div className='icon'>
              <img src='./imgs/search (1).png'/>
              <input type='text' placeholder='Search some news !' className='input' onChange={HandleText}/>
            </div>
            <button onClick={HandleRandomNews}>Buscar</button>
        </div>
        <div className='tools'></div>
    </header>
  )
}
export default Header