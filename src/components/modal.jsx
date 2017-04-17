import React, { Component } from 'react';

class Modal extends Component {
	modalResponse(response){
		this.props.modalResponse(response)
	}
	render(){
		return (
			<div className="cont-modal">
				<div className="item-modal">
					<div className={`icon ${this.props.modalIcon}`}>
						<div className='symbol'>
						</div>
					</div>
					<div className="text">
						{this.props.modalText}
					</div>	
					<div className={`buttons ${this.props.modalType}`}>
						<a className="btn btn-yes" onClick={this.modalResponse.bind(this,true)}>Yes</a>
						<a className="btn btn-no" onClick={this.modalResponse.bind(this,false)}>No</a>
						<a className="btn btn-on" onClick={this.modalResponse.bind(this,true)}>Ok</a>
					</div>				
				</div>
			</div>
		)
	}
}

export default Modal