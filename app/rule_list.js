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
                <br/><br/><br/>
                <h3 className="center">Performance Insights</h3>
                <h6 className="center">Take care of cards on red. Further away from zero, Bigger negative impact they have.</h6>
                <div className="col s4"><Card title={this.props.rules.AvoidLandingPageRedirects.localizedRuleName} content={this.props.rules.AvoidLandingPageRedirects.ruleImpact} color={this.props.rules.AvoidLandingPageRedirects.ruleImpact>0 ? 'red' : 'green'}/></div>
                <div className="col s4"><Card title={this.props.rules.EnableGzipCompression.localizedRuleName} content={this.props.rules.EnableGzipCompression.ruleImpact} color={this.props.rules.EnableGzipCompression.ruleImpact>0 ? 'red' : 'green'}/></div>
                <div className="col s4"><Card title={this.props.rules.LeverageBrowserCaching.localizedRuleName} content={this.props.rules.LeverageBrowserCaching.ruleImpact} color={this.props.rules.LeverageBrowserCaching.ruleImpact>0 ? 'red' : 'green'}/></div>
                <div className="col s4"><Card title={this.props.rules.MainResourceServerResponseTime.localizedRuleName} content={this.props.rules.MainResourceServerResponseTime.ruleImpact} color={this.props.rules.MainResourceServerResponseTime.ruleImpact>0 ? 'red' : 'green'}/></div>
                <div className="col s4"><Card title={this.props.rules.MinifyCss.localizedRuleName} content={this.props.rules.MinifyCss.ruleImpact} color={this.props.rules.MinifyCss.ruleImpact>0 ? 'red' : 'green'}/></div>
                <div className="col s4"><Card title={this.props.rules.MinifyHTML.localizedRuleName} content={this.props.rules.MinifyHTML.ruleImpact} color={this.props.rules.MinifyHTML.ruleImpact>0 ? 'red' : 'green'}/></div>
                <div className="col s4"><Card title={this.props.rules.MinifyJavaScript.localizedRuleName} content={this.props.rules.MinifyJavaScript.ruleImpact} color={this.props.rules.MinifyJavaScript.ruleImpact>0 ? 'red' : 'green'}/></div>
                <div className="col s4"><Card title={this.props.rules.MinimizeRenderBlockingResources.localizedRuleName} content={this.props.rules.MinimizeRenderBlockingResources.ruleImpact} color={this.props.rules.MinimizeRenderBlockingResources.ruleImpact>0 ? 'red' : 'green'}/></div>
                <div className="col s4"><Card title={this.props.rules.OptimizeImages.localizedRuleName} content={this.props.rules.OptimizeImages.ruleImpact} color={this.props.rules.OptimizeImages.ruleImpact>0 ? 'red' : 'green'}/></div>
                <div className="col s4"><Card title={this.props.rules.PrioritizeVisibleContent.localizedRuleName} content={this.props.rules.PrioritizeVisibleContent.ruleImpact} color={this.props.rules.PrioritizeVisibleContent.ruleImpact>0 ? 'red' : 'green'}/></div>
            </div>
        );
    }
}



export default Rulelist;