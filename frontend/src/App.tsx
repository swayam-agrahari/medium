
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Blog} from "./pages/Blog";
import {Signup} from "./pages/signup";
import {Signin} from "./pages/signin";
import {Blogs} from "./pages/Blogs.tsx";


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/signup"} element={<Signup />} />
          <Route path={"/signin"} element={<Signin />} />
          <Route path={"/blog/:id"} element={<Blog />} />
          <Route path={"/blogs"} element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
