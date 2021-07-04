
import React, { Component } from 'react';
import CardList from '../components/Cardlist';
import SearchBox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import Errorboundry from '../components/Errorboundry'
import { connect } from 'react-redux'
import { setSearchField, requestRobot } from '../actions';


const mapStateToProps = (state)=> {
  return {
    input: state.robotReducer, // 1 When you name the property to be the same with what you have in your reducer, it can be confusing it is advisable to give a different name and it applies to the first 3 errors
    robots: state.requestRobot.robots, //2
    isPending: state.requestRobot.isPending, //3
    error: state.requestRobot.error
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobot: () => dispatch(requestRobot())

  }
}

// You're good.
// The errors came from 4 different places
// You get? Lastly the combineReducer function in the index is expecting an object.



class App extends Component {
 componentDidMount() {
 this.props.onRequestRobot();
}
render() {
  const { input: {searchField} , onSearchChange, robots,  isPending  } = this.props;
    const filteredRobots = robots.filter(robot => { 
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return isPending?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
         <Errorboundry> <Scroll>
            <CardList Robots={filteredRobots} />
          </Scroll>
          </Errorboundry>
        </div>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);