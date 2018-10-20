import React, { Component } from 'react';

const MEDIATYPE_YOUTUBE = 'Youtube';

export default class MediaContent extends Component {

	constructor({ media, props }){
		super(props);
	}

	render() {
		
		if( this.media == MEDIATYPE_YOUTUBE) {
			return <div>YT player</div>
		} else {
           return <iframe width="100%" height="150" scrolling="no" frameBorder="no" allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/467387487&color=%23ff5500&inverse=false&auto_play=false&show_user=true"></iframe>
		}
		
	}
}