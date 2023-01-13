import React, {Suspense} from 'react';
import { Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { CirclesWithBar } from "react-loader-spinner";
import './App.css';
import MainPageComponent from './MainPageComponent';

const App = () => {
  return (
    <Suspense fallback={
        <CirclesWithBar 
          className="loader"
          type="ThreeDots"
          color="#5d1c61"
          height={50}
          width={100}
          timeout={10000} //10 secs
        />
    }>
      <Router>
        <Link className='home' to="/">Home</Link>
        <Routes>
          <Route path='/' exact element={<MainPageComponent/>}></Route>
        </Routes>
      </Router>
    </Suspense>
  );
}
export default App;