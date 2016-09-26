import React from 'react';

// Search component created as a class

/*var React=require('react');
ReactDOM=require('react-dom');*/

class UrlBar extends React.Component {
    constructor(){
        super();
        this.state={data:[]};
        this.processForm=this.processForm.bind(this);
    }
    processForm(e){
        e.preventDefault();
        $.ajax({
            url:'http://api.icndb.com/jokes/random',
            datatype:'json',
            cache:false,
            success: (data) => {
                this.setState({data: data});
                console.log(data);
            },
            error: (xhr, status, err) => {
                console.error(status, err.toString());
            }
        });
    }
    render() {
        return (
            <form className="row">
                <div className="col m8 push-m2">
                    <div className="card col s12">
                        <div className="card-content">
                            <input className="col s12" placeholder="http://google.com"/>
                            <input type="submit" className="btn" value="Process" onClick={this.processForm}/>
                            <Joke jokearray={this.state.data}/>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

class Joke extends React.Component{
    constructor(){
        super();
        this.setState({
            jokearray:[]
        })
    }
    render(){
        var joke=this.props.jokearray;
        return(
            <div>
                {jokearray.value.joke}
            </div>
        )
    }
}

export default UrlBar;