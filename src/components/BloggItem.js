import React from 'react';
import MediaContent from './MediaContent';
import CommentList from './CommentList';

const BloggItem = (props) => {
    return (
		<div className="card my-2">
			<div className="card-header">
                {props.data.media === "Youtube" ?
                    [<i key={"q1"} className="fab fa-youtube"></i>, " Youtube klipp"]
                    : [<i key={"q2"} className="fab fa-soundcloud"></i>, " Poddavsnitt"]}
            </div>
            <div className="card-body">
                <div className="blogg-item-media">
                    <MediaContent {...props} />
                </div>
                <div className="blog-item-box">
                    <div style={{flex:"40%"}}>
                        <h5 className="heading-tertiary">{props.data.header}</h5>
                        <p className="blog-item-paragraph">{props.data.body}</p>
                    </div>
                    <div style={{flex:"45%"}}>
                       <CommentList comments={props.data.comments} id={props.data.id}  />
                    </div>
                </div>
            </div>
		</div>
	);
}
export default BloggItem;