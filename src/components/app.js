import React, { Component } from 'react';
import BloggItemList from './BloggItemList';
export default class App extends Component {
	render() {
		return (
			<div>
				<a className="sticky-container" href="mailto:oscar@raccoon.se"><span></span></a>
				<BloggItemList></BloggItemList>
			</div>
		);
	}
}