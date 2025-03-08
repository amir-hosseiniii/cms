import React from 'react'

export default function ErrorBox({msg}) {
  return (
    <div>
        <h1 className='text-[2rem] bg-red-600 mt-[20px] p-[20px] text-white text-center rounded'>
            {msg}
        </h1>   
    </div>
  )
}
