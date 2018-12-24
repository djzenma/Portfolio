import React from "react"
import {Media} from "reactstrap";

class MediaItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {imgAlt} = this.props;
        const {imgSrc} = this.props;
        const {heading} = this.props;
        const {extra} = this.props;

        return (
            <Media className="mt-4 compColor">
                <Media left>
                    <Media object src={imgSrc} alt={imgAlt} className="img-fluid rounded-circle mr-3"
                           style={{height: 150 + 'px', width: 200 + 'px'}}/>
                </Media>
                <Media body>
                    <Media heading>
                        {heading}
                    </Media>
                    {extra}
                </Media>
            </Media>
        );
    }
}

export default MediaItem;