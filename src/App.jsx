import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Blogs from "./Pages/Blogs/Blogs";
import BlogDetail from "./Pages/BlogDetail/BlogDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Blogs />} path="/blogs" />
        <Route element={<BlogDetail />} path="/blogs/:blogName" />
      </Routes>
    </div>
  );
}

export default App;
