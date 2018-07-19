import React from 'react'


class Grandchild extends React.Component {
  constructor(){
    super()
    console.log("CONSTRUCTOR Grandchild")
  }

  componentDidMount(){
    console.log("DID MOUNT Grandchild")
  }
  render(){
    console.log("RENDER Grandchild")

    return (
      <p>I'm a baby!</p>
    )
  }
}

export default Grandchild