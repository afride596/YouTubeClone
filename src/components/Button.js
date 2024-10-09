import React from 'react'

const Button = ({name}) => {
  return (
    <div className='ml-'>
        <button className='bg-[#5b5b5b] text-white rounded-lg text-base font-medium px-4 py-2'>{name}</button>
    </div>
  )
}

export default Button