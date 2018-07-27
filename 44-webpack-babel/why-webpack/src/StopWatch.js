import React from 'react';
import Watch from './Watch';
import Laps from './Laps';

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      laps: [],
    }

    this.recordLap = this.recordLap.bind(this);
    this.tossWatch = this.tossWatch.bind(this);
  }
  // state = {
  //   laps: [],
  // }

  // recordLap = time => {
  recordLap(time) {
    this.setState(prevState => {
      return {
        laps: [...prevState.laps, time]
      }
    })
  }

  // tossWatch = () => {
  tossWatch() {
    this.props.tossWatch(this.props.id);
  }

  componentWillUnmount() {
    console.log(`componentWillUnmount`);
  }

  render() {
    return (
      <div style={{ border: '1px solid black', padding: 10, margin: 10 }}>
        <Watch recordLap={this.recordLap} />
        <button onClick={this.tossWatch}>Toss Watch</button>
        <Laps laps={this.state.laps} />
      </div>
    )
  }
}
