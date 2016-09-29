/**
 * Created by rahul on 9/28/16.
 */
import React from 'react';
import Card from './card';

class Rulelist extends React.Component{
    constructor(props){
        super(props);
        console.log('Hi from RuleList!');

    }
    componentDidMount(){
        console.log(this.props.rules);
        console.log(this.props.rules.AvoidLandingPageRedirects);
    }
    render(){
        return(
            <div className="col s12">
                <div className="col s12"><Card title={this.props.rules.AvoidLandingPageRedirects.localizedRuleName} content={this.props.rules.AvoidLandingPageRedirects.ruleImpact}/></div>
                <div className="col s12"><Card title={this.props.rules.EnableGzipCompression.localizedRuleName} content={this.props.rules.EnableGzipCompression.ruleImpact}/></div>
                <div className="col s12"><Card title={this.props.rules.LeverageBrowserCaching.localizedRuleName} content={this.props.rules.LeverageBrowserCaching.ruleImpact}/></div>
                <div className="col s12"><Card title={this.props.rules.MainResourceServerResponseTime.localizedRuleName} content={this.props.rules.MainResourceServerResponseTime.ruleImpact}/></div>
                <div className="col s12"><Card title={this.props.rules.MinifyCss.localizedRuleName} content={this.props.rules.MinifyCss.ruleImpact}/></div>
                <div className="col s12"><Card title={this.props.rules.MinifyHTML.localizedRuleName} content={this.props.rules.MinifyHTML.ruleImpact}/></div>
                <div className="col s12"><Card title={this.props.rules.MinifyJavaScript.localizedRuleName} content={this.props.rules.MinifyJavaScript.ruleImpact}/></div>
                <div className="col s12"><Card title={this.props.rules.MinimizeRenderBlockingResources.localizedRuleName} content={this.props.rules.MinimizeRenderBlockingResources.ruleImpact}/></div>
                <div className="col s12"><Card title={this.props.rules.OptimizeImages.localizedRuleName} content={this.props.rules.OptimizeImages.ruleImpact}/></div>
                <div className="col s12"><Card title={this.props.rules.PrioritizeVisibleContent.localizedRuleName} content={this.props.rules.PrioritizeVisibleContent.ruleImpact}/></div>
            </div>
        );
    }
}



export default Rulelist;