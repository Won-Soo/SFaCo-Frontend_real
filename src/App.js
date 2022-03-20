
import './App.css';
import ComWrite from './com/ComWrite';
import ComList from './com/ComList'
import ComView from './com/ComView';
import ComEdit from './com/ComEdit';
import MainPage from './main/MainPage';
import FindId from './info/FindId';
import FindPwd from './info/FindPwd';
import Login from './info/Login';
import SignUp from './info/SignUp';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
//import './com/ComWrite.css'



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='./com' element={<ComWrite />} />
        <Route path='./com' element={<ComList />} />
      </Routes>

      {/* <ComWrite></ComWrite> */}
      <ComList></ComList>
      {/* <ComView></ComView> */}
      {/* <ComEdit></ComEdit> */}
      {/* <MainPage></MainPage> */}
       {/* <FindId></FindId> */}
      {/* <FindPwd></FindPwd> */}
      {/* <Login></Login> */}
      {/* <SignUp></SignUp> */}
    </div>
  );
}

export default App;
