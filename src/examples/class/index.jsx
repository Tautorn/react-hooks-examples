import React, { Component } from 'react'

class Twitter extends Component {

  state = {
    isLoading: true
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    window.setTimeout(() => {
      this.setState({ isLoading: false })
    }, 2000)
  }

  render() {
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
}

export default Twitter
