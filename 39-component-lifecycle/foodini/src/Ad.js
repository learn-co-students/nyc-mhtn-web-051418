import React, { Fragment } from 'react'

class Ad extends React.Component {

	state = {
		timeRemaining: 5,
	}
	
	componentDidMount(){
		this.beef = setInterval(() => {
			this.tick()
		}, 1000)
	}

	tick = () => {
		if (this.state.timeRemaining){
			this.setState({
				timeRemaining: this.state.timeRemaining - 1
			})
		} else {
			clearInterval(this.beef)
		}
	}

	render(){
		console.log(this.state.timeRemaining)
		return (
			<Fragment>
				<iframe title="advertisement" height="500px" width="850px" src="https://www.youtube.com/embed/a8XC4H84rMU?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
				<button onClick={this.props.toggleAd} disabled={this.state.timeRemaining}> { this.state.timeRemaining ? `Go back in ${this.state.timeRemaining} second(s)` : "Go back" }</button>
			</Fragment>
		)
	}
}

export default Ad