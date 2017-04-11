import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createItemToDo, editItemToDo, deleteItemToDo } from '../actions';
import EditItemToDo from './editItem_ToDo'

class ListToDo extends Component {
	constructor(props){
		super(props);
		this.state = {
			modeEdit : false,
			itemSelectToEdit : {}
		}
		this.renderItem = this.renderItem.bind(this);
	}

	renderItem(todo, index){
		const statusClass = todo.status.toLowerCase().replace(/_/g, "-");
		return(	
			<li key={index} className={`list-group-item ${statusClass}`}>
				{todo.title}
				<div className="pull-right">
					<a onClick={this.showEdit.bind(this,todo)} className="btn-edit">Edit</a>
					<a onClick={this.props.editItemToDo.bind(this,todo)} className="btn-done">Done</a>
					<a onClick={this.props.deleteItemToDo.bind(this,todo)} className="btn-delete">Delete</a>
				</div>
			</li>
		)
	}

	showEdit(todo){
		this.setState({
			modeEdit : true,
			itemSelectToEdit : todo,
		})
	}
	changeModeEdit(stateModeEdit){
		if (stateModeEdit) {
			this.setState({modeEdit : true})
		} else {
			this.setState({modeEdit : false})
		}
	}
	updateToDo(todos){
		const idToDo = this.props.todos.id
		for (var i = this.props.todos.length - 1; i >= 0; i--) {
			let currentToDo = this.props.todos[i];
			if (idToDo === currentToDo.id.toString()){
				this.setState({currentToDo})
			}
			
		}
	}
	componentWillMount(){
		this.updateToDo(this.props.todos)
	}

	componentWillReceiveProps(nextProps){
		this.updateToDo(nextProps.todos)
	}
	render(){
		if (!this.state.modeEdit) {
			return(
				<ul className="list-group">
					{this.props.todos.map(this.renderItem)}
				</ul>
			)
		} else {
			return(
				<EditItemToDo itemEdit={this.state.itemSelectToEdit}  modifyModeEdit={this.changeModeEdit}/>
			)
		}
	}
}



function mapStateToProps(state) {
	return {
		todos: state.todos
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ editItemToDo, deleteItemToDo, createItemToDo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListToDo);