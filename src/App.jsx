import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './components/myButton'
import Myprofile from './components/Myprofile'
import Something from './components/Something'


function App() {
  const [count, setCount] = useState(0)
  const[name, setName] = useState("Panukorn Piwuan")
  const[ifTrue, setIfTrue] = useState(true)

  const user = {
    firstnName: "Mark",
    lastName: "Panukorn",
    imgPic: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww"
  }

  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];

  function handleClick() {
    setCount(count + 1)
  }
  function handleDeCreaseClick() {
    setCount(count - 1)
  }

  function Square({ value, onSquareClick }) {
    return (
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    )
  }

  return (
      <div className="App">
        <h1>Welcome to my app</h1>
        <Myprofile data={user} />
        <p>{name}</p>
        <p>{count}</p>
        <button onClick={handleClick}>Increase</button>
        <button onClick={handleDeCreaseClick}>DeCrease</button>
          <MyButton />
          {ifTrue ? "Yes it 's True" : "No it's False"}
          <ul>
            {products.map(item => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
          <Something />
      </div>
  )
}

export default App
