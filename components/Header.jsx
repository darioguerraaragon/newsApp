import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { HandleRandomNews } from './helpers/CallsToApi' 

const Header = ({setdatardm}) => {
  const [search, setsearch] = useState('')

  // random news =>
  useEffect(() => {
    HandleRandomNews(setdatardm , 'https://newsapi.org/v2/top-headlines?country=us')
  }, [])
  //

  const HandleText = (e) => {setsearch(e.target.value)} 

  return (
    <header>
        <div className='logo'><img src='./imgs/news-report.png'/></div>

        <div className='search'>

            <div className='icon'>
              <img src='./imgs/magnifying-glass.png'/>
              <input type='text' placeholder='Search some news !' className='input' onChange={HandleText}/>
            </div>

            <button onClick={(()=>{HandleRandomNews(setdatardm , `https://newsapi.org/v2/everything?q=${search}&from=2023`)})}><b>Search</b></button>
        </div>

        <div className='tools'>
          <button onClick={(()=>{HandleRandomNews(setdatardm , 'https://newsapi.org/v2/top-headlines?country=us')})}><b>Home</b></button>
          <button><b>Subscrive</b></button>

          <select onClick={((e)=>{HandleRandomNews(setdatardm , `https://newsapi.org/v2/top-headlines?category=${e.target.value}&apiKey=81faba4f6f24441693888487f61060c1`)})}>
            <option>business</option>
            <option>entertainment</option>
            <option>general</option>
            <option>health</option>
            <option>science</option>
            <option>sports</option>
            <option>technology</option>
            <option>sources</option>
          </select>
        </div>

    </header>
  )
}
export default Header