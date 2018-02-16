import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { object } from 'prop-types'
import Dropbox from 'dropbox'
import { saveDbxAccount } from '../redux/saveDbxAccount'

class SuccessCallback extends Component {
  constructor () {
    super()
    // eslint-disable-next-line
    this.urlParams = new URLSearchParams(window.location.hash.slice(1))
  }

  // static test = 'hi'

  componentWillMount () {
    const { saveDbxAccount } = this.props.actions
    const accessToken = this.urlParams.get('access_token')
    const uid = this.urlParams.get('uid')
    const accountId = this.urlParams.get('account_id')
    const dbxAccount = {
      accessToken,
      uid,
      accountId
    }
    saveDbxAccount(dbxAccount)
    const dbx = new Dropbox.Dropbox({
      accessToken
    })

    dbx.filesListFolder({ path: '/salad-RABBIT' })
      .then(console.log, console.error)

    dbx.filesUpload({
      contents: 'YAYAYAY',
      path: '/salad-RABBIT/lol.salad',
      autorename: true
    })
  }

  render () {
    return (
      <div className='login-success'>
       Logged in! kk
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}
const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators({saveDbxAccount}, dispatch) }
}

SuccessCallback.propTypes = {
  actions: object
}
export default connect(mapStateToProps, mapDispatchToProps)(SuccessCallback)
