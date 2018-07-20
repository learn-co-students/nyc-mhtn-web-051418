import React, { Component, Fragment } from 'react';
import { VoicePlayer } from 'react-voice-components'
import NowSaying from './NowSaying';

class InputReader extends Component {
  state = {
    isSpeaking: false,
    text: "",
  }

  handleSpeakingEnd = () => {
    this.setState({
      isSpeaking: false,
    });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  speak = (event) => {
    event.preventDefault();
    this.setState({ isSpeaking: true });
  }

  render() {
    return (
      <Fragment>
        {
          this.state.isSpeaking ?
            <VoicePlayer
              play
              onEnd={this.handleSpeakingEnd}
              text={this.state.text}
            />
          :
            null
        }
        <NowSaying
          header="Saying"
          text={this.state.text}
        />
        <form onSubmit={this.speak}>
          <input type="text" name="text" value={this.state.text} onChange={this.handleChange} />
          <input type="submit" value="Speak" />
        </form>
      </Fragment>
    );
  }
}

export default InputReader;
