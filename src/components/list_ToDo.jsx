import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createItemToDo, editItemToDo, deleteItemToDo } from '../actions';
import EditItemToDo from './editItem_ToDo';
import { STATUS_DONE } from '../constants';
import AddToDo from '../components/add_ToDo';
import Modal from '../components/modal';
import _ from 'lodash';

class ListToDo extends Component {
	constructor(props){
		super(props);
		this.state = {
			modeEdit : false,
			itemSelectToEdit : {},
			stateModal : false
		}
		this.renderItem = this.renderItem.bind(this);
		this.changeModeEdit = this.changeModeEdit.bind(this);
		this.itemDone = this.itemDone.bind(this);
		this.notifyResponse = this.notifyResponse.bind(this);
	}

	renderItem(todo, index){
		const statusClass = todo.status.toLowerCase().replace(/_/g, "-");
		return(	
			<li key={index} className={`list-group-item ${statusClass}`}>
				<p className="cont-title">{todo.title}</p>
				<div className="cont-btn">
					<a onClick={this.showEdit.bind(this,todo)} className="btn-edit"></a>
					<a onClick={this.itemDone.bind(this,todo)} className="btn-done"></a>
					<a onClick={this.showModal.bind(this)} className="btn-delete"></a>
				</div>
			</li>
		)
	}
	notifyResponse(response){
		console.log(response)
		// let copy = _.cloneDeep(this.state.stateModal)
		// copy = response
		// this.setState({
		// 	stateModal : copy
		// })
	}
	showModal(){
		this.setState({
			stateModal : true
		})
	}
	renderModal(icon,text,type){
		if (this.state.stateModal) {
			return(
				<Modal modalIcon={icon} modalText={text} modalType={type} modalResponse={this.notifyResponse} />
			)
		}
	}

	itemDone(item){
		let copy = _.cloneDeep(item)
		copy.status = STATUS_DONE
		this.props.editItemToDo(copy)
	}
	showEdit(todo){
		this.setState({
			modeEdit : true,
			itemSelectToEdit : todo,
		})
	}
	changeModeEdit(stateModeEdit){
		this.setState({modeEdit : false})	
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
				<div>
					{this.renderModal("icon-danger","Do you want delete this ToDo item?","yes-no")}
					<AddToDo />
					<ul className="list-group">
						{this.props.todos.map(this.renderItem)}
					</ul>
				</div>
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