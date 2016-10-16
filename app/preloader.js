/**
 * Created by rahul on 10/16/16.
 */
import React from 'react';

class Preloader extends React.Component{
    constructor(props){
        super(props);
        /*this.state={
            visibility:'hidden'
        };*/
    }
    /*setvisibility(){
        if(this.props.loadervisible=='visible'){
            this.state.visibility='visible ';
        }else {
            this.state.visibility='hidden preloader-wrapper big active';
        }

        console.log(this.state.visibility);
    }*/
    render(){
            /*this.setvisibility();*/
            return (
                <div className="preloader-wrapper small active">
                    <div className="spinner-layer spinner-green-only">
                        <div className="circle-clipper left">
                            <div className="circle"></div>
                        </div>
                        <div className="gap-patch">
                            <div className="circle"></div>
                        </div>
                        <div className="circle-clipper right">
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
            );
        }
    }

export default Preloader;