/**
 * Created by rahul on 9/28/16.
 */
import React from 'react';

class Card extends React.Component{
    constructor(props){
        super(props);
        this.state={
            style:'card col s12'
        }
    }
    render(){
        this.state.style=this.props.color+' card col s12';
        return(
          <div className={this.state.style}>
              <div className="card-content">
                  <div className="card-title">{this.props.content}{this.props.postdata}</div>
                  {this.props.title}
              </div>
          </div>
        );
    }
}

export default Card;