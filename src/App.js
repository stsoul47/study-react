import React, {Component} from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
/* router: S */
import ButtonHome from './pages/button';
import Dashboard from './pages/dashboard';

/* router: E */

class App extends Component {
  render(){
    return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/button" element={<ButtonHome />}/>
          <Route path="/" exact element={<Dashboard />}/>
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
