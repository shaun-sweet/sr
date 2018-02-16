import React, { Component } from 'react'
import { Dropbox } from 'dropbox'
import { Button } from 'antd'

class DBoxLandingPage extends Component {
  constructor () {
    super()
    const { REACT_APP_CALLBACK_DOMAIN, REACT_APP_DROPBOX_CLIENT_ID } = process.env
    this.dbx = new Dropbox({ clientId: REACT_APP_DROPBOX_CLIENT_ID })
    this.authUrl = this.dbx.getAuthenticationUrl(`${REACT_APP_CALLBACK_DOMAIN}/login-success`)
  }

  render () {
    return (
      <div className='dbx-login'>
        DROP BOX
        <a href={this.authUrl}>
          <Button type='primary'>Login</Button>
        </a>
      </div>
    )
  }
}

export default DBoxLandingPage
