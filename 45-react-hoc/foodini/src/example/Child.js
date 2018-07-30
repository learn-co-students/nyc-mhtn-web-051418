import React from 'react'
import Grandchild from './Grandchild'

class Child extends React.Component {
  constructor(){
    super()
    console.log("CONSTRUCTOR Child")
  }

  componentDidMount(){
    console.log("DID MOUNT Child")
  }
  
  render(){
    console.log("RENDER Child")
    return (
      <Grandchild />
    )
  }
}

export default Child