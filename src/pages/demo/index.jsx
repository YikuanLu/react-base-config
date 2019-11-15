import React from 'react'

class Demo extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div>
        <p>Demo</p>
        <div>{children}</div>
      </div>
    )
  }
}

export default Demo
