import React from 'react'
// import propTypes from 'prop-types'
// import { push } from 'react-router-redux'
import { connect } from 'react-redux'
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

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(__ComponentName__)
