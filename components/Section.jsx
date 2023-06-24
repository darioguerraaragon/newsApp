import React from 'react'
import NewsArticles from './NewsArticles'
import RandomNews from './RandomNews'
import MoreNews from './MoreNews'

const Section = ({news ,setdata , datardm}) => {
  const {title , content} = news
  console.log(title , content)

  return (
    <section>
        <article className='article1'>
            <MoreNews news={news}/>
        </article>

        <article className='article2'>
          {datardm == undefined?null:datardm.map((randN)=>(<RandomNews randN={randN} setdata={setdata} />))}
        </article>
    </section>
  )
}

export default Section