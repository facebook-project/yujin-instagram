//import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/App.css";
import SignIn from "./pages/SignIn";

// App.js : componenet 정의
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={SignIn} />
          <Route render={() => <div className='error'>에러 페이지</div>} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
