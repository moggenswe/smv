import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {addPost, deletePost, updatePost} from "../../actions/media";
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';

class AddBloggItem extends Component {



    state = {
        title: '',
        description: '',
        embed: '',
        embedType: 1
    }

    saveItem = (event) => {
        console.log("save item");
        event.preventDefault();
        this.props.onSaveItem( this.state );
        this.props.onDeleteItem( 2123 );
    }

    updateItem = (event) => {
        this.props.onUpdateItem(this.state, 1);
    }

    
	render() {
		return (
            <div className="container"><h1>Input form</h1>
                <form onSubmit={this.saveItem} >
                    <div className="form-group">
                        <label>Titel</label>
                        <input className="form-control" onChange={ event => this.setState({title:event.target.value}) } type="text" value={this.state.title} />
                    </div>
                    <div className="form-group">
                        <label>Beskrivning</label>
                        <textarea className="form-control" onChange={ event => this.setState({description:event.target.value}) } value={this.state.description}>{this.state.description}</textarea>
                    </div>
                    <div className="form-group">
                        <label>Embed</label>
                        <textarea className="form-control" onChange={ event => this.setState({embed:event.target.value}) } value={this.state.embed}>{this.state.embed}</textarea>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" id="youtube-media" checked={this.state.embedType == 1} 
                        value={1}
                        onChange={ (event) => {this.setState({embedType: event.target.value});} } />
                        <label className="form-check-label" htmlFor="youtube-media">Youtube</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input 
                                className="form-check-input" 
                                type="radio" 
                                id="soundcloud-media" 
                                checked={this.state.embedType == 2} 
                                value={2}
                                onChange={ (event) => this.setState({embedType: event.target.value})  } 
                        />
                        <label className="form-check-label" htmlFor="soundcloud-media">SoundCloud</label>
                    </div>
                   
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Save</button>
                        <Button variant="contained" color="primary">
                            Hello World
                        </Button>
                    </div>
                </form>
                <br/>
                <div style={{width:"200px", height:"200px", backgroundColor:"red"}} onClick={(evt) => this.updateItem(evt)  }>Jag är en klickbar div WOOOOOO!</div>
            </div>
		);
	}

}

const mapDispatchToProps = dispatch => {
    return {
        onSaveItem: (formData) => dispatch( addPost(formData) ),
        onDeleteItem: (id) => dispatch( deletePost(id) ),
        onUpdateItem: (formData, id) => dispatch ( updatePost(formData,id) )
    }
}




export default connect(null,mapDispatchToProps)(AddBloggItem);