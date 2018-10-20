import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import AddBloggItem from './components/admin/add_item';
import BloggItemList from './components/BloggItemList';

export default (
	<Route path="/" component={App} >
		<IndexRoute component={BloggItemList} /> 
		<Route path="/admin/add" component={AddBloggItem} /> 
	</Route>

)