// import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import Home from './component/pages/Home';
import Login from './component/pages/Login';
import Register from './component/pages/Register';
import Menubar from './component/Menubar';
import { Container } from 'semantic-ui-react'


function App() {
  return (
    <Router>
     <Container>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
     </Container>
    </Router>
  );
}

export default App;
