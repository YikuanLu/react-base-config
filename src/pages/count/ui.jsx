import React, { Component } from 'react'

class Count extends Component {
  render() {
    const { count, changeCount } = this.props
    return (
      <div>
        <p>Count:{count}</p>
        <button type="button" onClick={() => changeCount('+')}>
          +
        </button>
        <button type="button" onClick={() => changeCount('-')}>
          -
        </button>
      </div>
    )
  }
}

export default Count
