import React, { Component } from 'react';
import './containers/App.css';
import CardList from './CardList';
import SearchBox from './SearchBox'
import Scroll from './Scroll'


class App extends Component{
  constructor(){
    super()
    this.state ={
      robots: [],
      searchField:''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())

    .then(users => {this.setState({robots:users})})
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value})
  }


  render(){
    const{robots, searchField} = this.state
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
     return !robots.length ? 
      <h1>Loading</h1> :
    (
      <div className='tc'>
        <h1 className='f1'>robofriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
      
            <CardList robots={filteredRobots}/>
        </Scroll>
      </div>
  );
    }
  }


 

export default App;
