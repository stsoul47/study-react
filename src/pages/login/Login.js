import React, {Component} from 'react';
import styled from 'styled-components';
import { fetchLogin } from './services';

/**
 * login form layout 
 */
const Container = styled.div`
  margin-top: 100px;
  padding: 20px;
`;

/**
 * login form Input tag
 */
const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 40px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`;

/**
 * login form Button 
 */
const Button = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 49px;
  display: block;
  width: 100%;
  height: 49px;
  margin: 16px 0 7px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 0;
  background-color: #03c75a;
  ${({ disabled}) => disabled && 
`background-color: #efefef;
`}
`;

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
      password: '',
    };

  }

  /**
   * 값이 변경 될 시 불러오는 메서드
   * 
   * @param {*} e 변경된 props
   */
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  /**
   * 로그인을 수행하는 메서드 
   */
  onClickLogin = async() => {
    // console.log("test", this.state);

    // 입력 받은 데이터 
    let userAccount = {
      id: this.state.id,
      password: this.state.password
    }

    try {
      const user = await fetchLogin(userAccount); //입력 받은 데이터가 실제 서버에 존재하는지 확인

      console.log("[Login Class] user response ===> ", user);
    } catch (error) {
      window.alert(error);
    }

  }

  render(){
    return (
      // <div>
      //   <h2>Login</h2>
      //       <div>
      //           <label htmlFor='input_id'>ID : </label>
      //           <input type='text' name='input_id' value={this.state.inputId} onChange={this.handleChange} />
      //       </div>
      //       <div>
      //           <label htmlFor='input_pw'>PW : </label>
      //           <input type='password' name='input_pw' value={this.state.inputPw} onChange={this.handleChange} />
      //       </div>
      //       <div>
      //           <button type='button' onClick={this.onClickLogin}>Login</button>
      //       </div>
      // </div>

      <Container>
        <Input id="id" name='id' placeholder='아이디를 입력해주세요.' value={this.state.id} onChange={this.handleChange} />
        <Input 
          id='password'
          name='password'
          type='password'
          placeholder='비밀번호를 입력하세요.'
          value={this.state.password}
          onChange={this.handleChange}
        />
        <Button type='button' onClick={this.onClickLogin}>로그인</Button>
      </Container>
    )
  }
}

export default Login;