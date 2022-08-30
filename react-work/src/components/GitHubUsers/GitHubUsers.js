import axios from 'axios';
import {Component} from 'react';

export default class GitHubUsers extends Component{
    constructor(){
        super();
        this.state={
            user : []
        }
    }
    render(){

        const LoadData = async() => {
                const {data} = await  axios.get("https://api.github.com/users")
                this.setState({
                    user: data
                })
        }
        return(
            <div>
                <button onClick={LoadData}>LoadData</button>
                <ul>
                    {
                        this.state.user.map((out,i ) => {
                        return <li key={i}>{out.login} - <img src={out.avatar_url} alt={out.login}/></li>})
                    }
                </ul>

            </div>
        )
    }
}