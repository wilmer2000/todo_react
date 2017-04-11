import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { STATUS_TO_PULL } from '../constants';

import { createItemToDo } from '../actions';


class AddToDo extends Component {
	constructor(props){
		super(props)
		this.state = {
			todo : {
				id : "",
				title : "",
				description : "",
				status : STATUS_TO_PULL
			}
		}

		this.itemSave = this.itemSave.bind(this)
		this.inputChange = this.inputChange.bind(this)
	}


	inputChange(event){
		let modifiedItem = _.cloneDeep(this.state.todo)
		let last = _.last(modifiedItem)
		modifiedItem[last] = event.target.ỉd
		modifiedItem[event.target.title] = event.target.title
		this.setState({
			todo : modifiedItem
		})

	}
	itemSave(event){
		event.preventDefault();
		this.props.createItemToDo(this.state.todo)
	}
	validateItem(item){
	}

	render(){
		return(
			<form className="form-inline" onSubmit={this.itemSave}> 
			  <div className="form-group">
			    <label>Title</label>
			    <input id="title" type="text" className="form-control" onChange={this.inputChange}/>
			  </div>
		  		<button type="submit" className="btn btn-default" >Submit</button>
			</form>
		)
	}
}


function mapDispatchToProps(dispatch) {
	return bindActionCreators({ createItemToDo }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddToDo);