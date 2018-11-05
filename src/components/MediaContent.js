import React from 'react';

const MEDIATYPE_YOUTUBE = 'Youtube';
const MEDIATYPE_SOUNDCLOUD = 'Sound';
const MEDIATYPE_IMAGE = 'Image';
const MediaContent = (props) => {
	const { mediaSrc, media } = props.data;

	switch (media) {
		case MEDIATYPE_YOUTUBE:
		 return <iframe title="Media" width="100%" height="315" scrolling="no" frameBorder="no" allow="autoplay" src={mediaSrc}></iframe>
		case MEDIATYPE_SOUNDCLOUD:
			return <div className="video-container"><iframe width="100%" title="Meida" height="150" src={mediaSrc} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe></div>;
		case MEDIATYPE_IMAGE:
			return <img src={mediaSrc} alt="media" style={{ width:"100%", height:"315px"}} />;
		default:
			return null;
	}
}
export default MediaContent;