import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { AppContainer } from 'react-hot-loader'
import registerServiceWorker from './registerServiceWorker'
import 'antd/dist/antd.css'

function renderApp (Component) {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('react-root')
  )
}
renderApp(App)

if (module.hot) {
  module.hot.accept(() => {
    renderApp(App)
  })
}

registerServiceWorker()
