
import React from 'react'
import ReactDOM from 'react-dom'
import FormRegistroProducto from '../FormRegistroProducto/FormRegistroProducto'
import '../../styles.css'

const ModalRegistroProducto = ({ setProducto, apiURL, isOpen, onClose }) => {
  if (!isOpen) return null
  return ReactDOM.createPortal(
    <>
      <div className='darkBG'>
        <div className='container mt-xl-5'>
          <FormRegistroProducto
            setProducto={setProducto}
            apiURL={apiURL}
            onClose={onClose}
          />
        </div>
      </div>
    </>,
    document.body
  )
}

export default ModalRegistroProducto
