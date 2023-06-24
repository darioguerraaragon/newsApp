import React from 'react'
import {Link , BrowserRouter , Route , Router} from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

const Header = ({setdata , setdatardm}) => {
  const [search, setsearch] = useState('')

  // random news =>
  const HandleRandomNews = async () => {
    const url1 = 'https://newsapi.org/v2/top-headlines?country=us'
    const options1 = {headers :{
                      'x-api-key' : '81faba4f6f24441693888487f61060c1'}
                      }

    const res = await fetch(url1 , options1)
                          .then((res)=>{return res.json()})
                          .then((res)=>{setdatardm(res.articles)})
  }
  useEffect(() => {
    HandleRandomNews()
  }, [])
  
  //

  //this the funtion to show the searchs ! =>
  const HandleText = (e) => {setsearch(e.target.value)}
  // console.log(search)
  let acc = false

  const HandleSearch = async () => {
    const url = `https://newsapi.org/v2/everything?q=${search}&from=2023`
    const options = {headers :{ 
                        'x-api-key' : '81faba4f6f24441693888487f61060c1'},
                        'sortBy':'popularity'
                      }

      const res = await fetch(url , options)
                          .then((res)=>{return res.json()})
                          .then((res)=>{setdata(res.articles)})      
      
      //this is to show only the search and keep hidden the another component named RandomNews and stop whole the process=>
      acc = true
      if(acc){setdatardm(undefined)} 
      //
  }

  return (
    <header>
        <div className='logo'><img src='./imgs/news-report.png'/></div>
        <div className='search'>
            <div className='icon'><img src='./imgs/search (1).png'/></div>
            <input type='text' placeholder='Search some news !' className='input' onChange={HandleText}/>
            <button onClick={HandleSearch}>Buscar</button>
        </div>
        <div className='tools'></div>
    </header>
  )
}

export default Header