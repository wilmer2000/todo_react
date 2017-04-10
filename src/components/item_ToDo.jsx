import React, { Component } from 'react';

class ItemToDo extends Component {
	render(){
		return(

		  <li className="list-group-item">
		  	Cras justo odio
		  	<a className="btn_edit">Edit</a>
		  	<a className="btn_delete">Delete</a>
		  	<a className="btn_done">Done</a>
	  	</li>
		)
	}
}

export default ItemToDo