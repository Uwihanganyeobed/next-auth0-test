import React from 'react'
import Header from '../../lib/Header'

 const marks =[
   {
      name: "Obed",
      math: 100,
      CSC: 20
   },
   {
      name: "Vargas",
      math: 200,
      CSC: 200
   }
   , {
      name: "Mayor",
      math: 10,
      CSC: 204
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