import React from "react"
import "./Styles.css"
import { Jumbotron } from "reactstrap"
import Tabs from "@material-ui/core/Tabs/Tabs";
import Tab from "@material-ui/core/Tab/Tab";
import Paper from "@material-ui/core/Paper/Paper";
import myPhoto from '../resources/myImg.jpg'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 0};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event, value) => {
        this.setState({value: value});
        this.props.onTabChange(this.props.navLinks[value]);
    };

    render() {
        const {navLinks} = this.props;
        const {background} = this.props;
        const labels = navLinks.map( (label) => {
                return (
                    <Tab className="text-light" label={label} href={"#" + label}/>
                );
            }
        );

        return (
            <div className={background}>
                <Jumbotron className="bg-transparent mb-0 rounded-0 text-center">
                    <img src={myPhoto} alt="My Photo" className="rounded-circle border border-light"
                         style={{height: 15 + 'rem', width: 15 + 'rem'}}/>
                    <h1 className="display-3 mainfont">Mazen Amr</h1>
                    <p className="lead txtfont">Computer Engineer</p>
                </Jumbotron>
                <div className={background}>
                    <Paper className="bg-transparent mt-0 rounded-0">
                        <Tabs
                            style={{flexGrow: 1}}
                            value={this.state.value}
                            onChange={this.handleChange}
                            indicatorColor="secondary"
                            centered>
                            {labels}
                        </Tabs>
                    </Paper>
                </div>
            </div>
        );
    }
}




export default Header;