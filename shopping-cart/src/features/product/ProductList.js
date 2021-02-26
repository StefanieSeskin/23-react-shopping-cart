// Stefanie notes:   
// should not have used li tags.  More important to me to 
//get cart further along.  Thanks to thomas for the help.


import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  fetchProducts,
  selectCount,
  selectProducts,
  addToCart
} from './productSlice';
import './Product.module.css';

// dispatch(increment()) // increment

export function ProductList() {
  const count = useSelector(selectCount);
  const products = useSelector(selectProducts)
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

function setInstallment(a, b) {
    const installments = a / b
    return installments.toFixed(2)
}
  return (
    <div className="productCardsContainer">
        <div className="productsHeader"></div>
        {/* <div>{count}</div>
        <button onClick={() => dispatch(increment())}>Sup</button> */}
        <div className="productCard">
            <ul>{products.map(product => <p key={product.id}>
            <li><img src={product.img.normal}></img></li>
                <li className="productTitle">{product.title}</li>
                <li className="dash"><small>this is a dash</small></li>
                <li className="productPrice"><small>$</small> {product.price.toFixed(2)}</li>
                <li className="installmentPrice">or {product.installments} x${setInstallment(product.price, product.installments) }</li>
            <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button></p>)}
            </ul>
        </div>
    </div>   
  );
}
