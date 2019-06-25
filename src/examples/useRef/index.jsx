import React, { useRef, useState } from 'react'

const Wrapper = () => {
  const [status, setStatus] = useState(false)
  const immutable = useRef(10)

  console.log('immutable', immutable)
  return (
    <div>
      hello Ref
      <h1>
        {immutable.current}
      </h1>
      <div>
        Status: {status * 1}
      </div>
      <button onClick={() => immutable.current = 30}>Change Immutable to 30</button>
      <button onClick={() => immutable.current = 'Cloath'}>Change Immutable to a Cloath</button>
      <button onClick={() => setStatus(!status)}>Dispactch State</button>
    </div >
  )
}

export default Wrapper
