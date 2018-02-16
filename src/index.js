import React from 'react'
import ReactDOM from 'react-dom'
import App from '@features/common/containers/App'
import { AppContainer } from 'react-hot-loader'
import registerServiceWorker from './registerServiceWorker'
import 'antd/dist/antd.css'

function renderApp (Component) {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}
renderApp(App)

if (module.hot) {
  module.hot.accept('@features/common/containers/App', () => {
    renderApp(App)
  })
}

registerServiceWorker()
