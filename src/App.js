import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas);

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
            <div className="back">
                <Header background={"bg-transparent"}
                        navLinks={tabs} onTabChange={this.handleChange}/>
                <Content background={"colorLight"} section={this.state.tab} tabs={tabs}/>
                <Footer background={"bg-transparent"}/>
            </div>
        );
    }
}

export default App;
