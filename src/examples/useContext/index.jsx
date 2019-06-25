import React, { useState } from 'react'
import PersonContext from './person.context'
import Stack from './Stack'

const data = {
  name: "Bruno Carneiro",
  age: "28",
  stack: [
    'react',
    'ecmascript',
    'nodejs',
    'css',
    'html',
    'oracle',
    'watson'
  ]
}

const Wrapper = () => {
  const [count, setCount] = useState(0)
  const newData = {
    ...data,
    count
  }

  return (
    <PersonContext.Provider value={newData}>
      <div>
        hello Context
        <h1>Number: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <Stack />
      </div>
    </PersonContext.Provider>
  )
}

export default Wrapper
