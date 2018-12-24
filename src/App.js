import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"
import Content from "./components/Content"
import 'bootstrap/dist/css/bootstrap.min.css';

const tabs = ["Education", "Work Experience"];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {tab: "Education"};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (value) => {
        this.setState({tab: value});
    }

    render() {
        return (
            <div>
              <Header navLinks={tabs} onTabChange={this.handleChange}/>
              <Content section={this.state.tab} tabs={tabs}/>
            </div>
        );
    }
}

export default App;
