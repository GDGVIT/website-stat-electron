import React from 'react';
import ReactDOM from 'react-dom';

// Search component created as a class

/*var React=require('react');
ReactDOM=require('react-dom');*/

class UrlBar extends React.Component {

    // render method is most important
    // render method returns JSX template
    render() {
        return (
          <div className="row">
            <div className="col m8 push-m2">
                <div className="card col s12">                
                    <div className="card-content">
                        <input className="col s12" placeholder="http://"/>
                    </div>
                </div>
            </div>
          </div>
        );
    }
}

export default UrlBar;