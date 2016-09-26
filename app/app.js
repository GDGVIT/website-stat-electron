import React from 'react';
import ReactDOM from 'react-dom';
import UrlBar from './url_bar.js';
import Screenshot from './screenshot.js';
import Contributor from './contributor.js';
// Search component created as a class

/*var React=require('react');
ReactDOM=require('react-dom');*/

class Main extends React.Component {

    // render method is most important
    // render method returns JSX template
    render() {
        return (
            <div>
              <UrlBar/>
              <Screenshot url="http://google.com"/>
            </div>
        );
    }
}

// Render to ID content in the DOM
ReactDOM.render( <Main/> ,
    document.getElementById('content')
);