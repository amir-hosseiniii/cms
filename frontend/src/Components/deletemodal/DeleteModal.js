import React from 'react'

export default function DeleteModal() {
  return (
    <div className='modal-parent acttive fixed z-2 h-[100vh] bg-gray-500/0 flex items-center hidden active:bg-gray-500/0 active:visible'>
        <div className='delete-modal bg-white p-10'>
            <h1 className=''>ایا از حذف محصول اطمینان دارید؟</h1>
            <div className='delete-modal-btns'>
                <button className='delete-btn delete-modal-accept-btn'>بله</button>
                <button className='delete-btn delete-modal-reject-btn'>خیر</button>
            </div>
        </div>
    </div>
  )
}
