import React from 'react';

class PageDetails extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
          <div className="card">
              <div className="card-content">
                  <div className="card-title">
                      {this.props.url}
                  </div>
              </div>
          </div>
        );
    }
}

export default PageDetails;