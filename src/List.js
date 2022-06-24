import React, { Component } from "react";
import axios  from 'axios';
export default class List extends Component {
    constructor() {
        super();
        this.state = {
            list: []

        }

    }
    render() 
    {
        const loadData = async() => {
            const {data} = await axios.get("https://api.github.com/users")
            this.setState({
                list: data
            })

            // fetch("https://api.github.com/users")
            //     .then(json => {
            //         return json.json();
            //     })
            //     .then(data => {
            //         this.setState({
            //             list:data
            //         })
            //     })
        }
    
        return (
            <div>
                <ol style={{backgroundColor:"indianred"}}>
                    {this.state.list.map((m ,i) => <li key={i} style={{textAlign:"center"}}>{m.login} - <br></br><img src={m.avatar_url} alt={m.login}/></li>)}


                </ol>
                <button onClick={loadData}>Fetch</button>


            </div>
        );
    }
}