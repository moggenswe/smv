import React from 'react';
const CommentItem = (props) => {
	return (
		<li className="list-group-item"><i className="fas fa-angle-right pr-2"></i>
		{props.comment.title}
		</li>
	); 
}
export default CommentItem;