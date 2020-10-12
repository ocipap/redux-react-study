import React, { Component } from 'react';
import { connect } from 'react-redux';
import Palette from '../components/Palette';
import { changeColor } from '../store/modules/counter';
import { bindActionCreators } from 'redux';

class PaletteContainer extends Component {
  handleSelect = (color) => {
    const { changeColor } = this.props;
    changeColor(color);
  };

  render() {
    const { color } = this.props;
    return <Palette selected={color} onSelect={this.handleSelect}/>;
  }
}

const mapStateToProps = ({ counter }) => ({
  color: counter.color,
});

const mapDispatchToProps = dispatch => ({
  changeColor: bindActionCreators(changeColor, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PaletteContainer);

