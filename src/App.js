import React, { Component } from 'react';
import './App.css';
import Myrouter from "./logic/myrouter";



class App extends Component {
    render() {
        return (
            <div className="index-page">
                <Myrouter/>
            </div>



        );
    }
}

export default App;
