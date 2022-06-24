import React, { Component } from "react";
import axios from "axios"
export default class Life extends Component {
  constructor(props) {
    super(props)
    this.change = this.change.bind(this);

    this.state = {
      num: 0,
      users: []
    }
  }
  // These three methods are life cycle methods . The first one will apply directly when page is refresh , The second one is apply when there is change in state.
  async componentDidMount() {
    const { data } = await axios.get("https://api.github.com/users")
    this.setState({
      users: data
    })

  }

  componentDidUpdate() {
    console.log('Component get updated')

  }
  componentWillUnmount() {
    console.log('component will unmount')

  }
  change() {
    this.setState({
      num: Math.floor(Math.random() * 100)
    })
  }
  render() {
    const design = {
      width: "200px",
      height: "200px",
      marginLeft: "80px",
      backgroundColor: "green"
    }
    return (
      <div>
        <ul >
          {
            this.state.users.map((user => {
              return <li key={user.id}>{user.login} - <img src={user.avatar_url} alt={user.login} style={design} /></li>
            }))
          }

        </ul>


      </div>
    )
  }
}
