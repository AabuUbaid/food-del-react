import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

function Cart() {


  const {cartItems,food_list,removeCart,getTotalCartAmt,url} = useContext(StoreContext)

  const navigate = useNavigate();

  return (
    <div className='cart'>
    <div className="cart-items">
      <div className="cart-items-title">
        <p>Items</p>
        <p>Titles</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <br />
      <hr />
      {food_list.map((item,index)=>{
        if(cartItems[item._id]>0){
          return (
            <div>
            <div className="cart-items-title cart-items-item">
              <img src={url+"/images/"+item.image} alt="" />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>{cartItems[item._id]}</p>
              <p >${item.price*cartItems[item._id]}</p>
              <p onClick={()=>removeCart(item._id)} className='cross'>X</p>
            </div>
            <hr />
            </div>
          )
        }
      })}
    </div>
    <div className="cart-bot">
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
        <button onClick={()=>navigate('/order')}>CHECKOUT</button>
      </div>
      <div className="cart-promo">
        <div>
          <p>If you have a coupon Enter the code here</p>
          <div className="cart-promo-input">
            <input type="text" placeholder='Promo'/>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Cart