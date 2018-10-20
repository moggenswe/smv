import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';

import BloggItemList from './components/BloggItemList';

export default (
	<Route path="/" component={App} >
		<IndexRoute component={BloggItemList} /> 
	</Route>

)