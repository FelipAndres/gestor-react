
import React from 'react'
import ReactDOM from 'react-dom'
import Form from '../components/form/Form'
import '../styles.css'

const ModalRegistro = ({ producto, setProducto, apiURL, handleChange, isOpen, onClose }) => {
  if (!isOpen) return null
  return ReactDOM.createPortal(
    <>
      <div className='darkBG'>
        <div className='centered'>
          <Form
            producto={producto}
            setProducto={setProducto}
            apiURL={apiURL}
            handleChange={handleChange}
          />
          <button
            onClick={() => onClose}
          >
            Cancelar
          </button>
        </div>
      </div>
    </>,
    document.body
  )
}

export default ModalRegistro