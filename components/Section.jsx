import React from 'react'
import News from './News'
import MoreNews from './MoreNews'
import { useState } from 'react'

const Section = ({news ,setdata , datardm}) => {
  const [handlelike, sethandlelike] = useState(false)
  // console.log(datardm)
  return (
    <section>
        <article className='article1'>
            <MoreNews news={news} handlelike={handlelike} sethandlelike={sethandlelike}/>
        </article>

        <article className='article2' onClick={(()=>{sethandlelike(false)})}>
          {datardm == undefined?null:datardm.map((randN)=>(<News randN={randN} setdata={setdata} />))}
        </article>
    </section>
  )
}

export default Section