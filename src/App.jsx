// import logo from './logo.svg';
// import React from "react"
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Result } from "./components/Result";
import {useState, useEffect} from "react";

export default function App() {
  const [dat, setData] = useState([]);
  const getData = () =>{
    fetch("https://fast-reef-22226.herokuapp.com/data").then((res) => {
       res.json().then((dat) => {
         setData([dat])
       })
    })
  }
  console.log(dat);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/res" element={<Result/>}></Route>
      </Routes> 

      <button onClick = {() => {getData()}}>Enter</button>
      {dat.length >= 1 ? <p style = {{color:"red", height:"20px", width:"70px"}}> {dat.title}</p>:"No"}
    </div>
  );
}

// export default App;
