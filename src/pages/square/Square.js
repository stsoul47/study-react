// import React, {Component} from 'react';
// import log from '../../common/Log';
import React from 'react';

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
//         {this.state.value}
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