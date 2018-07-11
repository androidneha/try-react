import React, { Component } from 'react';
import PostList from './post/PostList'
import logo from './logo.svg';
import './App.css';
import ConstLetVar from "./learn/ConstLetVar";

class App extends Component {
    render() {
        return (
            <div className="App">
                <PostList/>
                <ConstLetVar/>
            </div>
        );
    }
}

export default App;
