import React, { Component } from 'react'
import Ad from '../Ad'

function withAd(WrappedComponent, trackedElements = ['A', 'BUTTON']) {
  return class extends Component {
    constructor(props) {
      super(props);

      this.trackedElements = trackedElements;

      this.state = {
        clicks: 0,
  			showAd: false,
      }
    }

    toggleAd = () => {
  		this.setState({
  			showAd: !this.state.showAd
  		})
  	}

    adTracker = () => {
      this.setState({
        clicks: this.state.clicks + 1,
      })
    }

    componentDidUpdate(prevProps, prevState, snapshot){
  		if (this.state.clicks === 3 && !this.state.showAd) {
  			this.setState({
  				clicks: 0,
  				showAd: true
  			})
  		}
    }

    // onClick and onClickCapture both work; they just behave slightly differently
    // See:
    //   https://reactjs.org/docs/events.html#supported-events
    //   https://stackoverflow.com/questions/34522931/example-for-bubbling-and-capturing-in-react-js
    handleClickCapture = (event) => {
      // debugger;
      // console.log('tracking user actions', event.nativeEvent, event.target.tagName, event.target.nodeName, event.target.className);

      if (this.trackedElements.includes(event.target.nodeName)) {
        this.adTracker();
      }
    }

    render(){
      if (this.state.showAd) {
  			return <Ad toggleAd={this.toggleAd} />
      } else {
        return (
          <div onClickCapture={this.handleClickCapture}>
            <WrappedComponent {...this.props} adTracker={this.adTracker} />
          </div>
        )
      }
    }
  }
}

export default withAd;
