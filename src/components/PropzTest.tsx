import React from 'react'
import Header from '../../lib/Header'

 const marks =[
   {
      name: "Obed",
      math: 1000,
      CSC: 2000
   },
   {
      name: "Vargas",
      math: 2000,
      CSC: 2000
   }
   , {
      name: "Mayor",
      math: 1000,
      CSC: 2040
   }
]
const Propz = () => {
  return (
    <div>
      <Header
      title='Hello'
      description="Welcome Vargas"
      amount={2}
      marks={marks}
       />
    </div>
  )
}

export default Propz