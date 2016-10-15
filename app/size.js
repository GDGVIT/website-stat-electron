import React from 'react';
import Card from './card';
class Size extends React.Component{
    constructor(){
        super();
        this.state={
            kbsize:0,
            postdata:"KB"
        }
    }
    render(){
        if(this.props.size>1000) {
            this.state.kbsize = (this.props.size / 1024/1024);
            console.log('Alham! '+this.props.size+' '+this.state.kbsize);
            this.state.postdata = "KB";
            return(
                <Card title={this.props.title} content={this.state.kbsize} postdata={this.state.postdata}/>
            );
        }
        else{
            this.state.kbzise = this.props.size / 1024;
            console.log('boom boom '+this.props.size+' '+this.state.kbsize);
            this.state.postdata="MB";
            console.log(this.state.kbsize);
            return(
                <Card title={this.props.title} content={this.state.kbsize} postdata={this.state.postdata}/>
            );
        }
    }
}

export default Size;