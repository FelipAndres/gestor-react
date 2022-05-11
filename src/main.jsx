import './Spur.css'
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ProductoProvider } from './ProductoContext'

const rootElement = document.getElementById('root')

render(
  <BrowserRouter>
    <ProductoProvider>
      <App className='dash' />
    </ProductoProvider>
  </BrowserRouter>,
  rootElement
)
