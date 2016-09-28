/**
 * Created by rahul on 9/28/16.
 */
import React from 'react';

class Card extends React.Component{
    render(){
        return(
          <div className="card col s12">
              <div className="card-content">
                  <div className="card-title">{this.props.content}{this.props.postdata}</div>
                  {this.props.title}
              </div>
          </div>
        );
    }
}

export default Card;