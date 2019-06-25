import React from 'react'
import PersonContext from './person.context'
import Count from './Count'

const Person = () => {
  return (
    <PersonContext.Consumer>
      {context => (
        <>
          <div>
            Name: {context.name}
          </div>
          <div>
            Age: {context.age}
          </div>
          <div>
            <Count />
          </div>
        </>
      )}
    </PersonContext.Consumer>
  )
}

export default Person
