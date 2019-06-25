import React, { useMemo, useState } from 'react'

const functions = new Set()

const Wrapper = () => {
  const [c1, setC1] = useState(0);
  const [c2, setC2] = useState(0);

  const sinOfC1 = useMemo(() => Math.sin(c1), [c1])

  functions.add(sinOfC1);

  return (<div>
    <div> Counter 1 is {c1} </div>
    <div> Counter 2 is {c2} </div>
    <br />
    <div>Sin c1 {sinOfC1}</div>
    <div>
      <button onClick={() => setC1(c1 + 1)}>Increment Counter 1</button>
      <button onClick={() => setC2(c2 + 1)}>Increment Counter 2</button>
    </div>
    <br />
    <div> Newly Created Functions: {functions.size - 1} </div>
  </div>)
}

export default Wrapper
