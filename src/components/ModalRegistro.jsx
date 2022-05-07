
import React from 'react'
import ReactDOM from 'react-dom'
import Form from '../components/form/Form'
import '../styles.css'

const ModalRegistro = ({ setProducto, apiURL, isOpen, onClose }) => {
  if (!isOpen) return null
  return ReactDOM.createPortal(
    <>
      <div className='darkBG'>
        <div className='container mt-xl-5'>
          <Form
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

export default ModalRegistro
