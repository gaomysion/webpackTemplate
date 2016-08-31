import React, { PropTypes, Component } from 'react'

/**
 * 当前模块是一个测试模块内容是一个输入框
 */
export default class Test extends React.Component {
  // //设置属性对应的类型
  // static propTypes = {
  //   text: React.PropTypes.string,
  // };

  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text || ''
    }
  }
  /* handleSave(e) {
    let text = e.target.value.trim()
    if (text.length !== 0) {
      let newText = this.props.change(text)
      this.setState({ text: newText })
    }
  }*/
   handleSave(e) {
    let text = e.target.value.trim()
    // this.setState({ text: text })
    this.props.change(text)
  }
  render() {
    return (
      <div>
      	<input type="text" placeholder='请输入测试数据！'
      		onChange={this.handleSave.bind(this)}
      	/>
      </div>
    );
  }
}
