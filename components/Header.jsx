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

          <select onClick={((e)=>{HandleRandomNews(setdatardm , `https://newsapi.org/v2/top-headlines/?category=${e.target.value}&apiKey=81faba4f6f24441693888487f61060c1`)})}>
            <option>business</option>
            <option>entertainment</option>
            <option>general</option>
            <option>health</option>
            <option>science</option>
            <option>sports</option>
            <option>technology</option>
            <option>sources</option>
          </select>

          <select onClick={((e)=>{HandleRandomNews(setdatardm , `https://newsapi.org/v2/top-headlines?country=${e.target.value}&apiKey=81faba4f6f24441693888487f61060c1`)})}>
            <option>Countries</option>
            <option value='ar'>Argentina</option>
            <option value='gr'>Greece</option>
            <option value='nl'>Netherlands</option>
            <option value='za'>South Africa</option>
            <option value='au'>Australia</option>
            <option value='hk'>Hong Kong</option>
            <option value='nz'>New Zeland</option>
            <option value='kr'>South Corea</option>
            <option value='at'>Australia</option>
            <option value='hu'>Hungary</option>
            <option value='ng'>Nigeria</option>
            <option value='se'>Sweden</option>
            <option value='be'>Belgium</option>
            <option value='in'>India</option>
            <option value='no'>Norwey</option>
            <option value='ch'>Switzerland</option>
            <option value='br'>Brazil</option>
            <option value='id'>Indonesia</option>
            <option value='ph'>Philippines</option>
            <option value='tw'>Taiwan</option>
            <option value='bg'>Bulgaria</option>
            <option value='ie'>Ireland</option>
            <option value='pl'>Poland</option>
            <option value='th'>Thailand</option>
            <option value='ca'>Canada</option>
            <option value='il'>Israel</option>
            <option value='pt'>Portugal</option>
            <option value='tr'>Turkey</option>
            <option value='cn'>China</option>
            <option value='it'>Italy</option>
            <option value='ro'>Romania</option>
            <option value='ae'>UAE</option>
            <option value='co'>Colombia</option>
            <option value='jp'>Japan</option>
            <option value='ru'>Russia</option>
            <option value='ua'>Ukranie</option>
            <option value='cu'>Cuba</option>
            <option value='lv'>Latvia</option>
            <option value='sa'>Saudi Arabia</option>
            <option value='gb'>United Kingdom</option>
            <option value='cz'>Czech Republic</option>
            <option value='lt'>Lithuania</option>
            <option value='rs'>Serbia</option>
            <option value='us'>United States</option>
            <option value='eg'>Egypt</option>
            <option value='my'>Malaysia</option>
            <option value='sg'>Singapore</option>
            <option value='ve'>Venezuela</option>
            <option value='fr'>France</option>
            <option value='mx'>Mexico</option>
            <option value='sk'>Slovakia</option>
            <option value='de'>Germany</option>
            <option value='ma'>Morocco</option>
            <option value='si'>Slovenia</option>
          </select>
        </div>

    </header>
  )
}
export default Header