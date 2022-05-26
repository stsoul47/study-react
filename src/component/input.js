import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      isInputError: false,
      isFirstFocus: false,
    };

    /* 콜백 함수 바인딩 */
    this.setRef = this.setRef.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  /**
   * ref 프로퍼티 연결
   * @param {*} ref 연결할 ref
   * 
   * @author jslee
   * @since 2022-05-26
   */
  setRef(ref) {
    this.ref = ref;
  }

  /**
   * 입력창 변경 이벤트
   * @param {*} e 
   */
  handleChange(e) {
    const { name, onChange } = this.props;
    console.log(
      `handleChange() name: ${name}, e.target.value : ${e.target.value}`
    );
    // 에러 체크 변수
    let checkError = false;
    // 변경된 시테이트 값
    this.setState({ isInputError: checkError, value: e.target.value });
    // 상위 컴포넌트 콜백 함수 실행
    onChange(name, e.target.value);
  }

  handleFocus(e) {
    const { name, onFocus } = this.props;
    console.log(`handleFocus() name : ${name} , e.target.value : ${e.target.value}`);
    // 처음 포커스시    
    if (this.state.isFirstFocus === false) {
      console.log(`First on focus -> name : ${name} , e.target.value : ${e.target.value}`);
      this.setState({ isFirstFocus: true });
    }
    // 상위 컴포넌트 콜백 함수 실행    
    onFocus(name, e.target.value);
  }

  // 컴포넌트 마운트  
  componentDidMount() {
    // 포커스 맞추기    
    if (this.props.autoFocus) {
      this.ref.focus();
    }
  }

  render() {
    // 프로퍼티 받아서 화면 출력    
    const { label, name, type, errorMessage } = this.props;
    return (
      <label>{label}
        <input
          id={`input_${name}`}
          value={this.state.value}
          type={type}
          ref={this.setRef}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
        />
        {this.state.isInputError && errorMessage}
      </label>
    );
  }
}

Input.propTypes = {  
  label: PropTypes.string,  
  name: PropTypes.string.isRequired,  
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),  
  type: PropTypes.oneOf(["text", "password", "number", "price"]),  
  autoFocus: PropTypes.bool,  
  errorMessage: PropTypes.string,  
  onChange: PropTypes.func,  
  onFocus: PropTypes.func,
};

Input.defaultProps = {  
  value: "",  
  type: "text",  
  autoFocus: false,  
  onChange: () => {},  
  onFocus: () => {},
};

export default Input;