import React, { Component } from 'react';
import ImageDetail from './image_detail.jsx';


class ImageList extends Component {



    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('ImageList willMount.');
    }

    render() {

        const RenderedImages = this.props.images
            .filter(image => !(image.is_album))
            .map
            (
                image => <ImageDetail key={image.title} image={image} />
            );

        return (
            <ul className="media-list list-group">
                { RenderedImages }
            </ul>
        );
    }
}

export default ImageList;