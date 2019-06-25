import React from 'react'
import PersonContext from './person.context'
import Person from './Person'

const Stack = () => {
  return (
    <PersonContext.Consumer>
      {(context) => (
        <>
          <div>
            <Person />
          </div>
          <ul>
            {
              context.stack.map((ele, index) => {
                return (<li key={`key-${index}`}>{ele}</li>)
              })
            }
          </ul>
        </>
      )}
    </PersonContext.Consumer>
  )
}

export default Stack
