import React, { Component } from 'react';

export default class Events extends Component {
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e){
        if(e.target.name === "btn1"){
            console.log('button 1 clicked')
        }else if (e.target.name === "btn2"){
          console.log('button 2 clicked')
        }
    }
  render() {
    return (
      <div>
        <button onClick={(e)=> this.handleClick(e)} id="1" name="btn1">Click 1</button>
        <button onClick={(e)=> this.handleClick(e)} id="2" name="btn2">Click 2</button>


      </div>
    )
  }
}
