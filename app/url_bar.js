import React from 'react';

// Search component created as a class

/*var React=require('react');
ReactDOM=require('react-dom');*/

class UrlBar extends React.Component {
    constructor(){
        super();
        this.state={
            data:[],
            joke:''
        };
        this.processForm=this.processForm.bind(this);
    }
    processForm(e){
        e.preventDefault();
        $.ajax({
            url:'./public/mock/joke.json',
            datatype:'json',
            cache:false,
            success: (data) => {
                this.setState({
                    data:data,
                    joke:data.value.joke.toString()
                });
                console.log(joke);
            },
            error: (xhr, status, err) => {
                console.error(status, err.toString());
            }
        });
    }
    render() {
        var jokedata=this.state.data;
        return (
            <div className="row col s12">
            <form>
                <div className="col m8 push-m2">
                    <div className="card col s12">
                        <div className="card-content row">
                            <input className="col m12" placeholder="http://"/>
                            <input type="submit" className="btn col m4 push-m4" value="Process" onClick={this.processForm}/>
                        </div>
                    </div>

                </div>

            </form>
            <div className="card col s8 push-s2"> <div className="card-content"><div className="card-title">{jokedata}</div></div></div>
            </div>
        );
    }
}

UrlBar.propTypes={
    data:React.PropTypes.array,
    joke:React.PropTypes.string
}

/*class Joke extends React.Component{
    constructor(){
        super();
        this.state={jokearray:[]};
    }
    render(){
        var joke=this.props.jokearray;
        return(
            <div><div className="card"> <div className="card-content"><div className="card-title">{jokedata}</div></div></div>
                {jokearray.value.joke}
            </div>
        )
    }
}*/

export default UrlBar;