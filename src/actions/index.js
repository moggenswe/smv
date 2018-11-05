import * as actionTypes from './actionTypes';
import firebase from 'firebase/app';
import 'firebase/database'; // If using Firebase database
import firebaseConnect from '../config/firebase'

const fb = firebase.initializeApp(firebaseConnect);


export const fetchPosts = () => {
	return dispatch => {
		fb.database().ref('BloggItems').on('value',function (snapshot) {
			dispatch({
				type: actionTypes.FETCH_POSTS,
				payload: { data: snapshot.val() }
			});
		});
	};
};

export const addCommentToPost = (id,comment) => {
	return dispatch => {
		fb.database().ref(`BloggItems/${id}/comments`).push(comment).then(function (snapshot) {
			
		}).catch(error => {
			dispatch(
				{
					type: actionTypes.ERROR,
					payload: error
				});
		});
	};
};