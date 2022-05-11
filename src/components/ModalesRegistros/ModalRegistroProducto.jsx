import React, { useContext } from 'react'
import ReactDOM from 'react-dom'

import FormRegistroProducto from '../FormRegistroProducto/FormRegistroProducto'
import { ProductoContext } from '../../ProductoContext'
import '../../styles.css'

const ModalRegistroProducto = () => {
  const { isOpen } = useContext(ProductoContext)
  if (!isOpen) return null
  return ReactDOM.createPortal(
    <>
      <div className='darkBG'>
        <div className='container'>
          <FormRegistroProducto />
        </div>
      </div>
    </>,
    document.body
  )
}

export default ModalRegistroProducto
