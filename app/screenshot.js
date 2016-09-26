import React from 'react';
import ReactDOM from 'react-dom';


class Screenshot extends React.Component{
	render(){
		return(
			<div className="center">
				The Screenshot should come up here! {this.props.url}
			</div>
		)
	}
}

export default Screenshot;