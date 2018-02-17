import React, { Component } from 'react'
import { Dropbox } from 'dropbox'
import { Button } from 'antd'

class DBoxLandingPage extends Component {
  constructor () {
    super()
    const { CALLBACK_DOMAIN, DROPBOX_CLIENT_ID } = process.env
    this.dbx = new Dropbox({ clientId: DROPBOX_CLIENT_ID })
    this.authUrl = this.dbx.getAuthenticationUrl(`${CALLBACK_DOMAIN}/login-success`)
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
