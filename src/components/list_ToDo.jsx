import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemToDo from '../components/item_ToDo';
import { createItemToDo } from '../actions';

class ListToDo extends Component {
	render(){
		return(
			<ul className="list-group">
			  <ItemToDo />
			</ul>
		)
	}
}



function mapStateToProps(state) {
	return {
		todos: state.todos
	};
}

export default connect(mapStateToProps, { createItemToDo })(ListToDo);