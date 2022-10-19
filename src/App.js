import React from 'react';
import './App.css';
import Posts from './components/Posts';
import AddPost from './components/AddPost';
import { Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Posts/>} />
        <Route path='/add-post' element={<AddPost/>} />
      </Routes>
    </div>
  );
}

export default App;
