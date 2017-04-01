import React from 'react'
import { createStore } from 'redux'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers'
import reducers from './reducers'

export const store = createStore(reducers)

const render=()=>ReactDOM.render(
  <Provider store={store}>
  	<App/>
  </Provider>,
  document.getElementById('root')
)

render();
store.subscribe(render)