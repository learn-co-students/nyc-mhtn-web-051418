import React from 'react';
import StopWatch from './StopWatch';
import UUID from 'uuid';

export default class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     stopwatches: [
  //       {
  //         id: UUID()
  //       }
  //     ]
  //   }
  //
  //   // this.addWatch = this.addWatch.bind(this);
  //   // this.removeWatch = this.removeWatch.bind(this);
  // }
  state = {
    stopwatches: [
      {
        id: UUID()
      }
    ]
  }

  addWatch = () => {
  // addWatch() {
    let stopwatches = [...this.state.stopwatches];
    stopwatches.push({ id: UUID() });
    this.setState({ stopwatches });
  }

  removeWatch = (id) => {
  // removeWatch(id) {
    let stopwatches = [...this.state.stopwatches];
    stopwatches = stopwatches.filter(stopwatch => stopwatch.id !== id);
    this.setState({ stopwatches });
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex' }}>
          { this.state.stopwatches.map(stopwatch => {
            return <StopWatch key={stopwatch.id} id={stopwatch.id} tossWatch={this.removeWatch} />
          })}
        </div>
        <button onClick={this.addWatch}>Add Watch</button>
      </div>
    )
  }
}
