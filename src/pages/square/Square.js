import React, {Component} from 'react';
import log from '../../common/Log';
// class Square extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: null,
//     };
//   }

//   squareClick = () => {
//     log.log('square class', 'click');
//     this.setState({value: 'X'});
//   }

//   render() {
//     return (
//       <button className='square' onClick={this.squareClick}> 
//       {/* <button className='square' onClick={props.onClick}> */}
//         {this.state.value}
//         {/* {props.value} */}
//       </button>
//     )
//   }
// }

function Square(props) {
  return (
    <button className='square' onClick={props.onClick}>
      {props.value}
    </button>
  )
}

export default Square;