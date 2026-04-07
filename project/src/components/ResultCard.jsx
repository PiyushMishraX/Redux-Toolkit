
// const ResultCard = (props) => {
const ResultCard = ({item}) => {

    const addToCOllection = (item)=>{
        // console.log(item);

        const oldData = JSON.parse(localStorage.getItem('collection')) || []
        // console.log(oldData);

        const newData = [...oldData,item]
        // console.log(newData);

        localStorage.setItem('collection',JSON.stringify(newData))
        
        
        
    }

  return (
    // <div className='w-[18vw] h-80 relative bg-white rounded'>
    // <div className='w-[18vw] min-w-fit h-80 relative bg-white rounded'>
    // <div className='w-[18vw] min-w-xs h-80 relative bg-white rounded'>
    // <div className='w-[18vw] min-w-[200px] h-80 relative bg-white rounded'>
    <div className='w-[18vw] min-w-50 h-80 relative bg-white rounded-xl overflow-hidden'>

        <a target='_blank' href={item.url} className='h-full'>
            {/* {item.type == 'photo' ?<img className=' h-full w-full object-cover object-center' loading='lazy' src={item.src} alt="" />:''} */}
            {item.type == 'photo' ?<img className=' h-full w-full object-cover object-center' src={item.src} alt="" />:''}

            {item.type == 'video' ?<video className=' h-full w-full object-cover object-center' autoPlay loop muted src={item.src}></video>:''}

            {item.type == 'gif' ?<img className=' h-full w-full object-cover object-center' src={item.src} alt="" />:''}
        </a>

        <div id='bottom' className=' w-full px-4 py-6  text-white absolute bottom-0 flex justify-between  items-center gap-2'>
            {/* <h2 className=' text-xl font-semibold capitalize '>{item.title}</h2>   */}
            {/* <h2 className=' text-xs md:text-[13px] lg:text-[15px] font-semibold capitalize h-15  overflow-hidden truncate '>{item.title}</h2>   */}
            <h2 className='text-[16px] md:text-[18px] lg:text-[20px] font-semibold capitalize h-14 flex items-center overflow-hidden'>
              {item.title}
            </h2>  
            <button
            onClick={()=>{
                addToCOllection(item)
            }}
             className='bg-indigo-600 text-white rounded px-3 py-2 cursor-pointer font-medium text-[14px] shrink-0 active:scale-95' >
              Save
            </button>       
        </div>

    </div>
  )
}

export default ResultCard