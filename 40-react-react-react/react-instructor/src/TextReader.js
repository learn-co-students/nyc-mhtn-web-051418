import React, { Component, Fragment } from 'react';
import { VoicePlayer } from 'react-voice-components'
import lecture from './lecture';
import NowSaying from './NowSaying';
import UUID from 'uuid';

class TextReader extends Component {
  constructor(props) {
    super(props);

    const lines = lecture.split(`\n`);

    // // fiiiine
    // let index = 0;
    // let arrayOfObjects = lines.map(l => {
    //   return {
    //     id: index++,
    //     text: l,
    //   }
    // })
    // console.log(arrayOfObjects);
    // // find index
    // // manually reassign it
    // let newObject = { id: 2, text: "some new text" } // what we want to update to
    // let newArrayOfObjects = [...arrayOfObjects].map(o => {
    //   if (o.id === newObject.id) {
    //     return newObject;
    //   }
    //   return o;
    // })
    // console.log(newArrayOfObjects);

    // // lines is an array
    // const newLines = [...lines];
    // // append
    // const newLines = [...lines, "something else"];
    // // prepending
    // const newLines = ["something else", ...lines];
    let state = {
      lines,
      isSpeaking: false,
      nextLine: 0,
      text: "",
    }

    let newState = JSON.parse(JSON.stringify(state));
    console.log(state === newState);

    // let newState = { ...state, isSpeaking: true };
    // let newState = { isSpeaking: true, ...state };
    // let isSpeaking = true;
    // let newState = { ...state, isSpeaking: isSpeaking };

    // state = false, newState = true
    // console.log(state.isSpeaking, newState.isSpeaking)
    // console.log(state === newState);





    this.state = {
      lines,
      isSpeaking: false,
      nextLine: 0,
      text: "",
    }
  }

  playNextLine = () => {
    this.setState({
      isSpeaking: true,
      nextLine: this.state.nextLine + 1,
      text: this.state.lines[this.state.nextLine],
    })
  }

  handleSpeakEnd = () => {
    this.setState({
      isSpeaking: false,
    });
  }

  render() {
    return (
      <Fragment>
        {
          this.state.isSpeaking ?
            <VoicePlayer
              play
              onEnd={this.handleSpeakEnd}
              text={this.state.text}
            />
          :
            null
        }

        <NowSaying
          header="Now saying"
          text={this.state.text}
        />
        <button onClick={this.playNextLine}>Speak</button>
        <NowSaying
          header="Up next"
          text={this.state.lines[this.state.nextLine]}
        />
      </Fragment>
    )
  }
}

export default TextReader;
