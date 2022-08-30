import React, { Component } from 'react'
import axios  from 'axios';
export default class ImageSearch extends Component {
   constructor(){
    super();
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state ={
        keyword : "",
        output: []
    }
   }

  async handleSubmit(e){
    e.preventDefault();
    const key = "uPYzDUSJ_htJ4Cna14soAI4nkl-Z9T2mxw7pfpHOPcA";
    const term = this.state.keyword;
    const {data} = await axios.get(`https://api.unsplash.com/search/photos?client_id=${key}&query=${term}`)
            console.log(data.results)
    this.setState({
        output: data.results
    })
}
   handleChange (e){
        this.setState({
           keyword: e.target.value
          
        })
   }
    render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input type="search" id="search" placeholder='Search here for images' onChange={this.handleChange} />
            <button id="btnSearch" >Search</button>
        </form>

        <div>
            {
                this.state.output.map(image =>{
                    return <img src={image.urls.small} alt={image.id} key={image.id}/>
                })
            }
        </div>
      </div>
    )
  }
}
