import React, {Component} from "react";
export default class Counter extends Component {
     constructor(){
          super();
          this.state = {
               count :1
          }
     }
     render(){
          const add = () =>{
               this.setState({
                    count: this.state.count+1
               })
          }
          const subtract = () =>{
               this.setState({
                    count: this.state.count-1
               })
          }
          const reset=() =>{
               this.setState({
                    count:0
               })
          }
          
          return(
               <div>
                   <h1 style={{marginLeft:20}}>{this.state.count}</h1><br></br>
                   <button style={{marginLeft:20}} class="btn btn-primary"   onClick={add}>Add +</button>
                   <button style={{marginLeft:20}} class="btn btn-primary"  onClick={subtract}>Sub -</button>
                   <button style={{marginLeft:20}} class="btn btn-success"  onClick={reset}>Reset</button>


               </div>
          )
     }


}