import React, { Component } from 'react';
import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';

export default class Dashboard extends Component {
  render(){
    const { color, name, isSpecial} = this.props;
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item href='/'>
            <HomeOutlined /> {/* home icon */}
          </Breadcrumb.Item>
        </Breadcrumb>
        <div style={{color}}>
          {isSpecial && <b>*</b>}
          안녕하세요, <span className='test'>{name}</span> 님
        </div>
      </div>
    );
  }
}

Dashboard.defaultProps = {
  name: '이진성',
};

