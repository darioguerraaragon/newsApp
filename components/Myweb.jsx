import React from 'react'
import Header from './Header'
import Section from './Section'
import { useState } from 'react'

const Myweb = () => {
  const [datardm, setdatardm] = useState([])

  const [data, setdata] = useState({})
  
  return (
    <div className='body'>
        <Header setdata={setdata} setdatardm={setdatardm}/>
        <Section news={data} setdata={setdata} datardm={datardm}/>
    </div>
  )
}

export default Myweb