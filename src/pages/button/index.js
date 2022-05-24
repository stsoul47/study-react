import React from 'react';
import styled from 'styled-components';
import Button from '../component/button';

function ButtonHome(params) {
  return (
    <div>
      <h2>작은 버튼</h2>
      <Wrapper>
        <Button size="sm">기본</Button>
        <Button variant="success" size="sm">성공</Button>
        <Button variant="error" size="sm">오류</Button>
        <Button variant="warning" size="sm">경고</Button>
      </Wrapper>

      <h2>중간 버튼</h2>
      <Wrapper>
        <Button size="sm">기본</Button>
        <Button variant="success">성공</Button>
        <Button variant="error">오류</Button>
        <Button variant="warning">경고</Button>
      </Wrapper>

      <h2>큰 버튼</h2>
      <Wrapper>
        <Button size="lg">기본</Button>
        <Button variant="success" size="lg">성공</Button>
        <Button variant="error" size="lg">오류</Button>
        <Button variant="warning" size="lg">경고</Button>
      </Wrapper>
    </div>
  )
};

const Wrapper = styled.form`
  max-width: 800px;
  margin: 0 auto;
  padding: 8px;
  display: flex;
  justify-content: space-around;
`;

export default ButtonHome;