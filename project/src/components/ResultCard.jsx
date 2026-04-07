import React from 'react'

// const ResultCard = (props) => {
const ResultCard = ({item}) => {
  return (
    // <div className='w-[18vw] h-80 relative bg-white rounded'>
    // <div className='w-[18vw] min-w-fit h-80 relative bg-white rounded'>
    // <div className='w-[18vw] min-w-xs h-80 relative bg-white rounded'>
    // <div className='w-[18vw] min-w-[200px] h-80 relative bg-white rounded'>
    <div className='w-[18vw] min-w-50 h-80 relative bg-white rounded'>

        <a target='_blank' href={item.url} className='h-full'>
            {/* {item.type == 'photo' ?<img className=' h-full w-full object-cover object-center' loading='lazy' src={item.src} alt="" />:''} */}
            {item.type == 'photo' ?<img className=' h-full w-full object-cover object-center' src={item.src} alt="" />:''}

            {item.type == 'video' ?<video className=' h-full w-full object-cover object-center' autoPlay loop muted src={item.src}></video>:''}

            {item.type == 'gif' ?<img className=' h-full w-full object-cover object-center' src={item.src} alt="" />:''}
        </a>

        <div id='bottom' className=' w-full px-6 py-10  text-white absolute bottom-0 flex justify-between items-center'>
            {/* <h2 className=' text-xl font-semibold capitalize '>{item.title}</h2>   */}
            <h2 className=' text-xs md:text-[13px] lg:text-[15px] font-semibold capitalize  overflow-auto'>{item.title}</h2>  
            <button className=' bg-indigo-600 text-white rounded px-3 py-2  font-medium'>Save</button>       
        </div>

    </div>
  )
}

export default ResultCard