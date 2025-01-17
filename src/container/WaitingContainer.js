import React, { Component } from 'react';
import WaitingList from '../components/WaitingList';
import * as waitingActions from '../store/modules/waiting';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class WaitingContainer extends Component {
  handleChange = e => {
    const { WaitingActions } = this.props;
    WaitingActions.changeInput(e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();
    const { WaitingActions, input } = this.props;
    WaitingActions.create(input);
    WaitingActions.changeInput('');
  };

  handleEnter = id => {
    const { WaitingActions } = this.props;
    WaitingActions.enter(id);
  };

  handleLeave = id => {
    const { WaitingActions } = this.props;
    WaitingActions.leave(id);
  };

  render() {
    const { input, list } = this.props;

    return <WaitingList
      input={input}
      waitingList={list}
      onEnter={this.handleEnter}
      onLeave={this.handleLeave}
      onChange={this.handleChange}
      onSubmit={this.handleSubmit}/>;
  }
};

const mapStateToProps = ({ waiting }) => ({
  input: waiting.input,
  list: waiting.list,
});

const mapDispatchToProps = dispatch => ({
  WaitingActions: bindActionCreators(waitingActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WaitingContainer);



