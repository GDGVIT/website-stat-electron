import React from 'react';
import ReactDOM from 'react-dom';

class Contributor extends React.Component{
	render(){
		return(
			<div className="card col s12">
				<div className="card-content">
					<div className="card-title">{this.props.name}</div>
					{this.props.desc}
				</div>
			</div>
		)
	}
}

export default Contributor;