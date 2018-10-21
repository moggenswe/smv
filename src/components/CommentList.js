import React, { Component } from 'react';
import CommentItem from './CommentItem';
import {connect} from 'react-redux';
import {addCommentToPost} from '../actions/index';

class CommentList extends Component {


	constructor(props) {

		super(props);
		this.state = {postId:(props.id -1), comment: '', comments: props.comments};
		this.handleChange = this.handleChange.bind(this);
		this.saveComment = this.saveComment.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	 handleChange(event) {
    	this.setState({comment: event.target.value});
  	}

	saveComment() {
		this.props.addComment(this.state.postId,{ title: this.state.comment });	
		this.setState({comment:''});
	}

	handleSubmit(event) {
		this.saveComment()
		event.preventDefault();
	}

	render() {
		const {comments} = this.props;
		if(!comments) {
			return <div>Loading..</div>
		}
		return (
			<div className="commet-box">
				 <h5 className="heading-tertiary">Kommentarer</h5>
				<ul className="list-group list-group-flush small">
					{ Object.keys(this.props.comments).map(
						(key, index) =>  <CommentItem key={index} comment={comments[key]} />
					)}	
				</ul>
                <div  className="row mt-2">
                    <div className="comment-form">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label className="heading-tertiary">Skriv en kommentar</label>
                                <textarea className="form-control comment-text-area" type="text" value={this.state.comment} onChange={this.handleChange}>{this.state.comment}</textarea>
                            </div>
                            <div className="form-group">
                                <input className="btn btn-primary" type="button" value="Spara" onClick={this.saveComment}/>
                            </div>
                        </form>
                    </div>
                </div>

				
			</div>
		);
	} 
}

const mapDispatchToProps = dispatch => {
    return {
        addComment: (id,comment) => dispatch( addCommentToPost(id,comment) )
    }
}

export default connect(null, mapDispatchToProps )(CommentList);
