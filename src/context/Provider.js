import React from 'react';
import MyContext from './context';

class Provider extends React.Component {
  constructor() {
    super();
    this.moveCar = this.moveCar.bind(this);
    this.state = {
      cars: {
        redCar: false,
        blueCar: false,
        yellowCar: false,
      },
    };
  }

  moveCar(car, side) {
    this.setState(
      {
        cars: {
        ...this.state.cars,
        [`${car}Car`]: side,
      },
    });
  }

  render() {
    const { children } = this.props;
    const stateObj = { ...this.state, 'moveCar': this.moveCar };
    return (
      <MyContext.Provider value={ stateObj }>
        { children }
      </MyContext.Provider>
    );
  }
}

export default Provider;