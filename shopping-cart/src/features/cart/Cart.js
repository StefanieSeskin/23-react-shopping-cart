import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Cartitem from 
import './cart.css';
import { selectCart } from '../product/productSlice';
import { Counter} from '../counter/Counter'



export function Cart() {
  const cart = useSelector(selectCart)
  // console.log(cart)
    return (
    <div id="mySidenav" class="sidenav">
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
    {cart.map(product => <p key={product.id}>
      <div className="cartItemTitle">{product.title}</div>
      <div className="counter"><Counter /></div>
      {/* <button onClick={() => dispatch(removeFromCart(product))}>X</button> */}
      </p>)}

  </div>
)}

{/* <img src={product.img.thumb}></img> */}