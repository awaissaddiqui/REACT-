import React, { Component } from 'react'

export default class showHide extends Component {
    constructor() {
        super();
        this.state = {
            label: "hide",
            status: true
        }
    }
    render() {

        return (
            <div>
                {this.state.status  && <h1>This is a text which is consider to be larger    </h1>}<br></br>
                <button onClick={() => {
                    this.setState({
                        label :"show",
                        status : !this.state.status
                    })
                }}>{this.state.label}</button>

            </div>
        )
    }
}
