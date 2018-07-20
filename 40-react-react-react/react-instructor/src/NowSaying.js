import React, { Fragment } from 'react';

// class NowSaying extends Component {
//   render() {
//     return (
//       <Fragment>
//         <h2>{this.props.header}:</h2>
//         <p>{this.props.text}</p>
//       </Fragment>
//     )
//   }
// }

// function NowSaying(props) {
//   return (
//     <Fragment>
//       <h2>{props.header}:</h2>
//       <p>{props.text}</p>
//     </Fragment>
//   )
// }

// const NowSaying = (props) => (
//   <Fragment>
//     <h2>{props.header}:</h2>
//     <p>{props.text}</p>
//   </Fragment>
// )
//
const NowSaying = ({ header = "default", text = "" }) => (
  // here we destructure so props is gone
  // so we don't need props down below
  <Fragment>
    <h2>{header}:</h2>
    <p>{text}</p>
  </Fragment>
)
// class is heavier
// class indicates you have intention to do something
// functions are very limited, they indicate that they are pretty much presenting info
// functional components can be reused
// security reasons, backend, maybe server side rendering
// far less bugs

// const NowSaying = (props) => {
//   const { header, text } = props;
//
//   return (
//     <Fragment>
//       <h2>{props.header}:</h2>
//       <p>{props.text}</p>
//     </Fragment>
//   )
// }

export default NowSaying;
