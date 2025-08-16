import React from 'react';
import  "./Product.css";
import Price from './Price';

const Product = ({title, idx}) => {

  let oldPrices = ["12,495","11,999","1,599","599"];
  let newPrices = ["8,999","9,999","899","279"];
  let description = ["8,000 DPI", "Intuitive surface", "designed for iPad Pro", "wireless"]

  // const features = ["hi-tech" , "fast", 'durable'];

  // let styles = {backgroundColor : price > 12000 ? 'tomato' : 'pink'}
  return (
    // <div id= "product" style={styles}>
    //     <h2>{name}</h2>
    //     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, fuga.</p>
    //     <h5>Rs. {price}</h5>
    //     <p>{features.map((feature)=>(
    //          feature
    //     )
    //     ).join(" | ")}</p>
    //     {price >= 15000 ? <p>10% off</p> : <p>no discount</p>}
    // </div>

    <div id='product'
      style={{
        backgroundColor:"skyBlue"
      }}
    >
      <h4>{title}</h4>
      <p>{description[idx]}</p>
      <Price oldPrice = {oldPrices[idx]} newPrice = {newPrices[idx]}/>
    </div>
  )
}

export default Product
