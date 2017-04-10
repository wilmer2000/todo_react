import React, { Component } from 'react';
import WrapperToDo from '../components/wrapper_ToDo';

class ContentToDo extends Component {
	render(){
		return(
			<div className="flex_content_center">
				<div className="flex_item"> 
					<WrapperToDo />
				</div> 
			</div> 
		)
	}
}

export default ContentToDo