import axios from 'axios';
import * as actionTypes from './actionTypes';

export function addPost(data) {
    
	return dispatch => {

		const formData = new FormData();
		for( let key in data  ) {
			formData.append( key, data[ key ] );
		}

		axios.post('http://smv.local/test.php',formData).then( response => {
			dispatch({
				type: actionTypes.ADD_POSTS,
        		payload: response.data
    		});
		}).catch(error => {
			dispatch( 
			{
				type: actionTypes.ERROR,
        		payload: error
    		});
		});
	}
}

export const updatePost = (data,id) => {

	return dispatch => {

		const formData = new FormData();
		for( let key in data  ) {
			formData.append( key, data[ key ] );
		}

		formData.append('update',true);

		axios.post('http://smv.local/test.php',formData).then( response => {
			dispatch({
				type: actionTypes.UPDATE_POST,
        		payload: {formData,id}
    		});
		}).catch(error => {
			dispatch( 
			{
				type: actionTypes.ERROR,
        		payload: error
    		});
		});
	}

}

export function deletePost(id) {
	return dispatch => {
		const formData = new FormData();
		formData.append('delete',true);
		formData.append('id',id);
		axios.post('http://smv.local/test.php',formData).then( response => {
				console.log('delete');
				dispatch({
					type: actionTypes.DELETE_POST,
	        		payload: response
	    		});
			}).catch(error => {
				dispatch( 
				{
					type: actionTypes.ERROR,
	        		payload: error
	    		});
			});
	}
}