import React from 'react'
import News from './News'
import MoreNews from './MoreNews'

const Section = ({news ,setdata , datardm}) => {
  const {title , content , author , description , publishedAt  } = news
  // console.log(datardm)

  return (
    <section>
        <article className='article1'>
            <MoreNews news={news}/>
        </article>

        <article className='article2'>
          {datardm == undefined?null:datardm.map((randN)=>(<News randN={randN} setdata={setdata} />))}
        </article>
    </section>
  )
}

export default Section