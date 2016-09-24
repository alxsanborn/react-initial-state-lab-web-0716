const React = require('react')

class Bomb extends React.Component {
  constructor (props){
    super();
    this.state = {
      secondsLeft: props.initialCount
    }
  }
  render(){
    if (this.state.secondsLeft > 0){
    return (
      <div>{this.state.secondsLeft} seconds left before I go boom!</div>
    )
    }
    else {
      return(<div>Boom!</div>)
    }
  }
}

module.exports = Bomb;


// Take a moment to think about what a bomb does and how it works. Don't get all into the nitty gritty — what we're going to focus on right now is the timer. Let's create a component that represents a bomb timer that counts down until it reaches 0. However, the only thing we're going to focus on right now is setting the initial state of the bomb: the amount of seconds left on the timer. Since bomb timers can differ, we'll pass in a prop to our Bomb component to determine what the starting count should be.
// In the components/Bomb.js file, create a Bomb React component.
// Its initial state should have a property secondsLeft.
// The initial value of secondsLeft is set by passing in a initialCount prop to the Bomb component.
// It should render the text '<SECONDS_LEFT> seconds left before I go boom!', where <SECONDS_LEFT> is the value of secondsLeft.
// If the secondsLeft is set to 0, it should render 'Boom!' instead.
