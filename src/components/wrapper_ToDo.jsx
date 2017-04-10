import React, { Component } from 'react';
import ListToDo from '../components/list_ToDo';
import AddToDo from '../components/add_ToDo';

class ContentToDo extends Component {
	render(){
		return(
			<div id="wrapper_todo" className="thumbnail">
				<h1>ToDo</h1>
				<AddToDo />
				<ListToDo />
			</div> 
		)
	}
}

export default ContentToDo