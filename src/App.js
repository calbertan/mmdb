import React, { useState } from 'react';
import Header from './components/Header';
import Add from "./pages/Add"
import Completed from "./pages/Completed"
import Readlist from "./pages/Readlist"

import {GlobalProvider} from './context/GlobalState'

function App() {
  const [] = useState()
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Readlist/>
      break
    case "/completed":
      component = <Completed/>
      break
    case "/add":
      component = <Add/>
      break
  }
  return (
    <GlobalProvider>
      <React.Fragment>
        <Header/>
        {component}
      </React.Fragment>
    </GlobalProvider>
  );
}

export default App;
