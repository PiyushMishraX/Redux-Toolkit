import React from 'react'

// const ResultCard = (props) => {
const ResultCard = ({item}) => {
  return (
    <div className='w-[18vw] h-80 bg-white rounded'>
        {item.type == 'photo' ?<img src={item.src} alt="" />:''}
        {item.type == 'video' ?<video autoPlay loop muted src="{item.src}"></video>:''}
        {item.type == 'gif' ?<img src={item.src} alt="" />:''}
        <h1 className='text-black'>{item.title}</h1>
    </div>
  )
}

export default ResultCard