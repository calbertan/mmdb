import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Add from "./pages/Add"
import Read from "./pages/Read"
import Readlist from "./pages/Readlist"

function App() {
  const [] = useState()
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Readlist/>
      break
    case "/read":
      component = <Read/>
      break
    case "/add":
      component = <Add/>
      break
  }
  return (
    <React.Fragment>
      <Header/>
      {component}
    </React.Fragment>
  );
}

export default App;
