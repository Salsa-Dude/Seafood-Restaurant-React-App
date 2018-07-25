
import React, { Fragment } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {

  state = {
    fishes: {},
    order: {}
  };

  addFish = (fish) => {
    // Take a copy of the existing state
    const fishes = {...this.state.fishes};
    // Add our new fish to that fish variable
    fishes[`fish${Date.now()}`] = fish;
    // Set the new fishes object to state
    this.setState({
      fishes:fishes
    })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    )
  }
}

export default App;