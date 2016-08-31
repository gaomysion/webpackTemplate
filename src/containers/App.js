import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Test from '../components/test/test'
import Content from '../components/test/content'
import * as TestActions from '../actions/test/test'

class App extends Component {

  render() {
    return (
      <div>
        <Content text={this.props.changeData.text}/>
        <Test change={this.props.actions.changeInput}/>
      </div>
    )
  }
}

App.propTypes = {
  changeData: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    //重点：这个test是和在根reducer里边配置的名称一样。
    changeData: state.test
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TestActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

