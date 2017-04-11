import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editItemToDo } from '../actions';
import _ from 'lodash';

class EditItem extends Component {
	constructor(props){
		super(props)

		this.state = {
			itemEdit : props.itemEdit
		}

		this.inputChange = this.inputChange.bind(this)
		this.itemSave = this.itemSave.bind(this)
	}

	inputChange(event){
		let modifiedItem = _.cloneDeep(this.state.itemEdit)
		modifiedItem[event.target.id] = event.target.value
		this.setState({
			itemEdit : modifiedItem
		})

	}
	itemSave(event){
		event.preventDefault()
		this.props.editItemToDo(this.state.itemEdit)
		this.props.modifyModeEdit(true)

	}
	itemCancelEdit(event){
		event.preventDefault()
		this.props.modifyModeEdit(false)
	}

	render(){
		return(
			<form onSubmit={this.itemSave}>
			  <div className="form-group">
			    <label>Title</label>
			    <input id="title" type="title" value={this.state.itemEdit.title} className="form-control" onChange={this.inputChange}/>
			  </div>
			  <div className="form-group">
			    <label>
			    	Status
			    	<br/>
			    	Selected: {this.state.itemEdit.status}
			    </label>
					<select id="status" className="form-control" onChange={this.inputChange}>
					  <option value="done">Done</option>
					  <option value="in_pogress">In Progress</option>
					  <option value="ready_to_pull">Ready to Play</option>
					</select>
			  </div>
			  <div className="form-group">
			    <label>Description</label>
			    <textarea id="description" value={this.state.itemEdit.description} className="form-control" rows="3" onChange={this.inputChange}></textarea>
			  </div>
			  <div className="form-group">
			  	<button type="submit" className="btn btn-danger" onClick={this.itemCancelEdit} >Cancel</button>
			  	<button type="submit" className="btn btn-success" onClick={this.itemSave} >Save</button>
			  </div>
			</form>
		)
	}
}



function mapDispatchToProps(dispatch) {
	return bindActionCreators({ editItemToDo }, dispatch);
}

export default connect(null, mapDispatchToProps)(EditItem);
