import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Blogs from "./Pages/Blogs/Blogs";
import BlogDetail from "./Pages/BlogDetail/BlogDetail";
import BlogDetail2 from "./Pages/BlogDetail/BlogDetail2";
import BlogDetail3 from "./Pages/BlogDetail/BlogDetail3";
import BlogDetail4 from "./Pages/BlogDetail/BlogDetail4";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Home />} path="/" />
        <Route path="/blogs/">
          <Route index path="" element={<Blogs />} />
          <Route path="blog1" element={<BlogDetail />} />
          <Route path="blog2" element={<BlogDetail2 />} />
          <Route path="blog3" element={<BlogDetail3 />} />
          <Route path="blog4" element={<BlogDetail4 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
