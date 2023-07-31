/* Creating component called 'Name' as required */
import React from 'react'
import product from './Product'

function Name() {
    console.log(product)
  return (
    <div>{product.name}</div>
  )
}

export default Name