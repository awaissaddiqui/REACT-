import {Component} from 'react';

export default class Counter extends Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    render(){
        const addNum = () =>{
            this.setState({
                count: this.state.count + 1
            })
        }
        const decNum =() =>{
            this.setState({
                count: this.state.count -1
            })
        }
        const resNum =() =>{
            this.setState({
                count: 0
            })
        }
        return(
            <div>
                <h1 style={{color : "green", border: "1px solid black", borderRadius:"25px", width: "50px",textAlign: "center" }}>{this.state.count}</h1>
                <br></br><button onClick={addNum}>Increment</button>
                <button onClick={decNum}>Decrement</button>
                <button onClick={resNum}>Reset</button>
            </div>
        )
    }
}
