import React, { useEffects, useState } from 'react'

const Twitter = () => {
  const [isLoading, setIsloading] = useState(true)

  useEffects(() => {
    window.setTimeout(() => {
      setIsloading(false)
    }, 2000)
  }, [])

  return (
    <div>
      {
        isLoading ? (
          <div>Loading...</div>
        ) : (
            <div>Hello Twitter</div>
          )
      }
    </div>
  )
}

export default Twitter
