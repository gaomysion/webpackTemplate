import React, { PropTypes, Component } from 'react'

/**
 * 显示内容
 */
export default class Content extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text || ''
    }
  }
  render() {
    return (
      <div>
        <p>{this.props.text}</p>
      </div>
    );
  }
}
