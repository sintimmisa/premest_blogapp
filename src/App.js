import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Blog from "./components/Blog";
import CreatePost from './components/CreatePost';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Blog} />
          <Route path="/signup" component={SignUp} />
          <Route  path="/login" component={Login} />
          <Route  path="/createpost" component={CreatePost} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
