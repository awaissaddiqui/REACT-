import React, { Component } from 'react'


export default class Item extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
        <h3>
      <li key={this.props.text}>
        <input type="checkbox" value={this.props.task}/>
        {this.props.text } - {this.props.status}
        </li>

      </h3>
    )
  }
}
