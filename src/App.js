import React from 'react';
import Cardlist from './Cardlist';
import { robots } from './robots';
import SearchBox from './SearchBox';





class App extends React.Component {
    constructor () {
        super();
        this.state = {
            robots : robots,
            searchField : ''

        }
    }
    
    onSearchChange = (event) =>{
        this.setState ({searchField : event.target.value})
    }
    
    render () {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
          
        return (
            <div className='tc'>
                <h1 className='tc'>RoboFriends</h1>
                <SearchBox onSearchChange={this.onSearchChange}/>
                <hr></hr>
                <Cardlist robots={filteredRobots}/>
            </div>
        );
    }
}

export default App;