import React from 'react'

function myButton() {

  function handleClick() {
    alert("You Click me")
  }
  return (
    <button onClick={handleClick}>MyButton</button>
  )
}

export default myButton