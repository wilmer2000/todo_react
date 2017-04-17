import React, { Component } from 'react';
import ListToDo from '../components/list_ToDo';
import SearchBar from '../components/search_Bar';

class ContentToDo extends Component {
	constructor(props) {
		super(props)
		this.state = {
			filterList : ""
		}
		this.updateFilter = this.updateFilter.bind(this)
	}

	updateFilter(text){
		this.setState({
			filterList : text
		})
	}

	render(){
		return(
			<div id="wrapper_todo" className="thumbnail">
				<h1>ToDo</h1>
				<SearchBar onFilterChange={this.updateFilter} />
				<ListToDo filterList={this.state.filterList}/>
			</div> 
		)
	}
}

export default ContentToDo