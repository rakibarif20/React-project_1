import React from 'react'
import loadingImg from './loadingpage.gif'

import '../Loading/css/loading.scss'


const Loading = () => {
  return (
    <div className='loading-section'>
      <img src={loadingImg} alt="loadingpage" />
    </div>
  )
}

export default Loading