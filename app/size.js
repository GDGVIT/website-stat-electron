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
            console.log('Homie me says!');
            console.log(this.props.size+20);
            return(
              <div>
                  <Card content={this.props.size} postdata={this.props.postdata} title={this.props.title}/>
              </div>
            );
        }
}

Size.propTypes={
  size:React.PropTypes.number
};

export default Size;