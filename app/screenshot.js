import React from 'react';
import ReactDOM from 'react-dom';


class Screenshot extends React.Component{
	render(){
		return(
			<div className="row">
				<div className="center">
					The Screenshot should come up here! {this.props.base64}
				</div>
			</div>
		)
	}
}

export default Screenshot;