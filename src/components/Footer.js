import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends React.Component {

    render() {
        const {background} = this.props;
        return (
            <div className={background + " pt-5 pb-5"}>
                <div className="row mb-4">
                    <div className="offset-5 offset-5 col-2">
                        <h3 className="h3"><span className="mainfont">Contacts</span></h3>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {/* Github */}
                    <div className="offset-1 col-3 row">
                        <div className="col-2">
                            <a href="https://github.com/djzenma">
                                <FontAwesomeIcon className="text-light"
                                                 icon={['fab', 'github']} size="lg" style={{height: 2 + "rem"}}/>
                            </a>
                        </div>
                        <div className="col-10">
                            <p className="lead mainfont">djzenma</p>
                        </div>
                    </div> {/* col */}
                    {/* Mail */}
                    <div className="col-4 row">
                        <div className="col-2">
                            <a href="mailto:eidma@aucegypt.edu">
                                <FontAwesomeIcon className="text-light"
                                                 icon={['fas', 'envelope']} size="lg" style={{height: 2 + "rem"}}/>
                            </a>
                        </div>
                        <div className="col-10">
                            <p className="lead mainfont">eidma@aucegypt.edu</p>
                        </div>
                    </div> {/* col */}
                    {/* LinkedIn */}
                    <div className="col-3 row">
                        <div className="col-2">
                            <a href="https://www.linkedin.com/in/mazen-amr-580920165/">
                                <FontAwesomeIcon className="text-light"
                                                 icon={['fab', 'linkedin']} size="lg" style={{height: 2 + "rem"}}/>
                            </a>
                        </div>
                        <div className="col-10">
                            <p className="lead mainfont">Mazen Amr</p>
                        </div>
                    </div> {/* col */}
                    <div className="offset-1"/>
                </div> {/* row */}
            </div>
        );
    }
}

export default Footer;