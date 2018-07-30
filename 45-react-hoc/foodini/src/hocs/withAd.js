import React, { Component } from 'react';
import Ad from '../Ad';

function withAd(WrappedComponent, whatToMonetize = ['BUTTON', 'IMG', 'A', 'INPUT']) {
  return class extends Component {
    // Add common abstracted functionality here.
    state = {
			clicks: 0,
			showAd: false,
		}

    toggleAd = () => {
  		this.setState({
  			showAd: !this.state.showAd
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

    // How do we keep track of clicks???
    // clicks: this.state.clicks + 1,
    incrementClick = () => {
      this.setState({
        clicks: this.state.clicks + 1,
      })
    }

    handleClickCapture = (event) => {
      // console.log(event);
      // debugger;
      // const whatToMonetize = ['BUTTON', 'IMG', 'A', 'INPUT']
      if (whatToMonetize.includes(event.target.nodeName)) {
        this.incrementClick();
      }
    }

    // on an action => general event handler for anything that's clicked on
    // in mod 3, we attached to a div => everything in that div triggers the event
    render() {
      if (this.state.showAd){
        return <Ad toggleAd={this.toggleAd} />
      } else {
        return (
          <div onClickCapture={this.handleClickCapture}>
            <WrappedComponent {...this.props} />
          </div>
        )
      }
    }
  }
}

export default withAd;
