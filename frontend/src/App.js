import './App.css';
import ApparelRecyclingMVP from './ApparelRecyclingMVP';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './component/LoginPage'
import SignupPage from './component/SignupPage'
function App() {
  return (
 <div className="App">
  <BrowserRouter>
     <Routes>
      <Route path='/homepage' element={ <ApparelRecyclingMVP/>}/>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/signup" exact element={<SignupPage/>}/>
    </Routes>
   </BrowserRouter>
 </div>
  );
}

export default App;
