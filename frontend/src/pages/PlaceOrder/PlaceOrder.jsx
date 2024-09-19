import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

function PlaceOrder() {

  const {getTotalCartAmt} = useContext(StoreContext);

  return (
   <form action="" className="place-order">
    <div className="place-left">
    <p className="title">Delivery Information</p>
    <div className="multi-field">
      <input type="text" placeholder='First Name'/>
      <input type="text" placeholder='Last Name'/>
    </div>
    <input type="email" placeholder='Email Address' />
    <input type="text" placeholder='Street'/>
    <div className="multi-field">
      <input type="text" placeholder='City'/>
      <input type="text" placeholder='State'/>
    </div>
    <div className="multi-field">
      <input type="text" placeholder='Zip code'/>
      <input type="text" placeholder='Country'/>
    </div>
    <input type="text" placeholder='Phone'/>
    </div>
    <div className="place-right">
    <div className="cart-total">
        <h2>Cart Totals</h2>
        <div>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getTotalCartAmt()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmt()===0?0:2}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>${getTotalCartAmt()===0?0:getTotalCartAmt()+2}</b>
          </div>
        </div>
        <button >Proceed to Pay</button>
      </div>
    
    </div>
   </form>
  )
}

export default PlaceOrder