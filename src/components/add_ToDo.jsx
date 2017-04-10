import React, { Component } from 'react';

class AddToDo extends Component {
	render(){
		return(
			<form className="form-inline"> 
			  <div className="form-group">
			    <label>Title</label>
			    <input id="title" type="text" className="form-control" />
			  </div>
		  		<button type="submit" className="btn btn-default">Submit</button>
			</form>
		)
	}
}

export default AddToDo