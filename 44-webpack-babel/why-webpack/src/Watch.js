import React from 'react';
import Clock from './Clock';

export default class Watch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      milliseconds: 0,
      clockId: null,
    }

    this.startClock = this.startClock.bind(this);
    this.toggleStopwatch = this.toggleStopwatch.bind(this);
    this.recordLap = this.recordLap.bind(this);
  }
  // state = {
  //   milliseconds: 0,
  //   clockId: null,
  // }

  componentWillUnmount() {
    if (this.state.clockId) {
      clearInterval(this.state.clockId);
    }
  }

  // startClock = () => {
  startClock() {
    return setInterval(() => {
      this.setState((prevState, props) => {
        return { milliseconds: prevState.milliseconds + props.accuracy };
      });
    }, this.props.accuracy)
  }

  // toggleStopwatch = () => {
  toggleStopwatch() {
    this.setState(prevState => {
      if (prevState.clockId) {
        clearInterval(prevState.clockId);
        return { clockId: null };
      }
      return { clockId: this.startClock() };
    });
  }

  // recordLap = () => {
  recordLap() {
    this.props.recordLap(this.state.milliseconds);
  }

  render() {
    return (
      <div>
        <Clock milliseconds={this.state.milliseconds} />
        <button onClick={this.toggleStopwatch}>{this.state.clockId ? "Stop" : "Start"}</button>
        <button onClick={this.recordLap}>Lap</button>
      </div>
    )
  }

}

Watch.defaultProps = {
  accuracy: 10, // milliseconds
}
