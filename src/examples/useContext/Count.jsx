import React from 'react'
import PersonContext from './person.context'
import Count from './Count'

const Person = () => {
  return (
    <PersonContext.Consumer>
      {context => (
        <>
          <h2>
            count: {context.count}
          </h2>
        </>
      )}
    </PersonContext.Consumer>
  )
}

export default Person
