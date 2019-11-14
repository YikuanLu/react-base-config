import React, { Component } from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '@/redux/store'
import RouterSwitch from '@/route'
import Menu from '@/components/public/menu'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <Menu />
            <RouterSwitch />
          </Router>
        </Provider>
      </div>
    )
  }
}

export default App
