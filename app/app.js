import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './main_app.js';
import Screenshot from './screenshot.js';
import Contributor from './contributor.js';
import LoadTime from './loadtime';
import Requests from './requests';
import PageSize from './page_size';

class Main extends React.Component {
    render() {
        return (
            <div className="row">
              <MainApp className="col s12"/>
            </div>
        );
    }
}

// Render to ID content in the DOM
ReactDOM.render(<Main/>,
    document.getElementById('content')
);

console.log(Requests);