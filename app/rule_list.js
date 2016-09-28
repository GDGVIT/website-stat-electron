/**
 * Created by rahul on 9/28/16.
 */
import React from 'react';
import Card from './card';

class Rulelist extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const rules=this.props.datarules.map((rule)=>{
           return <Card title={rule}/>
        });
        return(
            <div className="col s12">
                {rules}
            </div>
        );
    }
}



export default Rulelist;