import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Home.css'
import Product from './components/Product'

function NumbersList() {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <ul>
      {numbers.map((num) => (
        <li key={num}>Number: {num}</li>
      ))}
    </ul>
  );
}

function Home() {
  return (
    <>
      <div className="navbar">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <div className="content">
        <div className="Advert-Box">
          <img src="https://i.pinimg.com/1200x/e1/27/0b/e1270ba81bae0e296db622e62b3f56f3.jpg" alt="pic-error" />
        </div>
        <div className="Product-Box">
              <Product />
        </div>
      </div>
    </>
  )
}

export default Home