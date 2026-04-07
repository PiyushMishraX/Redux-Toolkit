import React from 'react'

// const ResultCard = (props) => {
const ResultCard = ({item}) => {
  return (
    <div className='w-[18vw] h-80 relative bg-white rounded'>

        <div className='h-full'>
            {item.type == 'photo' ?<img className=' h-full w-full object-cover object-center' src={item.src} alt="" />:''}

            {item.type == 'video' ?<video className=' h-full w-full object-cover object-center' autoPlay loop muted src={item.src}></video>:''}

            {item.type == 'gif' ?<img className=' h-full w-full object-cover object-center' src={item.src} alt="" />:''}
        </div>

        <div id='bottom' className=' w-full px-6 py-10  text-white absolute bottom-0 '>
            <h2 className=' text-xl font-semibold capitalize '>{item.title}</h2>            
        </div>
    </div>
  )
}

export default ResultCard