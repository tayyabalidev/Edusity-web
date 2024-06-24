import React from 'react'
import './Title.css'

function Title({subTitle,title}) {
  return (
    <div>
      <div className='program-title'>
            <h6>{subTitle}</h6>
            <h1>{title}</h1>
        </div>
    </div>
  )
}

export default Title
