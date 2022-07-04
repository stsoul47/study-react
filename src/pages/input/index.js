import React, { Component } from 'react';
import Input from '../../component/input';


/** 참고사이트: https://jiguin-hankun.tistory.com/23 */

// 로그인 구현 예정
class InputHome extends Component {

  render(){
    return (
      <div>
        <Input name="id" authFocus={true} />
        <br />
        <Input name="pass" type="password" />
      </div>
    )
  }
}

export default InputHome;