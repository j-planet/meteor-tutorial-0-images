import React, { Component } from 'react';
import ImageScore from './image_score.jsx';


class ImageDetail extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('ImageDetail willMount.');
    }

    render() {
        return (
            <li className="media list-group-item">

                <div className="media-left">
                    <img src={this.props.image.link} />
                </div>

                <div className="media-body">

                    <h4 className="media-heading">
                        {this.props.image.title}
                    </h4>

                    <p> { this.props.image.description } </p>

                    <ImageScore ups = {this.props.image.ups} downs = {this.props.image.downs} />

                </div>
            </li>
        );
    }
}

export default ImageDetail;