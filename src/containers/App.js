import React, { Component } from "react";
import CardList from '../components/CardList'
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
// import ErrorBoundry from "../components/ErrorBoundry"
// for next improvement

class App extends Component {
  constructor () {
    super()
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount () {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => {
      return response.json();
    })
    .then(usersJson => {
      this.setState({ robots: usersJson })
    })
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value})
  }

  render () {
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    console.log(filteredRobots)
    if (this.state.robots.length === 0) {
      return <h1>Loading..</h1>
    } else {
      return (
        <div className='tc'>
          <h1>RoboFriends!</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
          {/* for next improvement */}
            {/* <ErrorBoundry> */}
              <CardList robots={filteredRobots} />
            {/* </ErrorBoundry> */}
          </Scroll>
        </div>
      )
    }

  }
}

export default App;