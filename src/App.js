import React from 'react'
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Join from './components/Joins/Join';
import Chat from './components/Chats/Chat';

// function
const  App = () => (
    <Router>
        <Route path="/" exact component={Join} />
        <Route path="/chat" component={Chat} />
    </Router>
)
export default App
