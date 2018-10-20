import React, { Component } from 'react';
import {Link} from 'react-router';;
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPosts} from '../actions/index';
import BloggItem from './BloggItem';
import Header from './Header';
import SectionAbout from './SectionAbout';
import SectionTitle from './SectionTitle';
import SectionMembers from './SectionMembers';


class BloggItemList extends Component {

	componentWillMount() {
		if(!this.props.posts) {
			this.props.fetch();	
		}
		
	}

	render() {
		
		if( !this.props.posts ) {
			return <div>Loading...</div>;	
		} 

		return (
		<span>
			<Header></Header>
			<SectionAbout></SectionAbout>
			<SectionTitle title="Programets medlemar"></SectionTitle>
			<SectionMembers></SectionMembers>
			<div className="container">
                {this.props.posts.map(
                    (item) => <BloggItem key={item.id} data={item} />
                )}
			</div>
		</span>
		); 
		
	}

}

const mapDispatchToProps = dispatch => {
    return {
        fetch: () => dispatch( fetchPosts() )
    }
}

function mapStateToProps(state) {

	return { posts: state.posts.all };
}

export default connect(mapStateToProps, mapDispatchToProps )(BloggItemList);