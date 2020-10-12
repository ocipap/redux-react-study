import React, { Component } from 'react';
import Counter from '../components/Counter';
import { increment, decrement } from '../store/modules/counter';
import { connect } from 'react-redux';

class CounterContainer extends Component {
  handleIncrement = () => {
    this.props.increment();
  };

  handleDecrement = () => {
    this.props.decrement();
  };

  render() {
    const { value, color } = this.props;
    return <Counter value={value} color={color} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}/>;
  }
}

const mapStateToProps = ({ counter }) => ({
  color: counter.color,
  value: counter.number,
});

const mapDispatchToProps = { increment, decrement };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);
