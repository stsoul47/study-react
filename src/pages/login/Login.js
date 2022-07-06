import React, {Component} from 'react';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {

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
  onClickLogin = () => {
    console.log("test", this.state);
  }

  render(){
    return (
      <div>
        <h2>Login</h2>
            <div>
                <label htmlFor='input_id'>ID : </label>
                <input type='text' name='input_id' value={this.state.inputId} onChange={this.handleChange} />
            </div>
            <div>
                <label htmlFor='input_pw'>PW : </label>
                <input type='password' name='input_pw' value={this.state.inputPw} onChange={this.handleChange} />
            </div>
            <div>
                <button type='button' onClick={this.onClickLogin}>Login</button>
            </div>
      </div>
    )
  }
}

export default Login;