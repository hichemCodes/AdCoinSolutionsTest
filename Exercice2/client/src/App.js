import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Blog from "./components/Blog";
import Post from './components/Post';
import AddPost from './components/AddPost';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/blog" element={<Blog />} ></Route>
            <Route path="/blog/:id" element={<Post />} ></Route>
            <Route path="/blog/add" element={<AddPost />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
