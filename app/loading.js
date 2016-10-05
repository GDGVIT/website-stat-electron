/**
 * Created by rahul on 9/30/16.
 */
import React from 'react';

class Loading extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        if(this.props.loadstatus=='loading'){
            return(
              <div>Loading...</div>
            );
        }
        else if(this.props.loadstatus=='loaded'){
            return(
              <div></div>
            );
        }
    }
}