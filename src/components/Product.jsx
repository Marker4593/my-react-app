import React from 'react'
import './Product.css'

const products = [
    { id: 1, name: "Laptop", price: 35000, image: "https://i.pinimg.com/736x/6d/f6/84/6df684f8427dd671088a474ac9d8de93.jpg" },
    { id: 2, name: "Mouse", price: 500, image: "https://i.pinimg.com/736x/d8/50/9b/d8509b0b088ba1a8d9937d8a16ae13f7.jpg" },
    { id: 3, name: "Keyboard", price: 1200, image: "https://i.pinimg.com/736x/d8/29/fd/d829fdce07edd7c293575b7743a77909.jpg" },
    { id: 4, name: "Mainboard", price: 1800, image: "https://i.pinimg.com/736x/c8/27/bb/c827bba6c064ecedb9aeb88cf3fe5d22.jpg" },
    { id: 5, name: "Case", price: 1100, image: "https://i.pinimg.com/736x/57/70/31/577031aa4b15874998b5b0be2af493be.jpg" },
    { id: 6, name: "CPU", price: 7200, image: "https://i.pinimg.com/1200x/cf/1d/ca/cf1dca70570ce34ba1616077df1d5526.jpg" },
];

function Product() {
  return (
      <div className="products">
          {products.map((product) => (
              <div key={product.id} className="product-card">
                  <div className="pic-box">
                      <img src={product.image} alt={product.name} />
                  </div>
                  <div className="detail-box">
                      <h2>{product.name}</h2>
                      <p>Price: {product.price} THB</p>
                      <button>Add to Cart</button>
                  </div>
              </div>
          ))}
      </div>
  )
}

export default Product


