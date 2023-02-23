import React, { useState } from 'react'
import "./Modal.css"

export default function Modal(){
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  return (
    <>
      <button 
        onClick={toggleModal} 
        className='login-modal'
      >
        modal
      </button>

      <div className='modal'>
        <div className='overlay'>
          <div className="modal-content">
            <h3>Username</h3>
          </div>
        </div>
      </div>
    </>
  )
}