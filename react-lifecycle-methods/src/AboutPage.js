import React, { Component } from 'react';

// Update this component to use the Updating Component Lifecycle methods

class AboutPage extends Component {
  state = {
    counter: 0,
  };

  componentDidMount() {
    console.log('AboutPage.js: In componentDidMount()');
    //uncomment the below line and notice the change in output and the counter value
    // this.setState({counter:2}) 
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(`AboutPage.js: In shouldComponentUpdate(). nextState: ${JSON.stringify(nextState)}`);

    /*
      uncommment the conditional below to prevent component re-render if the decrement button is clicked.
      What happens if you try incrementing after decrementing. Why?
    */
    console.log('Next State = ', nextState);

    // if(nextState.counter + 1 === this.state.counter) {
    //   return false;
    // }

    return true; //return false to see the change in output. Notice any difference??
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`AboutPage.js: In componentDidUpdate(). prevState: ${JSON.stringify(prevState)}`);
  }

  incrementCounter = () => {
    let { counter } = this.state;
    counter++;

    this.setState({
      counter,
    });
  };

  decrementCounter = () => {
    let { counter } = this.state;
    counter--;

    this.setState({
      counter,
    });
  };

  render() {
    console.log('AboutPage.js: In render()');
    return (
      <div>
        <h2>{this.props.message}</h2>
        <p>{this.state.counter}</p>
        <button onClick={this.incrementCounter}>+</button>
        <button onClick={this.decrementCounter}>-</button>
      </div>
    )
  }
}

export default AboutPage;
