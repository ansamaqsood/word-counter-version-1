import React from 'react'
import Button from 'react-bootstrap/Button';


function Footer(props,resetInputField) {

 
  return (

    <div className=' row fixed-bottom'>
       
        <Button variant="secondary" className='col-2' onClick={() =>{
          props.resetQuantity()
        }}>Reset</Button>{' '}
        <div className='col-8 bg-dark text-white text-center'>

          {props.totalAmount}
        </div>
        <Button variant="secondary" className='col-2'>Pay Now</Button>{' '}
    </div>
  )
}

export default Footer
