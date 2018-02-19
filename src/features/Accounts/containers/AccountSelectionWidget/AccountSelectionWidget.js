import React from 'react'
// import propTypes from 'prop-types'
// import { push } from 'react-router-redux'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import CompStyles from './styles'

class AccountSelectionWidget extends React.Component {
  static propTypes = {

  }

  render = () => (
    <CompStyles className='AccountSelectionWidget'>
      AccountSelectionWidget
    </CompStyles>
  )
}
AccountSelectionWidget.displayName = 'AccountSelectionWidget'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  // actions: bindActionCreators({ **actionCreatorFunc** }, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountSelectionWidget)
