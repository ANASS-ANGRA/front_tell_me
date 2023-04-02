import { Route, Router, Routes } from "react-router-dom";
import Nav_bar from "./nav_bar";
import Home from "./home";
import Post from "./Post";

function App() {
  return (
    <div className="App">
      <Nav_bar/>
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/post" element={<Post/>} />
     </Routes>

    </div>
  );
}

export default App;
