import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'
//APP的入口文件。。


//初始化store，如何初始化请看configureStore
const store = configureStore()

//原理：context原理，将store注入整个app
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
