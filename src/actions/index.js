import axios from 'axios';
import * as actionTypes from './actionTypes';

import firebase from 'firebase/app';
import 'firebase/database'; // If using Firebase database



const fb = firebase.initializeApp({
    apiKey: "AIzaSyAcSC1UYtpHcoNYNe2_S4uxuvyN8D2JiKg",
    authDomain: "smv-site-d762a.firebaseapp.com",
    databaseURL: "https://smv-site-d762a.firebaseio.com",
    projectId: "smv-site-d762a",
    storageBucket: "smv-site-d762a.appspot.com",
    messagingSenderId: "148285888146"
});


export const fetchPosts = () => {
    return dispatch => {
	   
		fb.database().ref('BloggItems').once('value').then(function(snapshot) {
			dispatch({
				type: actionTypes.FETCH_POSTS,
        		payload: {data:snapshot.val()}
    		});
		}).catch(error => {
			dispatch( 
			{
				type: actionTypes.ERROR,
        		payload: error
    		});
		});
		
		
		/*axios.get('http://localhost:8080/src/data/sampledata.json').then( response => {
			dispatch({
				type: actionTypes.FETCH_POSTS,
        		payload: response
    		});
		}).catch(error => {
			dispatch( 
			{
				type: actionTypes.ERROR,
        		payload: error
    		});
		});*/
    };
};
/*export const fetchPosts = () => {
	return (dispatch) => {
		console.log('dispatch fetchPosts action');
		dispatch({
				type: FETCH_POSTS,
        		payload: {test:"test"}
    		});
		axios.get('http://localhost:8080/src/data/sampledata.json').then( response => {
			console.log('fetch');
			dispatch({
				type: FETCH_POSTS,
        		payload: response.data
    		});
		}).catch(error => {
			console.log('errirh');
			dispatch( 
			{
				type: ERROR,
        		payload: error
    		});
		});
	}
}*/