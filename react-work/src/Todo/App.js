import React, { Component } from 'react'

import List from './List'
import Reset from './Reset'

export default class App extends Component {
    constructor(){
        super();
        this.state ={
            tasks : [{"text": "Tomato", "status": "Incomplete" },
                     {"text": "Kachaloo", "status": "Complete" },
                     {"text": "Meat", "status": "Incomplete" },
                     {"text": "Vegetable", "status": "Complete" },
                     {"text": "Chicken", "status": "Incomplete" }]
        }
    }
  render() {
    return (
      <div>
        <List tasks={this.state.tasks} />
        <Reset/>
        <h1 style={{color: "blue"}}>Total: {this.state.tasks.length}</h1>
        <h1 style={{color: "green"}}>Complete:{this.state.tasks.filter(task=>task.status === "Complete").length}</h1>
        <h1 style={{color: "red"}}>Incomplete:{this.state.tasks.filter(income => income.status ==="Incomplete").length}</h1>
      </div>
    )
  }
}
