import React from 'react';

class LoadTime extends React.Component{
    constructor(props){
        super(props);
        /*return{
            time:12
        };*/
    }
    /*getInitialState(){
        return{
            time:12
        };
    }*/
    render(){
        return(
            <div className="row">
                <div className="card col s12">
                    <div className="card-content">
                        <div className="card-title">
                            {this.props.time} ms
                        </div>
                        Load Time
                    </div>
                </div>
            </div>
        )
    }
}

export default LoadTime;