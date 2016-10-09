import React from 'react';
class Size extends React.Component{
    constructor(){
        super();
        this.state={
            mbsize:0
        }
    }
    render(){
        this.state.mbsize=this.props.size/2;
        return(
          <div>{this.state.mbsize}</div>
        );
    }
}

export default Size;