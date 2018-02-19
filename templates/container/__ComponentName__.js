import React from 'react'
// import propTypes from 'prop-types'
// import { push } from 'react-router-redux'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import CompStyles from './styles'

class __ComponentName__ extends React.Component {
  static propTypes = {

  }

  render = () => (
    <CompStyles className='__ComponentName__'>
      __ComponentName__
    </CompStyles>
  )
}
__ComponentName__.displayName = '__ComponentName__'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  // actions: bindActionCreators({ **actionCreatorFunc** }, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(__ComponentName__)
