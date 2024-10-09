import React from 'react'

const Button = ({name}) => {
  return (
    <div className='ml-'>
        <button className='bg-[#343434] text-white rounded-lg  px-4 py-2'>{name}</button>
    </div>
  )
}

export default Button