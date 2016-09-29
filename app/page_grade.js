/**
 * Created by rahul on 9/29/16.
 */
import React from 'react';

class PageGrade extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        if (this.props.speed==0){
            return(
                <div className="card col s12">
                    <div className="card-content">
                        <div className="card-title">
                            {this.props.speed}/100
                        </div>
                        Grade
                    </div>
                </div>
            );
        }
        else if(this.props.speed<50) {
            return (
                <div className="card red col s12">
                    <div className="card-content">
                        <div className="card-title">
                            {this.props.speed}/100
                        </div>
                        Grade is less than 50, this is generally bad.
                    </div>
                </div>
            );
        }
        else{
            return(
                <div className="card green col s12">
                    <div className="card-content">
                        <div className="card-title">
                            {this.props.speed}/100
                        </div>
                        Grade greater than 50 is always good.
                    </div>
                </div>
            );
        }
    }
}

export default PageGrade;