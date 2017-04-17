import React, { Component} from 'react'
import _ from 'lodash'


class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = {
			textToSearch : ""
		}

		this.inputChange = this.inputChange.bind(this)
	}



	inputChange(event){
		let txt = _.cloneDeep(this.state.textToSearch)
		txt = event.target.value
		this.setState({
			textToSearch :  txt
		})

		this.props.onFilterChange(txt)

	}

	render(){
		return(
			<div className="searchBar">
				<div className="form-inline" >
					<div className="form-group">
						<input id="textToSearch" type="text" className="form-control" placeholder="Buscar" onChange={this.inputChange} />
					</div>
				</div>
			</div>
		)
	}
}



export default SearchBar;