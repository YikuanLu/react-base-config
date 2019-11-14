import React from 'react'
import { Link } from 'react-router-dom'

const LinkDemo = () => {
  return (
    <div className="demo">
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/home">home</Link>
        </li>
        <li>
          <Link to="/count">count</Link>
        </li>
        <li>
          <Link to="/demo/1">demo-1</Link>
        </li>
        <li>
          <Link to="/demo/2">demo-2</Link>
        </li>
      </ul>
    </div>
  )
}

export default LinkDemo
