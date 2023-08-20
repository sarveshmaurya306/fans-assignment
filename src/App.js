import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin_Page from "./components/Signin_Page";
import Dash_Board from "./components/Dash_Board";
import Auth from './components/auth/Auth'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin_Page/>} />
          <Route path="/dashboard" element={<Auth component={<Dash_Board />} />} /> 
        </Routes>
      </BrowserRouter>
     <contactUs/>
    </div>
  );
}

export default App;
