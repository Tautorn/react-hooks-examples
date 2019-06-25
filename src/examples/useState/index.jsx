import React, { useState } from 'react'

const Wrapper = () => {

  const [active, setActive] = useState(false)

  const statusClass = active ? 'green' : 'red'

  return (
    <div>
      Click here to sell online

      <div className="flex">
        <div className={`square ${statusClass}`}>Status {active}</div>
        <button onClick={() => setActive(!active)}>Change status</button>
      </div>
    </div>
  )
}

export default Wrapper
