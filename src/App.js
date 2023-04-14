import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Nav_bar from "./nav_bar";
import Home from "./home";
import Post from "./Post";
import Profile from "./Profile";
import Inscri from "./inscri";
import Login from "./login";
import Validation from "./validation";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Token_storage } from './Store/login_slice';

function App() {
  const token=useSelector(state=>state.Info.tokens)

 const dispatch= useDispatch()
  useEffect(()=>{
     dispatch(Token_storage())
  })
  const isAuthenticated = token !== null;

  return (
    <div className="App">
      <Nav_bar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={isAuthenticated ? <Post /> : <Navigate to="/login" />} />
        <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/inscri" element={<Inscri />} />
        <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login />}/>
        <Route path="/validation" element={<Validation />} />
      </Routes>

    </div>
  );
}

export default App;
