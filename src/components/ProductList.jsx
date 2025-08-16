import React from 'react';
import Product from './Product';
import "./ProductList.css"

const ProductList = () => {
  return (
    <div id='productList'>
      {/* <Product name = "Oppo" price = {10999}/>
      <Product name = "Vivo" price = {21999} features = {["hi-tech", "durable", "fast"]}/>
      <Product name = "Redmi" price = {17999}/>
      <Product name = "Poco" price = {11999}/> */}

      <Product
        title = 'ligitech MX Master' idx = {0}
      />
      <Product
        title = 'Apple Pencil (2nd Gen)'  idx = {1}
      />
      <Product
        title = 'Zebronics Zeb-transformer'  idx = {2}
      />
      <Product
        title = 'Petronics '  idx = {3}
      />
    

    </div>
  )
}

export default ProductList
