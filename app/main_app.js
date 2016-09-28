import React from 'react';
import Card from './card.js';
import Screenshot from './screenshot.js';
import Contributor from './contributor.js';
import LoadTime from './loadtime';
import Requests from './requests';
import PageSize from './page_size';
import Rulelist from './rule_list';
class MainApp extends React.Component {
    constructor(){
        super();
        this.state={
            inurl:'facebook.com',
            data:[],
            dataurl:'http://',
            datatitle:'Title',
            datagrade:0,
            dataresources:0,
            datahosts:0,
            databytes:0,
            datastaticresources:0,
            datahtmlbytes:0,
            datacssbytes:0,
            dataimagebytes:0,
            datajsbytes:0,
            datajs:0,
            datacss:0,
            datarules:[]
        };
        this.processForm=this.processForm.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({
           inurl:e.target.value
        });
    }
    processForm(e){
        e.preventDefault();
        const url=this.state.inurl;
        $.ajax({
            url:'https://www.googleapis.com/pagespeedonline/v2/runPagespeed?url=http%3A%2F%2F'+url+'&key=AIzaSyBKuUWqMYnnvt4JpJzL55a7MsYns7Jzxv8',
            dataType:'json',
            cache:false,
            beforesend(){
                this.setState({
                    datatitle:'Loading...'
                })
            },
            success: (data) => {
                this.setState({
                    data:data,
                    dataurl:data.id,
                    datatitle:data.title,
                    datagrade:data.ruleGroups.SPEED.score,
                    dataresources:data.pageStats.numberResources,
                    datahosts:data.pageStats.numberHosts,
                    databytes:data.pageStats.totalRequestBytes,
                    datastaticresources:data.pageStats.numberStaticResources,
                    datahtmlbytes:data.pageStats.htmlResponseBytes,
                    datacssbytes:data.pageStats.cssResponseBytes,
                    dataimagebytes:data.pageStats.imageResponseBytes,
                    datajsbytes:data.pageStats.javascriptResponseBytes,
                    datajs:data.pageStats.numberJsResources,
                    datacss:data.pageStats.numberCssResources,
                    datarules:data.formattedResults.ruleResults
                });
                console.log(this.state.data);
                console.log(this.state.datarules);
            },
            error: (xhr, status, err) => {
                console.error(status, err.toString());
            }
        });
    }
    render() {
        /*const pageRules=this.state.data.datarules.map((rule)=>{
           return <Card content={rule.localizedRuleName}/>
        });*/
        return (
            <div>
            <div className="row col s12">
            <form className="col s12">
                <div className="col m8 push-m2">
                    <div className="card col s12">
                        <div className="card-content row">
                            <input className="col m12" placeholder="http://" value={this.state.inurl} onChange={this.handleChange}/>
                            <input type="submit" className="btn red col m4 push-m4" value="Process" onClick={this.processForm}/>
                        </div>
                    </div>
                </div>
            </form>
            </div>
                {/*The details will begin from here*/}

                <Screenshot url={this.state.dataurl} className="col s6"/>
                <div className="row">
                    <div className="col s8 push-s2">
                        <Card title={this.state.dataurl} content={this.state.datatitle}/>
                    </div>
                </div>
                    <div className="col s3">
                        <Card title="Grade" content={this.state.datagrade} postdata="/100"/>
                    </div>


                <div className="col s3">
                    <Card title="No. of Resources" content={this.state.dataresources}/>
                </div>
                <div className="col s3">
                    <Card title="No. of Hosts" content={this.state.datahosts}/>
                </div>
                <div className="col s3">
                    <Card title="Size" content={this.state.databytes} postdata=" bytes" color="red"/>
                </div>
                <div className="col s3">
                    <Card title="Static Resources" content={this.state.datastaticresources}/>
                </div>
                <div className="col s3">
                    <Card title="Size of HTML" content={this.state.datahtmlbytes} postdata=" bytes"/>
                </div>
                <div className="col s3">
                    <Card title="Size of CSS" content={this.state.datacssbytes} postdata=" bytes"/>
                </div>
                <div className="col s3">
                    <Card title="Size of Images" content={this.state.dataimagebytes} postdata=" bytes"/>
                </div>
                <div className="col s3">
                    <Card title="Size of Javascript" content={this.state.datajsbytes} postdata=" bytes"/>
                </div>
                <div className="col s3">
                    <Card title="No. of JS files" content={this.state.datajs}/>
                </div>
                <div className="col s3">
                    <Card title="No. of CSS files" content={this.state.datacss}/>
                </div>

                {/*<div className="col s12"><Card title={this.state.datarules.AvoidLandingPageRedirects.localizedRuleName} content={this.state.datarules.AvoidLandingPageRedirects.summary.format}/></div>
                <div className="col s12"><Card title={this.state.datarules.EnableGzipCompression.localizedRuleName}/></div>
                <div className="col s12"><Card title={this.state.datarules.LeverageBrowserCaching.localizedRuleName}/></div>
                <div className="col s12"><Card title={this.state.datarules.MainResourceServerResponseTime.localizedRuleName}/></div>
                <div className="col s12"><Card title={this.state.datarules.MainResourceServerResponseTime.localizedRuleName}/></div>
                <div className="col s12"><Card title={this.state.datarules.MinifyJavaScript.localizedRuleName}/></div>
                <div className="col s12"><Card title={this.state.datarules.MinimizeRenderBlockingResources.localizedRuleName}/></div>
                <div className="col s12"><Card title={this.state.datarules.OptimizeImages.localizedRuleName}/></div>
                <div className="col s12"><Card title={this.state.datarules.PrioritizeVisibleContent.localizedRuleName}/></div>*/}


            </div>
        );
    }
}

export default MainApp;