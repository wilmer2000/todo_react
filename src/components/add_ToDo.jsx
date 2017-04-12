import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { STATUS_TO_PULL } from '../constants';

import { createItemToDo } from '../actions';

const EMPTY_TODO = {
				id : "",
				title : "",
				description : "",
				status : STATUS_TO_PULL
			}

class AddToDo extends Component {
	constructor(props){
		super(props)
		this.state = {
			todo : EMPTY_TODO
		}
		this.itemSave = this.itemSave.bind(this)
		this.inputChange = this.inputChange.bind(this)
	}


	inputChange(event){
		let modifiedItem = _.cloneDeep(this.state.todo)
		console.log(modifiedItem)
		// let last = _.last(modifiedItem)
		// modifiedItem[last] = event.target.ỉd
		modifiedItem[event.target.id] = event.target.value
		this.setState({
			todo : modifiedItem
		})

	}
	itemSave(event){
		event.preventDefault();
		this.props.createItemToDo(this.state.todo)
		this.reset()
	}

	reset(){
		this.setState({
			todo: EMPTY_TODO
		})
	}

	render(){
		const btnClass = this.state.todo.title === "" ? "disabled" : ""
		return(
			<form className="form-inline" onSubmit={this.itemSave}> 
			  <div className="form-group cont-btn-search">
			    <label>Title</label>
			    <input id="title" value={this.state.todo.title} type="text" className="form-control" onChange={this.inputChange}/>
		  		<button type="submit" disabled={ btnClass }  className="btn btn-success" >+</button>
			  </div>
			</form>
		)
	}
}


function mapDispatchToProps(dispatch) {
	return bindActionCreators({ createItemToDo }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddToDo);