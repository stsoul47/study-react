import React, {Component} from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

/* router: S */
import ButtonHome from './pages/button';

/* router: E */


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/button" element={<ButtonHome/>}/>
        </Routes>
      </BrowserRouter>
      {/* 여러 컴포넌트 및 테스트 소스를 작성하기 위한 프로젝트 */}
    </div>
  );
}

export default App;
