import React from 'react';
import ReactDOM from 'react-dom';
import UrlBar from './url_bar.js';
import Screenshot from './screenshot.js';
import Contributor from './contributor.js';
import LoadTime from './loadtime';
// Search component created as a class
class Main extends React.Component {

    // render method is most important
    // render method returns JSX template
    render() {
        return (
            <div className="row">
              <UrlBar className="col s12"/>
              <Screenshot url="http://google.com" className="col s6"/>
                <div className="col m3">
                    <LoadTime time="32.54"/>
                </div>
                <div className="col m3">
                    <LoadTime time="33.51"/>
                </div>
            </div>
        );
    }
}

// Render to ID content in the DOM
ReactDOM.render(<Main/>,
    document.getElementById('content')
);