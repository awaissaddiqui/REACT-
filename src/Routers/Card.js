import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import { useNavigate } from 'react-router-dom'
const Card = () => {
  const navigate= useNavigate();
  return (
    <div>
      <Button variant ="danger" onClick={()=>{
       navigate(-1)}}>Click</Button>
    

    </div>

  )
}

export default Card