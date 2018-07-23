import React, { Fragment } from 'react'
import Child from './Child'

class Parent extends React.Component {
  constructor(){
    super()
    console.log("CONSTRUCTOR Parent")
  }
  
  componentDidMount(){
    console.log("DID MOUNT Parent")
  }

  render(){
    console.log("RENDER Parent")
    return (
      <Fragment>
        <Child />
        <Child />
      </Fragment>
    )
  }
}

export default Parent