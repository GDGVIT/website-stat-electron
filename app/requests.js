import React from 'react';

class Requests extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="card">
                <div className="card-content">
                    <div className="card-title">{this.props.requestno}</div>
                    No. of Requests
                </div>
            </div>
        );
    }
}

export default Requests;
