import React from 'react';

const MEDIATYPE_YOUTUBE = 'Youtube';
const MediaContent = (props) => {
	const { mediaSrc, media } = props.data;

	const content = media !== MEDIATYPE_YOUTUBE ?  
	<iframe title="Media" width="100%" height="150" scrolling="no" frameBorder="no" allow="autoplay"
	src={mediaSrc}></iframe> :  
	<iframe width="100%" title="Meida" height="315" src="https://www.youtube.com/embed/yHejDkC4LMA" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>;

	return content;
}
export default MediaContent;