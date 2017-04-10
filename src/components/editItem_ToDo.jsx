import React, { Component } from 'react';

class Edit_ItemToDo extends Component {
	render(){
		return(
			<form>
			  <div className="form-group">
			    <label>Title</label>
			    <input id="title" type="title" className="form-control"/>
			  </div>
			  <div className="form-group">
			    <label>Status</label>
					<select id="status" className="form-control">
					  <option value="done">Done</option>
					  <option value="in_pogress">In Progress</option>
					  <option value="ready_to_pull">Ready to Play</option>
					</select>
			  </div>
			  <div className="form-group">
			    <label>Status</label>
			    <textarea id="description" className="form-control" rows="3"></textarea>
			  </div>
			  <button type="submit" className="btn btn-default">Submit</button>
			</form>
		)
	}
}

export default Edit_ItemToDo