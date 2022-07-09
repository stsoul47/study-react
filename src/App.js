import React, {Component} from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

/* router: S */
import ButtonHome from './pages/button';
import Counter from './pages/count';
import Dashboard from './pages/dashboard';
import InputHome from './pages/input/index';
import Login from './pages/login/Login';
import Game from './pages/square/Game';

/* router: E */



class App extends Component {
  render(){
    return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/button" element={<ButtonHome />}/>
          <Route path="/input" element={<InputHome />}/>
          <Route path="/" exact element={<Dashboard />}/>
          <Route path="/count" element={<Counter />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/game" element={<Game/>}/>
        </Routes>
      </BrowserRouter>
      </div>
    )
  }
}


// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/button" element={<ButtonHome />}/>
//         </Routes>
//           <Route path="/dashboard" element={<Dashboard />}/>
//       </BrowserRouter>
//       {/* 여러 컴포넌트 및 테스트 소스를 작성하기 위한 프로젝트 */}
//     </div>
//   );
// }

export default App;
