import React, { Component } from 'react';
import './App.css';

import Hello from './HelloComponent';
import About from './AboutComponent';
import Books from './BooksComponent';
import Home from './Home';
import Series from './Series';
import PageHeaderBar from './PageHeader';

// import route Components here
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'
class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        This is the App page
                        <PageHeaderBar/>
                        <hr/>
                        <Route path="/" exact={true} component={Home} />
                        <Route path="/hello" component={Hello} />
                        <Route path="/about" component={About} />
                        <Route path="/books" component={Books} />
                        <Route path="/series" component={Series} />
                    </div>
                </div>
            </Router>
        );
    }
}
export default App;
