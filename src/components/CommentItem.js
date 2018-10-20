import React, { Component } from 'react';
const CommentItem = (props) => {
	return (
		<li className="list-group-item"><i className="fas fa-angle-right pr-2"></i>
            <a href="#" className="text-muted comment-item"> {props.comment.title} </a>
		</li>
	); 
}
export default CommentItem;