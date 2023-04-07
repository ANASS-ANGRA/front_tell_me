import { Route, Router, Routes } from "react-router-dom";
import Nav_bar from "./nav_bar";
import Home from "./home";
import Post from "./Post";
import Profile from "./Profile";
import Inscri from "./inscri";
import Login from "./login";

function App() {
  return (
    <div className="App">
      <Nav_bar/>
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/post" element={<Post/>} />
       <Route path="/profile" element={<Profile/>}/>
       <Route path="/inscri" element={<Inscri/>}/>
       <Route path="/login" element={<Login/>}/>
     </Routes>

    </div>
  );
}

export default App;
