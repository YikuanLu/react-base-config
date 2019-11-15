import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import routes from './routes'

const createRouteItem = (routeItem) => (
  <Route
    path={routeItem.path}
    exact={!!routeItem.exact}
    key={routeItem.path}
    render={(props) => (
      <routeItem.component {...props} routes={routeItem.routes} />
    )}
  />
)

const createSwitch = (routeItem) => {
  return (
    <Route
      path={routeItem.path}
      key={routeItem.path}
      render={(props) => {
        return routeItem.component ? (
          <routeItem.component {...props}>
            <Switch>
              {routeItem.routes.map((item) => {
                return createRouteItem(item)
              })}
            </Switch>
          </routeItem.component>
        ) : (
          <Switch>
            {routeItem.routes.map((item) => {
              return createRouteItem(item)
            })}
          </Switch>
        )
      }}
    />
  )
}

// 递归路由树 🌲
function renderRoutes(routeItem) {
  return routeItem.routes ? createSwitch(routeItem) : createRouteItem(routeItem)
}

class RouterView extends Component {
  render() {
    return (
      <Switch>
        {routes.map((item) => {
          return renderRoutes(item)
        })}
      </Switch>
    )
  }
}

export default RouterView
