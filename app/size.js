import React from 'react';
import Card from './card';
class Size extends React.Component{
    constructor(props){
        super(props);
        this.state={
            size:0,
            kbsize:0,
            postdata:"KB"
        }
    }
    render(){
            return(
              <div>
                  <Card content={convertBytes(this.props.size)} postdata={this.props.postdata} title={this.props.title}/>
              </div>
            );
        }
}

Size.propTypes={
  size:React.PropTypes.number
};

/**
 * Converts bytes to KB, MB, GB, etc...
 * @param {number} bytes - The amount of bytes to convert
 */
function convertBytes(bytes) {
    if (bytes === 0 ) {
        return "0 B";
    }

    const scale = 1024; // Or 1000?
    const precision = 1; // Number of decimal places
    const sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    var labelID = Math.floor(Math.log(bytes) / Math.log(scale));

    if (labelID > sizes.length - 1) {
        console.error("Size too big!");
        return "999.9+ YB";
    }

    return parseFloat(bytes / Math.pow(scale, labelID)).toFixed(precision) + " " + sizes[labelID];
}

export default Size;