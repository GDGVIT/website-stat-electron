import React from 'react';
import Card from './card.js';
import Screenshot from './screenshot.js';
import Contributor from './contributor.js';
import LoadTime from './loadtime';
import Requests from './requests';
import PageSize from './page_size';
class MainApp extends React.Component {
    constructor(){
        super();
        this.state={
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
            datarules:{
            "AvoidLandingPageRedirects": {
                "localizedRuleName": "Avoid landing page redirects",
                    "ruleImpact": 0,
                    "groups": [
                    "SPEED"
                ],
                    "summary": {
                    "format": "Your page has no redirects. Learn more about {{BEGIN_LINK}}avoiding landing page redirects{{END_LINK}}.",
                        "args": [
                        {
                            "type": "HYPERLINK",
                            "key": "LINK",
                            "value": "https://developers.google.com/speed/docs/insights/AvoidRedirects"
                        }
                    ]
                }
            },
            "EnableGzipCompression": {
                "localizedRuleName": "Enable compression",
                    "ruleImpact": 0,
                    "groups": [
                    "SPEED"
                ],
                    "summary": {
                    "format": "You have compression enabled. Learn more about {{BEGIN_LINK}}enabling compression{{END_LINK}}.",
                        "args": [
                        {
                            "type": "HYPERLINK",
                            "key": "LINK",
                            "value": "https://developers.google.com/speed/docs/insights/EnableCompression"
                        }
                    ]
                }
            },
            "LeverageBrowserCaching": {
                "localizedRuleName": "Leverage browser caching",
                    "ruleImpact": 5.494543650793651,
                    "groups": [
                    "SPEED"
                ],
                    "summary": {
                    "format": "Setting an expiry date or a maximum age in the HTTP headers for static resources instructs the browser to load previously downloaded resources from local disk rather than over the network."
                },
                "urlBlocks": [
                    {
                        "header": {
                            "format": "{{BEGIN_LINK}}Leverage browser caching{{END_LINK}} for the following cacheable resources:",
                            "args": [
                                {
                                    "type": "HYPERLINK",
                                    "key": "LINK",
                                    "value": "https://developers.google.com/speed/docs/insights/LeverageBrowserCaching"
                                }
                            ]
                        },
                        "urls": [
                            {
                                "result": {
                                    "format": "{{URL}} ({{LIFETIME}})",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://rahulakrishna.github.io/images/rkbadg.png"
                                        },
                                        {
                                            "type": "DURATION",
                                            "key": "LIFETIME",
                                            "value": "10 minutes"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}} ({{LIFETIME}})",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://rahulakrishna.github.io/images/rkbgit.png"
                                        },
                                        {
                                            "type": "DURATION",
                                            "key": "LIFETIME",
                                            "value": "10 minutes"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}} ({{LIFETIME}})",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://rahulakrishna.github.io/images/rkbkrs.png"
                                        },
                                        {
                                            "type": "DURATION",
                                            "key": "LIFETIME",
                                            "value": "10 minutes"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}} ({{LIFETIME}})",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://rahulakrishna.github.io/materialize/css/materialize.min.css"
                                        },
                                        {
                                            "type": "DURATION",
                                            "key": "LIFETIME",
                                            "value": "10 minutes"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}} ({{LIFETIME}})",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://rahulakrishna.github.io/materialize/font/material-design-icons/Material-Design-Icons.woff"
                                        },
                                        {
                                            "type": "DURATION",
                                            "key": "LIFETIME",
                                            "value": "10 minutes"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}} ({{LIFETIME}})",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://rahulakrishna.github.io/materialize/font/roboto/Roboto-Bold.woff"
                                        },
                                        {
                                            "type": "DURATION",
                                            "key": "LIFETIME",
                                            "value": "10 minutes"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}} ({{LIFETIME}})",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://rahulakrishna.github.io/materialize/font/roboto/Roboto-Light.woff"
                                        },
                                        {
                                            "type": "DURATION",
                                            "key": "LIFETIME",
                                            "value": "10 minutes"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}} ({{LIFETIME}})",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://rahulakrishna.github.io/materialize/font/roboto/Roboto-Medium.woff"
                                        },
                                        {
                                            "type": "DURATION",
                                            "key": "LIFETIME",
                                            "value": "10 minutes"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}} ({{LIFETIME}})",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://rahulakrishna.github.io/materialize/font/roboto/Roboto-Regular.woff"
                                        },
                                        {
                                            "type": "DURATION",
                                            "key": "LIFETIME",
                                            "value": "10 minutes"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}} ({{LIFETIME}})",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://rahulakrishna.github.io/materialize/font/roboto/Roboto-Thin.woff"
                                        },
                                        {
                                            "type": "DURATION",
                                            "key": "LIFETIME",
                                            "value": "10 minutes"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}} ({{LIFETIME}})",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://rahulakrishna.github.io/materialize/js/materialize.min.js"
                                        },
                                        {
                                            "type": "DURATION",
                                            "key": "LIFETIME",
                                            "value": "10 minutes"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            "MainResourceServerResponseTime": {
                "localizedRuleName": "Reduce server response time",
                    "ruleImpact": 0,
                    "groups": [
                    "SPEED"
                ],
                    "summary": {
                    "format": "Your server responded quickly. Learn more about {{BEGIN_LINK}}server response time optimization{{END_LINK}}.",
                        "args": [
                        {
                            "type": "HYPERLINK",
                            "key": "LINK",
                            "value": "https://developers.google.com/speed/docs/insights/Server"
                        }
                    ]
                }
            },
            "MinifyCss": {
                "localizedRuleName": "Minify CSS",
                    "ruleImpact": 0,
                    "groups": [
                    "SPEED"
                ],
                    "summary": {
                    "format": "Your CSS is minified. Learn more about {{BEGIN_LINK}}minifying CSS{{END_LINK}}.",
                        "args": [
                        {
                            "type": "HYPERLINK",
                            "key": "LINK",
                            "value": "https://developers.google.com/speed/docs/insights/MinifyResources"
                        }
                    ]
                }
            },
            "MinifyHTML": {
                "localizedRuleName": "Minify HTML",
                    "ruleImpact": 0,
                    "groups": [
                    "SPEED"
                ],
                    "summary": {
                    "format": "Your HTML is minified. Learn more about {{BEGIN_LINK}}minifying HTML{{END_LINK}}.",
                        "args": [
                        {
                            "type": "HYPERLINK",
                            "key": "LINK",
                            "value": "https://developers.google.com/speed/docs/insights/MinifyResources"
                        }
                    ]
                }
            },
            "MinifyJavaScript": {
                "localizedRuleName": "Minify JavaScript",
                    "ruleImpact": 0,
                    "groups": [
                    "SPEED"
                ],
                    "summary": {
                    "format": "Your JavaScript content is minified. Learn more about {{BEGIN_LINK}}minifying JavaScript{{END_LINK}}.",
                        "args": [
                        {
                            "type": "HYPERLINK",
                            "key": "LINK",
                            "value": "https://developers.google.com/speed/docs/insights/MinifyResources"
                        }
                    ]
                }
            },
            "MinimizeRenderBlockingResources": {
                "localizedRuleName": "Eliminate render-blocking JavaScript and CSS in above-the-fold content",
                    "ruleImpact": 8,
                    "groups": [
                    "SPEED"
                ],
                    "summary": {
                    "format": "Your page has {{NUM_SCRIPTS}} blocking script resources and {{NUM_CSS}} blocking CSS resources. This causes a delay in rendering your page.",
                        "args": [
                        {
                            "type": "INT_LITERAL",
                            "key": "NUM_SCRIPTS",
                            "value": "1"
                        },
                        {
                            "type": "INT_LITERAL",
                            "key": "NUM_CSS",
                            "value": "2"
                        }
                    ]
                },
                "urlBlocks": [
                    {
                        "header": {
                            "format": "None of the above-the-fold content on your page could be rendered without waiting for the following resources to load. Try to defer or asynchronously load blocking resources, or inline the critical portions of those resources directly in the HTML."
                        }
                    },
                    {
                        "header": {
                            "format": "{{BEGIN_LINK}}Remove render-blocking JavaScript{{END_LINK}}:",
                            "args": [
                                {
                                    "type": "HYPERLINK",
                                    "key": "LINK",
                                    "value": "https://developers.google.com/speed/docs/insights/BlockingJS"
                                }
                            ]
                        },
                        "urls": [
                            {
                                "result": {
                                    "format": "{{URL}}",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://rahulakrishna.github.io/materialize/js/materialize.min.js"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "header": {
                            "format": "{{BEGIN_LINK}}Optimize CSS Delivery{{END_LINK}} of the following:",
                            "args": [
                                {
                                    "type": "HYPERLINK",
                                    "key": "LINK",
                                    "value": "https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery"
                                }
                            ]
                        },
                        "urls": [
                            {
                                "result": {
                                    "format": "{{URL}}",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://rahulakrishna.github.io/materialize/css/materialize.min.css"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "{{URL}}",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "https://fonts.googleapis.com/css?family=Source+Code+Pro"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            "OptimizeImages": {
                "localizedRuleName": "Optimize images",
                    "ruleImpact": 136.32600000000002,
                    "groups": [
                    "SPEED"
                ],
                    "summary": {
                    "format": "Properly formatting and compressing images can save many bytes of data."
                },
                "urlBlocks": [
                    {
                        "header": {
                            "format": "{{BEGIN_LINK}}Optimize the following images{{END_LINK}} to reduce their size by {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                            "args": [
                                {
                                    "type": "HYPERLINK",
                                    "key": "LINK",
                                    "value": "https://developers.google.com/speed/docs/insights/OptimizeImages"
                                },
                                {
                                    "type": "BYTES",
                                    "key": "SIZE_IN_BYTES",
                                    "value": "1.3MiB"
                                },
                                {
                                    "type": "PERCENTAGE",
                                    "key": "PERCENTAGE",
                                    "value": "93%"
                                }
                            ]
                        },
                        "urls": [
                            {
                                "result": {
                                    "format": "Compressing and resizing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://rahulakrishna.github.io/images/rkbkrs.png"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "829.8KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "93%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing and resizing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://rahulakrishna.github.io/images/rkbadg.png"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "430.3KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "94%"
                                        }
                                    ]
                                }
                            },
                            {
                                "result": {
                                    "format": "Compressing and resizing {{URL}} could save {{SIZE_IN_BYTES}} ({{PERCENTAGE}} reduction).",
                                    "args": [
                                        {
                                            "type": "URL",
                                            "key": "URL",
                                            "value": "http://rahulakrishna.github.io/images/rkbgit.png"
                                        },
                                        {
                                            "type": "BYTES",
                                            "key": "SIZE_IN_BYTES",
                                            "value": "71.3KiB"
                                        },
                                        {
                                            "type": "PERCENTAGE",
                                            "key": "PERCENTAGE",
                                            "value": "85%"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            "PrioritizeVisibleContent": {
                "localizedRuleName": "Prioritize visible content",
                    "ruleImpact": 0,
                    "groups": [
                    "SPEED"
                ],
                    "summary": {
                    "format": "You have the above-the-fold content properly prioritized. Learn more about {{BEGIN_LINK}}prioritizing visible content{{END_LINK}}.",
                        "args": [
                        {
                            "type": "HYPERLINK",
                            "key": "LINK",
                            "value": "https://developers.google.com/speed/docs/insights/PrioritizeVisibleContent"
                        }
                    ]
                }
            }
        }
        };
        this.processForm=this.processForm.bind(this);
    }
    processForm(e){
        e.preventDefault();
        $.ajax({
            url:'./public/mock/mock_webdata.json',
            dataType:'json',
            cache:false,
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
                            <input className="col m12" placeholder="http://"/>
                            <input type="submit" className="btn red col m4 push-m4" value="Process" onClick={this.processForm}/>
                        </div>
                    </div>
                </div>
            </form>

                {/*The details will begin from here*/}
            </div>
                <Screenshot url={this.state.dataurl} className="col s6"/>
                <div className="row">
                    <div className="col s8 push-s2">
                        <Card title={this.state.dataurl} content={this.state.datatitle}/>
                    </div>
                </div>
                    <div className="col s3 red">
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

                <div className="col s12"><Card title={this.state.datarules.AvoidLandingPageRedirects.localizedRuleName} content={this.state.datarules.AvoidLandingPageRedirects.summary.format}/></div>
                <div className="col s12"><Card title={this.state.datarules.EnableGzipCompression.localizedRuleName}/></div>
                <div className="col s12"><Card title={this.state.datarules.LeverageBrowserCaching.localizedRuleName}/></div>
                <div className="col s12"><Card title={this.state.datarules.MainResourceServerResponseTime.localizedRuleName}/></div>
                <div className="col s12"><Card title={this.state.datarules.MainResourceServerResponseTime.localizedRuleName}/></div>
                <div className="col s12"><Card title={this.state.datarules.MinifyJavaScript.localizedRuleName}/></div>
                <div className="col s12"><Card title={this.state.datarules.MinimizeRenderBlockingResources.localizedRuleName}/></div>
                <div className="col s12"><Card title={this.state.datarules.OptimizeImages.localizedRuleName}/></div>
                <div className="col s12"><Card title={this.state.datarules.PrioritizeVisibleContent.localizedRuleName}/></div>
            </div>
        );
    }
}

export default MainApp;