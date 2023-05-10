import React from 'react'

const add_garbage_spot = () => {
  return (
    <>
    <form className=''>
        <div className='p-24'>
        <input type='title' placeholder='Title' className='block mb-6 w-full py-2 px-2 border-2 border-solid border-gray-300 rounded-md bg-white' />
        <input type='location' placeholder='Location' className='block mb-4 w-full py-2 px-2 border-2 border-solid border-gray-300 rounded-md bg-white' />
        <input type='file' className='block mb-4 w-full py-2'/>
        <button style={{marginTop:'5px'}} className='cursor-pointer w-full font-semibold block bg-green-700 border-green-700 border-2 text-white rounded py-2 px-0 hover:bg-white hover:text-green-700'>Create Garbage Spot</button>
        

        </div>
        
    </form>
    </>
  )
}

export default add_garbage_spot
