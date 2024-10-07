import './App.css';
import { BrowserRouter as  Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  

  return (
    <Router>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/Register" element={<Register/>} />
                {/* <Route path="/dashboard" element={<EventDashboard/>} />
                <Route path="/forgotpassword" element={<ForgotPassword/>} /> */}
                <Route path="/" element={<Login/>} exact />
            </Routes>
        </Router>
  )
}
export default App;
