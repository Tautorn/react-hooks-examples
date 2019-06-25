import React, { useState, useEffect } from 'react'

const Wrapper = ({ setHook }) => {
  const randomColors = () => '#' + Math.floor(Math.random() * 16777215).toString(16)

  const [color, setColor] = useState('black')
  const [random, setRandom] = useState(randomColors())
  const [count, setCount] = useState(0)
  const [detonation, setDetonation] = useState(0)


  // componentDidMount
  useEffect(() => {
    window.setTimeout(function () {
      setColor('blue')
    }, 4000)
  }, [])

  // componentDidUpdate
  useEffect(() => {
    setRandom(randomColors())
    setDetonation(count)
  }, [count])

  // componentWillUnmount
  useEffect(() => {
    return () => {
      alert('will unmount');
    }
  }, [])

  useEffect(() => {
    if (detonation === 5) {
      alert("Preparing for the detonation")
      window.setTimeout(() => {
        setHook('useContext')
      }, 1500)
    }
  }, [detonation])


  return (
    <div>
      Click here to sell online

      <div className="flex">
        <div className={`square ${color}`}>Color {color}</div>
        <div className={`square`} style={{ backgroundColor: random }}>{random}</div>
      </div>
      <h1>Number {count}</h1>
      <h1>Bomb: 00{detonation}</h1>
      <button onClick={() => setCount(count - 1)}>Less</button>
      <button onClick={() => setCount(count + 1)}>More</button>
    </div>
  )
}

export default Wrapper
