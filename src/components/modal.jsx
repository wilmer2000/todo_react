import React, { Component } from 'react';

class Modal extends Component {

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
						<a className="btn btn-yes" onClick={this.props.modalResponse(true)}>Yes</a>
						<a className="btn btn-no" onClick={this.props.modalResponse(false)}>No</a>
						<a className="btn btn-on" onClick={this.props.modalResponse(true)}>Ok</a>
					</div>				
				</div>
			</div>
		)
	}
}

export default Modal