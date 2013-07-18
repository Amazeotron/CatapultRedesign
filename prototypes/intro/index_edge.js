/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['"freight-text-pro", sans-serif']='<script type=\"text/javascript\" src=\"//use.typekit.net/ljv7wxs.js\"></script><script type=\"text/javascript\">try{Typekit.load();}catch(e){}</script>';
   fonts['"franklin-gothic-ext-comp-urw", sans-serif']='<script type=\"text/javascript\" src=\"//use.typekit.net/ljv7wxs.js\"></script><script type=\"text/javascript\">try{Typekit.load();}catch(e){}</script>';


var resources = [
];
var symbols = {
"stage": {
   version: "0.1.7",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.164",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'ProjectDots',
            type:'rect',
            rect:['752','257','auto','auto','auto','auto']
         },
         {
            id:'dot6',
            type:'image',
            rect:['408px','229px','313px','313px','auto','auto'],
            opacity:0.5,
            fill:["rgba(0,0,0,0)",'img/dot.png','0px','0px']
         },
         {
            id:'dot5',
            type:'image',
            rect:['329px','57px','313px','313px','auto','auto'],
            opacity:0.5,
            fill:["rgba(0,0,0,0)",'img/dot.png','0px','0px']
         },
         {
            id:'dot4',
            type:'image',
            rect:['200px','236px','313px','313px','auto','auto'],
            opacity:0.5,
            fill:["rgba(0,0,0,0)",'img/dot.png','0px','0px']
         },
         {
            id:'dot3',
            type:'image',
            rect:['96px','65px','313px','313px','auto','auto'],
            opacity:0.5,
            fill:["rgba(0,0,0,0)",'img/dot.png','0px','0px']
         },
         {
            id:'dot2',
            type:'image',
            rect:['15px','241px','313px','313px','auto','auto'],
            opacity:0.5,
            fill:["rgba(0,0,0,0)",'img/dot.png','0px','0px']
         },
         {
            id:'dot1',
            type:'image',
            rect:['-60px','128px','313px','313px','auto','auto'],
            opacity:0.5,
            fill:["rgba(0,0,0,0)",'img/dot.png','0px','0px']
         },
         {
            id:'txt6',
            type:'text',
            rect:['452px','335px','224px','104px','auto','auto'],
            opacity:1,
            text:"BUSINESS PLANNING",
            align:"center",
            font:['franklin-gothic-ext-comp-urw, sans-serif',50,"rgba(255,255,255,1.00)","normal","none","normal"],
            transform:[[],[],[],['0.25','0.25']]
         },
         {
            id:'txt4',
            type:'text',
            rect:['202px','366px','380px','50px','auto','auto'],
            text:"PROTOTYPING",
            align:"center",
            font:['franklin-gothic-ext-comp-urw, sans-serif',50,"rgba(255,255,255,1.00)","normal","none","normal"]
         },
         {
            id:'txt5',
            type:'text',
            rect:['375px','161px','224px','104px','auto','auto'],
            opacity:1,
            text:"CAD DEVELOPMENT",
            align:"center",
            font:['franklin-gothic-ext-comp-urw, sans-serif',50,"rgba(255,255,255,1.00)","normal","none","normal"],
            transform:[[],[],[],['0.25','0.25']]
         },
         {
            id:'txt3',
            type:'text',
            rect:['157px','176px','313px','90px','auto','auto'],
            text:"CONCEPTUAL DESIGN",
            align:"center",
            font:['franklin-gothic-ext-comp-urw, sans-serif',50,"rgba(255,255,255,1.00)","normal","none","normal"]
         },
         {
            id:'txt3_1',
            type:'text',
            rect:['137px','185px','230px','90px','auto','auto'],
            text:"CONCEPT IDEATION",
            align:"center",
            font:['franklin-gothic-ext-comp-urw, sans-serif',50,"rgba(255,255,255,1.00)","normal","none","normal"]
         },
         {
            id:'txt2_2',
            type:'text',
            rect:['57px','353px','230px','90px','auto','auto'],
            text:"ETHNOGRAPHIC RESEARCH",
            align:"center",
            font:['franklin-gothic-ext-comp-urw, sans-serif',50,"rgba(255,255,255,1.00)","normal","none","normal"]
         },
         {
            id:'txt2_1',
            type:'text',
            rect:['57px','353px','230px','90px','auto','auto'],
            text:"COMPETITOR ANALYSIS",
            align:"center",
            font:['franklin-gothic-ext-comp-urw, sans-serif',50,"rgba(255,255,255,1.00)","normal","none","normal"]
         },
         {
            id:'txt1_2',
            type:'text',
            rect:['-17px','254px','auto','auto','auto','auto'],
            text:"MARKET RESEARCH",
            align:"center",
            font:['franklin-gothic-ext-comp-urw, sans-serif',50,"rgba(255,255,255,1.00)","normal","none","normal"]
         },
         {
            id:'txt1_1',
            type:'text',
            rect:['-2px','253px','auto','auto','auto','auto'],
            text:"USER RESEARCH",
            align:"center",
            font:['franklin-gothic-ext-comp-urw, sans-serif',50,"rgba(255,255,255,1.00)","normal","none","normal"]
         },
         {
            id:'DESIGN',
            type:'text',
            tag:'h1',
            rect:['160px','49px','253px','auto','auto','auto'],
            text:"DESIGN",
            align:"center",
            font:['"franklin-gothic-ext-comp-urw", sans-serif',50,"rgba(132,182,181,1.00)","400","none","normal"]
         },
         {
            id:'EDUCATE',
            type:'text',
            tag:'h1',
            rect:['160px','49px','253px','auto','auto','auto'],
            text:"EDUCATE",
            align:"center",
            font:['"franklin-gothic-ext-comp-urw", sans-serif',50,"rgba(132,182,181,1.00)","400","none","normal"]
         },
         {
            id:'IDEATE',
            type:'text',
            tag:'h1',
            rect:['160px','49px','253px','auto','auto','auto'],
            text:"IDEATE",
            align:"center",
            font:['"franklin-gothic-ext-comp-urw", sans-serif',50,"rgba(132,182,181,1.00)","400","none","normal"]
         },
         {
            id:'ANALYZE',
            type:'text',
            tag:'h1',
            rect:['160px','49px','253px','auto','auto','auto'],
            text:"ANALYZE",
            align:"center",
            font:['"franklin-gothic-ext-comp-urw", sans-serif',50,"rgba(132,182,181,1.00)","400","none","normal"]
         },
         {
            id:'INNOVATE',
            type:'text',
            tag:'h1',
            rect:['160px','49px','253px','auto','auto','auto'],
            text:"INNOVATE",
            align:"center",
            font:['"franklin-gothic-ext-comp-urw", sans-serif',50,"rgba(132,182,181,1.00)","400","none","normal"]
         },
         {
            id:'ENGINEER',
            type:'text',
            tag:'h1',
            rect:['160px','49px','253px','auto','auto','auto'],
            text:"ENGINEER",
            align:"center",
            font:['"franklin-gothic-ext-comp-urw", sans-serif',50,"rgba(132,182,181,1.00)","400","none","normal"]
         },
         {
            id:'title2',
            type:'text',
            rect:['413px','51px','auto','auto','auto','auto'],
            text:"to help people thrive.",
            font:['"freight-text-pro", sans-serif',46,"rgba(82,80,83,1.00)","normal","none",""]
         },
         {
            id:'title1',
            type:'text',
            rect:['97px','51px','auto','auto','auto','auto'],
            text:"We",
            font:['"freight-text-pro", sans-serif',46,"rgba(255,255,255,1.00)","normal","none",""]
         },
         {
            id:'Rectangle',
            type:'rect',
            rect:['161px','108px','253px','1px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         }],
         symbolInstances: [
         {
            id:'ProjectDots',
            symbolName:'Handcart'
         }
         ]
      },
   states: {
      "Base State": {
         "${_dot3}": [
            ["style", "top", '64.9px'],
            ["transform", "scaleY", '0.2'],
            ["transform", "scaleX", '0.2'],
            ["style", "height", '313px'],
            ["style", "opacity", '0.5'],
            ["style", "left", '96.3px'],
            ["style", "width", '313px']
         ],
         "${_ENGINEER}": [
            ["transform", "scaleX", '1'],
            ["color", "color", 'rgba(132,182,181,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '159.97px'],
            ["style", "font-size", '50px'],
            ["style", "top", '49.35px'],
            ["transform", "scaleY", '1'],
            ["style", "text-align", 'center'],
            ["style", "width", '253px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", '"franklin-gothic-ext-comp-urw", sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "font-weight", '400']
         ],
         "${_txt2_2}": [
            ["style", "line-height", '50px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '56.95px'],
            ["style", "width", '230px'],
            ["style", "top", '352.75px'],
            ["transform", "scaleY", '0.4'],
            ["style", "height", '90px'],
            ["transform", "scaleX", '0.4']
         ],
         "${_INNOVATE}": [
            ["color", "color", 'rgba(132,182,181,1.00)'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '0'],
            ["style", "left", '159.97px'],
            ["style", "font-size", '50px'],
            ["style", "top", '49.35px'],
            ["transform", "scaleY", '1'],
            ["style", "text-align", 'center'],
            ["style", "width", '253px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", '"franklin-gothic-ext-comp-urw", sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "font-weight", '400']
         ],
         "${_txt2_1}": [
            ["style", "line-height", '50px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '57px'],
            ["style", "width", '230px'],
            ["style", "top", '353px'],
            ["transform", "scaleY", '0.2'],
            ["style", "height", '90px'],
            ["transform", "scaleX", '0.2']
         ],
         "${_dot6}": [
            ["style", "top", '229.45px'],
            ["transform", "scaleY", '0.2'],
            ["transform", "scaleX", '0.2'],
            ["style", "height", '313px'],
            ["style", "opacity", '0.5'],
            ["style", "left", '407.86px'],
            ["style", "width", '313px']
         ],
         "${_txt3_1}": [
            ["style", "line-height", '50px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '137.5px'],
            ["style", "width", '230px'],
            ["style", "top", '185.1px'],
            ["transform", "scaleY", '0.4'],
            ["style", "height", '90px'],
            ["transform", "scaleX", '0.4']
         ],
         "${_Rectangle}": [
            ["style", "top", '108.4px'],
            ["style", "left", '160.93px'],
            ["style", "height", '1px']
         ],
         "${_ANALYZE}": [
            ["transform", "scaleX", '1'],
            ["color", "color", 'rgba(132,182,181,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '159.97px'],
            ["style", "font-size", '50px'],
            ["style", "top", '49.35px'],
            ["transform", "scaleY", '1'],
            ["style", "text-align", 'center'],
            ["style", "width", '253px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", '"franklin-gothic-ext-comp-urw", sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "font-weight", '400']
         ],
         "${_txt1_1}": [
            ["style", "top", '253.11px'],
            ["transform", "scaleY", '0.25'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '-1.7px'],
            ["transform", "scaleX", '0.25']
         ],
         "${_txt6}": [
            ["style", "line-height", '50px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '452.36px'],
            ["style", "width", '224.2833404541px'],
            ["style", "top", '334.95px'],
            ["transform", "scaleY", '0.25'],
            ["style", "height", '104.28571428571px'],
            ["transform", "scaleX", '0.25']
         ],
         "${_txt5}": [
            ["style", "line-height", '50px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '374.77px'],
            ["style", "width", '224.2833404541px'],
            ["style", "top", '161.07px'],
            ["transform", "scaleY", '0.25'],
            ["style", "height", '104.28571428571px'],
            ["transform", "scaleX", '0.25']
         ],
         "${_DESIGN}": [
            ["style", "font-weight", '400'],
            ["color", "color", 'rgba(132,182,181,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '159.97px'],
            ["style", "font-size", '50px'],
            ["style", "top", '49.35px'],
            ["style", "text-align", 'center'],
            ["transform", "scaleY", '1'],
            ["style", "width", '253px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", '"franklin-gothic-ext-comp-urw", sans-serif'],
            ["style", "text-decoration", 'none'],
            ["transform", "scaleX", '1']
         ],
         "${_EDUCATE}": [
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(132,182,181,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '159.97px'],
            ["style", "font-size", '50px'],
            ["style", "top", '49.35px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["style", "width", '253px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", '"franklin-gothic-ext-comp-urw", sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "font-weight", '400']
         ],
         "${_txt1_2}": [
            ["style", "top", '254.11px'],
            ["transform", "scaleY", '0.25'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '-16.7px'],
            ["transform", "scaleX", '0.25']
         ],
         "${_dot1}": [
            ["style", "top", '127.62px'],
            ["transform", "scaleY", '0.2'],
            ["transform", "scaleX", '0.2'],
            ["style", "height", '313px'],
            ["style", "opacity", '0.5'],
            ["style", "left", '-59.55px'],
            ["style", "width", '313px']
         ],
         "${_IDEATE}": [
            ["transform", "scaleX", '1'],
            ["color", "color", 'rgba(132,182,181,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '159.97px'],
            ["style", "font-size", '50px'],
            ["style", "top", '49.35px'],
            ["transform", "scaleY", '1'],
            ["style", "text-align", 'center'],
            ["style", "width", '253px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", '"franklin-gothic-ext-comp-urw", sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "font-weight", '400']
         ],
         "${_title1}": [
            ["style", "top", '51px'],
            ["color", "color", 'rgba(82,80,83,1.00)'],
            ["style", "font-family", '"freight-text-pro", sans-serif'],
            ["style", "left", '97px'],
            ["style", "font-size", '46px']
         ],
         "${_txt3}": [
            ["style", "line-height", '50px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '156.5px'],
            ["style", "width", '191.97241719564px'],
            ["style", "top", '176.35px'],
            ["transform", "scaleY", '0.25'],
            ["style", "height", '90px'],
            ["transform", "scaleX", '0.25']
         ],
         "${_txt4}": [
            ["style", "line-height", '50px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "opacity", '0.0031317349137932'],
            ["style", "left", '202px'],
            ["style", "width", '380px'],
            ["style", "top", '365.65px'],
            ["transform", "scaleY", '0.4'],
            ["style", "height", '50px'],
            ["transform", "scaleX", '0.4']
         ],
         "${_dot4}": [
            ["style", "top", '236.4px'],
            ["transform", "scaleY", '0.2'],
            ["style", "height", '313px'],
            ["transform", "scaleX", '0.2'],
            ["style", "opacity", '0.5'],
            ["style", "left", '199.6px'],
            ["style", "width", '313px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(226,218,205,0.00)'],
            ["style", "height", '500px'],
            ["style", "width", '900px']
         ],
         "${_dot5}": [
            ["style", "top", '56.71px'],
            ["transform", "scaleY", '0.2'],
            ["style", "height", '313px'],
            ["transform", "scaleX", '0.2'],
            ["style", "opacity", '0.5'],
            ["style", "left", '329.4px'],
            ["style", "width", '313px']
         ],
         "${_dot2}": [
            ["style", "top", '241.45px'],
            ["transform", "scaleY", '0.2'],
            ["style", "height", '313px'],
            ["transform", "scaleX", '0.2'],
            ["style", "opacity", '0.5'],
            ["style", "left", '15.4px'],
            ["style", "width", '313px']
         ],
         "${_title2}": [
            ["style", "top", '51px'],
            ["color", "color", 'rgba(82,80,83,1.00)'],
            ["style", "font-family", '"freight-text-pro", sans-serif'],
            ["style", "left", '413px'],
            ["style", "font-size", '46px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 20000,
         autoPlay: true,
         timeline: [
            { id: "eid953", tween: [ "style", "${_txt5}", "opacity", '1', { fromValue: '0.000000'}], position: 2000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1040", tween: [ "style", "${_txt5}", "opacity", '0', { fromValue: '1'}], position: 5000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1076", tween: [ "transform", "${_txt6}", "scaleY", '0.7', { fromValue: '0.25'}], position: 5500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid873", tween: [ "style", "${_txt1_1}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1026", tween: [ "style", "${_txt1_1}", "opacity", '0', { fromValue: '1'}], position: 5000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid937", tween: [ "transform", "${_dot4}", "scaleX", '0.5', { fromValue: '0.2'}], position: 2000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1044", tween: [ "transform", "${_dot4}", "scaleX", '0.25', { fromValue: '0.5'}], position: 5500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1139", tween: [ "transform", "${_dot4}", "scaleX", '0.6', { fromValue: '0.25'}], position: 9000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1178", tween: [ "transform", "${_dot4}", "scaleX", '0.4', { fromValue: '0.6'}], position: 12500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1251", tween: [ "transform", "${_dot4}", "scaleX", '0.3', { fromValue: '0.4'}], position: 19500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid926", tween: [ "style", "${_txt3}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1036", tween: [ "style", "${_txt3}", "opacity", '0', { fromValue: '1'}], position: 5000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid934", tween: [ "style", "${_dot4}", "opacity", '1', { fromValue: '0.5'}], position: 2000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1046", tween: [ "style", "${_dot4}", "opacity", '0.5', { fromValue: '1'}], position: 5500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1143", tween: [ "style", "${_dot4}", "opacity", '1', { fromValue: '0.5'}], position: 9000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1233", tween: [ "style", "${_dot4}", "opacity", '1', { fromValue: '1'}], position: 19500, duration: 0 },
            { id: "eid911", tween: [ "transform", "${_dot3}", "scaleY", '0.4', { fromValue: '0.2'}], position: 2000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1101", tween: [ "transform", "${_dot3}", "scaleY", '0.6', { fromValue: '0.4'}], position: 5500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1134", tween: [ "transform", "${_dot3}", "scaleY", '0.4', { fromValue: '0.6'}], position: 9000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1175", tween: [ "transform", "${_dot3}", "scaleY", '0.6', { fromValue: '0.4'}], position: 12500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1218", tween: [ "transform", "${_dot3}", "scaleY", '0.25', { fromValue: '0.6'}], position: 16010, duration: 490, easing: "easeInOutQuart" },
            { id: "eid1250", tween: [ "transform", "${_dot3}", "scaleY", '0.6', { fromValue: '0.25'}], position: 19500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid972", tween: [ "transform", "${_txt5}", "scaleX", '0.4', { fromValue: '0.25'}], position: 2000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid957", tween: [ "transform", "${_dot5}", "scaleX", '0.3', { fromValue: '0.2'}], position: 2000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1105", tween: [ "transform", "${_dot5}", "scaleX", '0.25', { fromValue: '0.25'}], position: 5500, duration: 0 },
            { id: "eid1148", tween: [ "transform", "${_dot5}", "scaleX", '0.6', { fromValue: '0.25'}], position: 9000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1182", tween: [ "transform", "${_dot5}", "scaleX", '0.3', { fromValue: '0.6'}], position: 12500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1222", tween: [ "transform", "${_dot5}", "scaleX", '0.4', { fromValue: '0.3'}], position: 16010, duration: 490, easing: "easeInOutQuart" },
            { id: "eid1253", tween: [ "transform", "${_dot5}", "scaleX", '0.3', { fromValue: '0.4'}], position: 19500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1059", tween: [ "transform", "${_txt2_2}", "scaleX", '0.5', { fromValue: '0.4'}], position: 5500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid978", tween: [ "style", "${_INNOVATE}", "opacity", '0.86159752155172', { fromValue: '0'}], position: 5500, duration: 500 },
            { id: "eid979", tween: [ "style", "${_INNOVATE}", "opacity", '0', { fromValue: '0.86159752155172'}], position: 8500, duration: 500 },
            { id: "eid942", tween: [ "transform", "${_txt4}", "scaleY", '0.7', { fromValue: '0.4'}], position: 2000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid904", tween: [ "transform", "${_dot2}", "scaleX", '0.3', { fromValue: '0.2'}], position: 2000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1053", tween: [ "transform", "${_dot2}", "scaleX", '0.4', { fromValue: '0.3'}], position: 5500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1127", tween: [ "transform", "${_dot2}", "scaleX", '0.3', { fromValue: '0.4'}], position: 9000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1170", tween: [ "transform", "${_dot2}", "scaleX", '0.4', { fromValue: '0.3'}], position: 12500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1214", tween: [ "transform", "${_dot2}", "scaleX", '0.25', { fromValue: '0.4'}], position: 16010, duration: 490, easing: "easeInOutQuart" },
            { id: "eid1245", tween: [ "transform", "${_dot2}", "scaleX", '0.4', { fromValue: '0.25'}], position: 19500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1095", tween: [ "transform", "${_txt3_1}", "scaleX", '0.7', { fromValue: '0.4'}], position: 5500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid945", tween: [ "style", "${_txt4}", "opacity", '1', { fromValue: '0.0031317349137932'}], position: 2000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1038", tween: [ "style", "${_txt4}", "opacity", '0', { fromValue: '1'}], position: 5000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid871", tween: [ "transform", "${_txt1_1}", "scaleY", '0.4', { fromValue: '0.25'}], position: 2000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid855", tween: [ "transform", "${_dot1}", "scaleY", '0.3', { fromValue: '0.2'}], position: 2000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1023", tween: [ "transform", "${_dot1}", "scaleY", '0.4', { fromValue: '0.3'}], position: 5500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1124", tween: [ "transform", "${_dot1}", "scaleY", '0.25', { fromValue: '0.4'}], position: 9000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1165", tween: [ "transform", "${_dot1}", "scaleY", '0.4', { fromValue: '0.25'}], position: 12500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1212", tween: [ "transform", "${_dot1}", "scaleY", '0.25', { fromValue: '0.4'}], position: 16010, duration: 490, easing: "easeInOutQuart" },
            { id: "eid1243", tween: [ "transform", "${_dot1}", "scaleY", '0.4', { fromValue: '0.25'}], position: 19500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1013", tween: [ "transform", "${_txt1_2}", "scaleX", '0.45', { fromValue: '0.25'}], position: 5500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1060", tween: [ "transform", "${_txt2_2}", "scaleY", '0.5', { fromValue: '0.4'}], position: 5500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid998", tween: [ "style", "${_ANALYZE}", "opacity", '1', { fromValue: '0'}], position: 9000, duration: 500 },
            { id: "eid999", tween: [ "style", "${_ANALYZE}", "opacity", '0', { fromValue: '1'}], position: 12000, duration: 500 },
            { id: "eid930", tween: [ "transform", "${_txt3}", "scaleY", '0.6', { fromValue: '0.25'}], position: 2000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1096", tween: [ "style", "${_txt3_1}", "opacity", '1', { fromValue: '0.000000'}], position: 5500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1112", tween: [ "style", "${_txt3_1}", "opacity", '0', { fromValue: '1'}], position: 8500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid898", tween: [ "transform", "${_txt2_1}", "scaleY", '0.4', { fromValue: '0.2'}], position: 2000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid943", tween: [ "style", "${_txt4}", "left", '244.2px', { fromValue: '202px'}], position: 2000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1068", tween: [ "style", "${_dot6}", "opacity", '1', { fromValue: '0.5'}], position: 5500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1185", tween: [ "style", "${_dot6}", "opacity", '0.5', { fromValue: '1'}], position: 12500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1219", tween: [ "style", "${_dot6}", "opacity", '1', { fromValue: '0.5'}], position: 16010, duration: 490, easing: "easeInOutQuart" },
            { id: "eid1255", tween: [ "style", "${_dot6}", "opacity", '0.5', { fromValue: '1'}], position: 19500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1066", tween: [ "transform", "${_dot6}", "scaleY", '0.5', { fromValue: '0.2'}], position: 5500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1155", tween: [ "transform", "${_dot6}", "scaleY", '0.3', { fromValue: '0.5'}], position: 9000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1193", tween: [ "transform", "${_dot6}", "scaleY", '0.25', { fromValue: '0.3'}], position: 12500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1221", tween: [ "transform", "${_dot6}", "scaleY", '0.6', { fromValue: '0.25'}], position: 16010, duration: 490, easing: "easeInOutQuart" },
            { id: "eid1257", tween: [ "transform", "${_dot6}", "scaleY", '0.2', { fromValue: '0.6'}], position: 19500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid964", tween: [ "style", "${_dot5}", "opacity", '1', { fromValue: '0.5'}], position: 2000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1104", tween: [ "style", "${_dot5}", "opacity", '0.5', { fromValue: '0.5'}], position: 5500, duration: 0 },
            { id: "eid1147", tween: [ "style", "${_dot5}", "opacity", '1', { fromValue: '0.5'}], position: 9000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1236", tween: [ "style", "${_dot5}", "opacity", '1', { fromValue: '1'}], position: 19500, duration: 0 },
            { id: "eid897", tween: [ "transform", "${_txt2_1}", "scaleX", '0.4', { fromValue: '0.2'}], position: 2000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid996", tween: [ "style", "${_IDEATE}", "opacity", '1', { fromValue: '0'}], position: 12500, duration: 500 },
            { id: "eid997", tween: [ "style", "${_IDEATE}", "opacity", '0', { fromValue: '1'}], position: 15500, duration: 500 },
            { id: "eid870", tween: [ "transform", "${_txt1_1}", "scaleX", '0.4', { fromValue: '0.25'}], position: 2000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1075", tween: [ "transform", "${_txt6}", "scaleX", '0.7', { fromValue: '0.25'}], position: 5500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1070", tween: [ "style", "${_txt6}", "opacity", '1', { fromValue: '0.000000'}], position: 5500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1115", tween: [ "style", "${_txt6}", "opacity", '0', { fromValue: '1'}], position: 8500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1048", tween: [ "style", "${_txt2_2}", "opacity", '1', { fromValue: '0.000000'}], position: 5500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1109", tween: [ "style", "${_txt2_2}", "opacity", '0', { fromValue: '1'}], position: 8500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid941", tween: [ "transform", "${_txt4}", "scaleX", '0.7', { fromValue: '0.4'}], position: 2000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid899", tween: [ "style", "${_txt2_1}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1034", tween: [ "style", "${_txt2_1}", "opacity", '0', { fromValue: '1'}], position: 5000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1097", tween: [ "transform", "${_txt3_1}", "scaleY", '0.7', { fromValue: '0.4'}], position: 5500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid909", tween: [ "style", "${_dot3}", "opacity", '1', { fromValue: '0.5'}], position: 2000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1216", tween: [ "style", "${_dot3}", "opacity", '0.5', { fromValue: '1'}], position: 16010, duration: 490, easing: "easeInOutQuart" },
            { id: "eid1248", tween: [ "style", "${_dot3}", "opacity", '1', { fromValue: '0.5'}], position: 19500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid973", tween: [ "transform", "${_txt5}", "scaleY", '0.4', { fromValue: '0.25'}], position: 2000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1015", tween: [ "transform", "${_txt1_2}", "scaleY", '0.45', { fromValue: '0.25'}], position: 5500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid887", tween: [ "style", "${_dot2}", "opacity", '1', { fromValue: '0.5'}], position: 2000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1213", tween: [ "style", "${_dot2}", "opacity", '0.5', { fromValue: '1'}], position: 16010, duration: 490, easing: "easeInOutQuart" },
            { id: "eid1247", tween: [ "style", "${_dot2}", "opacity", '1', { fromValue: '0.5'}], position: 19500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid929", tween: [ "transform", "${_txt3}", "scaleX", '0.6', { fromValue: '0.25'}], position: 2000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid848", tween: [ "style", "${_ENGINEER}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500 },
            { id: "eid849", tween: [ "style", "${_ENGINEER}", "opacity", '0', { fromValue: '1'}], position: 5000, duration: 500 },
            { id: "eid1014", tween: [ "style", "${_txt1_2}", "opacity", '1', { fromValue: '0'}], position: 5500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1032", tween: [ "style", "${_txt1_2}", "opacity", '0', { fromValue: '1'}], position: 8500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid994", tween: [ "style", "${_EDUCATE}", "opacity", '1', { fromValue: '0'}], position: 16000, duration: 500 },
            { id: "eid995", tween: [ "style", "${_EDUCATE}", "opacity", '0', { fromValue: '1'}], position: 19000, duration: 500 },
            { id: "eid944", tween: [ "style", "${_txt4}", "width", '224.29175967262px', { fromValue: '380px'}], position: 2000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid980", tween: [ "style", "${_DESIGN}", "opacity", '1', { fromValue: '0'}], position: 19500, duration: 500 },
            { id: "eid854", tween: [ "transform", "${_dot1}", "scaleX", '0.3', { fromValue: '0.2'}], position: 2000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1022", tween: [ "transform", "${_dot1}", "scaleX", '0.4', { fromValue: '0.3'}], position: 5500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1123", tween: [ "transform", "${_dot1}", "scaleX", '0.25', { fromValue: '0.4'}], position: 9000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1164", tween: [ "transform", "${_dot1}", "scaleX", '0.4', { fromValue: '0.25'}], position: 12500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1211", tween: [ "transform", "${_dot1}", "scaleX", '0.25', { fromValue: '0.4'}], position: 16010, duration: 490, easing: "easeInOutQuart" },
            { id: "eid1242", tween: [ "transform", "${_dot1}", "scaleX", '0.4', { fromValue: '0.25'}], position: 19500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1065", tween: [ "transform", "${_dot6}", "scaleX", '0.5', { fromValue: '0.2'}], position: 5500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1154", tween: [ "transform", "${_dot6}", "scaleX", '0.3', { fromValue: '0.5'}], position: 9000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1192", tween: [ "transform", "${_dot6}", "scaleX", '0.25', { fromValue: '0.3'}], position: 12500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1220", tween: [ "transform", "${_dot6}", "scaleX", '0.6', { fromValue: '0.25'}], position: 16010, duration: 490, easing: "easeInOutQuart" },
            { id: "eid1256", tween: [ "transform", "${_dot6}", "scaleX", '0.2', { fromValue: '0.6'}], position: 19500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid910", tween: [ "transform", "${_dot3}", "scaleX", '0.4', { fromValue: '0.2'}], position: 2000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1100", tween: [ "transform", "${_dot3}", "scaleX", '0.6', { fromValue: '0.4'}], position: 5500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1133", tween: [ "transform", "${_dot3}", "scaleX", '0.4', { fromValue: '0.6'}], position: 9000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1174", tween: [ "transform", "${_dot3}", "scaleX", '0.6', { fromValue: '0.4'}], position: 12500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1217", tween: [ "transform", "${_dot3}", "scaleX", '0.25', { fromValue: '0.6'}], position: 16010, duration: 490, easing: "easeInOutQuart" },
            { id: "eid1249", tween: [ "transform", "${_dot3}", "scaleX", '0.6', { fromValue: '0.25'}], position: 19500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid859", tween: [ "style", "${_dot1}", "opacity", '1', { fromValue: '0.5'}], position: 2000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1122", tween: [ "style", "${_dot1}", "opacity", '0.5', { fromValue: '1'}], position: 9000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1161", tween: [ "style", "${_dot1}", "opacity", '1', { fromValue: '0.5'}], position: 12500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1210", tween: [ "style", "${_dot1}", "opacity", '0.5', { fromValue: '1'}], position: 16010, duration: 490, easing: "easeInOutQuart" },
            { id: "eid1244", tween: [ "style", "${_dot1}", "opacity", '1', { fromValue: '0.5'}], position: 19500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid938", tween: [ "transform", "${_dot4}", "scaleY", '0.5', { fromValue: '0.2'}], position: 2000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1045", tween: [ "transform", "${_dot4}", "scaleY", '0.25', { fromValue: '0.5'}], position: 5500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1140", tween: [ "transform", "${_dot4}", "scaleY", '0.6', { fromValue: '0.25'}], position: 9000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1179", tween: [ "transform", "${_dot4}", "scaleY", '0.4', { fromValue: '0.6'}], position: 12500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1252", tween: [ "transform", "${_dot4}", "scaleY", '0.3', { fromValue: '0.4'}], position: 19500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid958", tween: [ "transform", "${_dot5}", "scaleY", '0.3', { fromValue: '0.2'}], position: 2000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1106", tween: [ "transform", "${_dot5}", "scaleY", '0.25', { fromValue: '0.25'}], position: 5500, duration: 0 },
            { id: "eid1149", tween: [ "transform", "${_dot5}", "scaleY", '0.6', { fromValue: '0.25'}], position: 9000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1183", tween: [ "transform", "${_dot5}", "scaleY", '0.3', { fromValue: '0.6'}], position: 12500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1223", tween: [ "transform", "${_dot5}", "scaleY", '0.4', { fromValue: '0.3'}], position: 16010, duration: 490, easing: "easeInOutQuart" },
            { id: "eid1254", tween: [ "transform", "${_dot5}", "scaleY", '0.3', { fromValue: '0.4'}], position: 19500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid905", tween: [ "transform", "${_dot2}", "scaleY", '0.3', { fromValue: '0.2'}], position: 2000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1054", tween: [ "transform", "${_dot2}", "scaleY", '0.4', { fromValue: '0.3'}], position: 5500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1128", tween: [ "transform", "${_dot2}", "scaleY", '0.3', { fromValue: '0.4'}], position: 9000, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1171", tween: [ "transform", "${_dot2}", "scaleY", '0.4', { fromValue: '0.3'}], position: 12500, duration: 500, easing: "easeInOutQuart" },
            { id: "eid1215", tween: [ "transform", "${_dot2}", "scaleY", '0.25', { fromValue: '0.4'}], position: 16010, duration: 490, easing: "easeInOutQuart" },
            { id: "eid1246", tween: [ "transform", "${_dot2}", "scaleY", '0.4', { fromValue: '0.25'}], position: 19500, duration: 500, easing: "easeInOutQuart" }         ]
      }
   }
},
"Dot2": {
   version: "0.1.7",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.164",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      id: 'dot1Copy',
      opacity: 0.5,
      rect: ['-99px','-182px','313px','313px','auto','auto'],
      fill: ['rgba(0,0,0,0)','img/dot.png','0px','0px']
   },
   {
      transform: [{1:0,0:0},{},{},['0.5','0.5']],
      type: 'text',
      align: 'center',
      id: 'Text3',
      text: 'PROTOTYPE',
      rect: ['-25px','28px','143px','38px','auto','auto'],
      font: ['franklin-gothic-ext-comp-urw, sans-serif',37,'rgba(255,255,255,1)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "line-height", '40px'],
            ["style", "letter-spacing", '2px'],
            ["transform", "scaleX", '0.5'],
            ["style", "opacity", '0'],
            ["style", "left", '-24.86px'],
            ["style", "width", '142.81666564941px'],
            ["style", "top", '27.57px'],
            ["transform", "scaleY", '0.5'],
            ["style", "height", '38.259315083328px'],
            ["style", "font-size", '37px']
         ],
         "${symbolSelector}": [
            ["style", "height", '93.9px'],
            ["style", "width", '93.9px']
         ],
         "${_dot1Copy}": [
            ["style", "top", '-109.54px'],
            ["transform", "scaleY", '0.3'],
            ["style", "height", '313px'],
            ["transform", "scaleX", '0.3'],
            ["style", "opacity", '0.5'],
            ["style", "left", '-109.54px'],
            ["style", "width", '313px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5000,
         autoPlay: true,
         timeline: [
            { id: "eid288", tween: [ "style", "${_Text3}", "opacity", '1', { fromValue: '0.000000'}], position: 4500, duration: 500, easing: "easeOutBounce" },
            { id: "eid212", tween: [ "transform", "${_dot1Copy}", "scaleY", '0.3', { fromValue: '0.3'}], position: 0, duration: 0 },
            { id: "eid192", tween: [ "transform", "${_dot1Copy}", "scaleY", '0.2', { fromValue: '0.3'}], position: 1000, duration: 500, easing: "easeOutBounce" },
            { id: "eid236", tween: [ "transform", "${_dot1Copy}", "scaleY", '0.47', { fromValue: '0.2'}], position: 4500, duration: 500, easing: "easeOutBounce" },
            { id: "eid398", tween: [ "style", "${_dot1Copy}", "opacity", '1', { fromValue: '0.5'}], position: 4500, duration: 500, easing: "easeOutBounce" },
            { id: "eid298", tween: [ "transform", "${_Text3}", "scaleY", '1.03', { fromValue: '0.5'}], position: 4500, duration: 500, easing: "easeOutBounce" },
            { id: "eid297", tween: [ "transform", "${_Text3}", "scaleX", '1.03', { fromValue: '0.5'}], position: 4500, duration: 500, easing: "easeOutBounce" },
            { id: "eid211", tween: [ "transform", "${_dot1Copy}", "scaleX", '0.3', { fromValue: '0.3'}], position: 0, duration: 0 },
            { id: "eid191", tween: [ "transform", "${_dot1Copy}", "scaleX", '0.2', { fromValue: '0.3'}], position: 1000, duration: 500, easing: "easeOutBounce" },
            { id: "eid235", tween: [ "transform", "${_dot1Copy}", "scaleX", '0.47', { fromValue: '0.2'}], position: 4500, duration: 500, easing: "easeOutBounce" }         ]
      }
   }
},
"Dot1": {
   version: "0.1.7",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.164",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      id: 'dot1',
      opacity: 0.5,
      rect: ['-110px','-109px','313px','313px','auto','auto'],
      fill: ['rgba(0,0,0,0)','img/dot.png','0px','0px']
   },
   {
      transform: {},
      type: 'text',
      align: 'center',
      id: 'Text',
      text: 'RESEARCH',
      rect: ['-31px','27px','157px','auto','auto','auto'],
      font: ['franklin-gothic-ext-comp-urw, sans-serif',37,'rgba(255,255,255,1.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text}": [
            ["style", "line-height", '40px'],
            ["style", "letter-spacing", '2px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '-31.12px'],
            ["style", "font-size", '37px'],
            ["style", "top", '27px'],
            ["transform", "scaleY", '0.5'],
            ["style", "width", '156.5px'],
            ["transform", "scaleX", '0.5']
         ],
         "${_dot1}": [
            ["style", "top", '-109.17px'],
            ["transform", "scaleY", '0.3'],
            ["style", "height", '313px'],
            ["transform", "scaleX", '0.3'],
            ["style", "opacity", '0.5'],
            ["style", "left", '-109.53px'],
            ["style", "width", '313px']
         ],
         "${symbolSelector}": [
            ["style", "height", '93.9px'],
            ["style", "width", '93.9px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5000,
         autoPlay: true,
         timeline: [
            { id: "eid194", tween: [ "transform", "${_dot1}", "scaleY", '0.35', { fromValue: '0.3'}], position: 1000, duration: 500, easing: "easeOutBounce" },
            { id: "eid234", tween: [ "transform", "${_dot1}", "scaleY", '0.34', { fromValue: '0.35'}], position: 4500, duration: 500, easing: "easeOutBounce" },
            { id: "eid193", tween: [ "transform", "${_dot1}", "scaleX", '0.35', { fromValue: '0.3'}], position: 1000, duration: 500, easing: "easeOutBounce" },
            { id: "eid233", tween: [ "transform", "${_dot1}", "scaleX", '0.34', { fromValue: '0.35'}], position: 4500, duration: 500, easing: "easeOutBounce" },
            { id: "eid392", tween: [ "style", "${_dot1}", "opacity", '1', { fromValue: '0.5'}], position: 1000, duration: 500, easing: "easeOutBounce" },
            { id: "eid395", tween: [ "style", "${_dot1}", "opacity", '0.5', { fromValue: '1'}], position: 4500, duration: 500, easing: "easeOutBounce" },
            { id: "eid301", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "easeOutBounce" },
            { id: "eid302", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 500, easing: "easeOutBounce" },
            { id: "eid303", tween: [ "transform", "${_Text}", "scaleY", '1', { fromValue: '0.5'}], position: 1000, duration: 500, easing: "easeOutBounce" },
            { id: "eid304", tween: [ "transform", "${_Text}", "scaleY", '0.5', { fromValue: '1'}], position: 4500, duration: 500, easing: "easeOutBounce" },
            { id: "eid299", tween: [ "transform", "${_Text}", "scaleX", '1', { fromValue: '0.5'}], position: 1000, duration: 500, easing: "easeOutBounce" },
            { id: "eid300", tween: [ "transform", "${_Text}", "scaleX", '0.5', { fromValue: '1'}], position: 4500, duration: 500, easing: "easeOutBounce" }         ]
      }
   }
},
"Dot3": {
   version: "0.1.7",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.164",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      id: 'dot1Copy2',
      opacity: 0.5,
      rect: ['-110px','-110px','313px','313px','auto','auto'],
      fill: ['rgba(0,0,0,0)','img/dot.png','0px','0px']
   },
   {
      transform: {},
      type: 'text',
      align: 'center',
      id: 'Text',
      text: 'IDEATE',
      rect: ['-24px','27px','142px','auto','auto','auto'],
      font: ['franklin-gothic-ext-comp-urw, sans-serif',37,'rgba(255,255,255,1.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '93.9px'],
            ["style", "width", '93.9px']
         ],
         "${_Text}": [
            ["style", "line-height", '40px'],
            ["style", "letter-spacing", '2px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '-24.38px'],
            ["style", "font-size", '37px'],
            ["style", "top", '27px'],
            ["transform", "scaleY", '0.5'],
            ["style", "width", '141.78686923668px'],
            ["transform", "scaleX", '0.5']
         ],
         "${_dot1Copy2}": [
            ["style", "top", '-109.97px'],
            ["transform", "scaleY", '0.3'],
            ["style", "height", '313px'],
            ["transform", "scaleX", '0.3'],
            ["style", "opacity", '0.5'],
            ["style", "left", '-109.97px'],
            ["style", "width", '313px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5000,
         autoPlay: true,
         timeline: [
            { id: "eid309", tween: [ "transform", "${_Text}", "scaleY", '1.22', { fromValue: '0.5'}], position: 1000, duration: 500, easing: "easeOutBounce" },
            { id: "eid310", tween: [ "transform", "${_Text}", "scaleY", '0.5', { fromValue: '1.22'}], position: 4500, duration: 500, easing: "easeOutBounce" },
            { id: "eid208", tween: [ "transform", "${_dot1Copy2}", "scaleY", '0.3', { fromValue: '0.3'}], position: 0, duration: 0 },
            { id: "eid196", tween: [ "transform", "${_dot1Copy2}", "scaleY", '0.55', { fromValue: '0.3'}], position: 1000, duration: 500, easing: "easeOutBounce" },
            { id: "eid240", tween: [ "transform", "${_dot1Copy2}", "scaleY", '0.31', { fromValue: '0.55'}], position: 4500, duration: 500, easing: "easeOutBounce" },
            { id: "eid401", tween: [ "style", "${_dot1Copy2}", "opacity", '1', { fromValue: '0.5'}], position: 1000, duration: 500, easing: "easeOutBounce" },
            { id: "eid404", tween: [ "style", "${_dot1Copy2}", "opacity", '0.5', { fromValue: '1'}], position: 4500, duration: 500, easing: "easeOutBounce" },
            { id: "eid305", tween: [ "transform", "${_Text}", "scaleX", '1.22', { fromValue: '0.5'}], position: 1000, duration: 500, easing: "easeOutBounce" },
            { id: "eid306", tween: [ "transform", "${_Text}", "scaleX", '0.5', { fromValue: '1.22'}], position: 4500, duration: 500, easing: "easeOutBounce" },
            { id: "eid307", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "easeOutBounce" },
            { id: "eid308", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 500, easing: "easeOutBounce" },
            { id: "eid207", tween: [ "transform", "${_dot1Copy2}", "scaleX", '0.3', { fromValue: '0.3'}], position: 0, duration: 0 },
            { id: "eid195", tween: [ "transform", "${_dot1Copy2}", "scaleX", '0.55', { fromValue: '0.3'}], position: 1000, duration: 500, easing: "easeOutBounce" },
            { id: "eid239", tween: [ "transform", "${_dot1Copy2}", "scaleX", '0.31', { fromValue: '0.55'}], position: 4500, duration: 500, easing: "easeOutBounce" }         ]
      }
   }
},
"Dot4": {
   version: "0.1.7",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.164",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      id: 'dot1Copy3',
      opacity: 0.5,
      rect: ['-115px','-173px','313px','313px','auto','auto'],
      fill: ['rgba(0,0,0,0)','img/dot.png','0px','0px']
   },
   {
      font: ['franklin-gothic-ext-comp-urw, sans-serif',37,'rgba(255,255,255,1)','normal','none','normal'],
      type: 'text',
      id: 'Text4',
      text: 'KNOWLEDGE',
      align: 'center',
      rect: ['-23px','27px','140px','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_dot1Copy3}": [
            ["style", "top", '-109.55px'],
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.3'],
            ["style", "height", '313px'],
            ["transform", "scaleX", '0.3'],
            ["style", "opacity", '0.5'],
            ["style", "left", '-109.54px'],
            ["style", "width", '313px']
         ],
         "${_Text4}": [
            ["style", "line-height", '40px'],
            ["style", "letter-spacing", '2px'],
            ["transform", "scaleX", '0.5'],
            ["style", "opacity", '0'],
            ["style", "left", '-23px'],
            ["style", "width", '140px'],
            ["style", "top", '27px'],
            ["transform", "scaleY", '0.5'],
            ["style", "font-size", '37px']
         ],
         "${_Text}": [
            ["style", "letter-spacing", '2px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '19.35px'],
            ["style", "font-size", '32px'],
            ["style", "top", '253px'],
            ["transform", "scaleY", '0.5'],
            ["style", "width", '156.5px'],
            ["transform", "scaleX", '0.5']
         ],
         "${symbolSelector}": [
            ["style", "height", '93.9px'],
            ["style", "width", '93.9px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 19000,
         autoPlay: true,
         timeline: [
            { id: "eid326", tween: [ "transform", "${_Text4}", "scaleY", '0.9', { fromValue: '0.5'}], position: 1000, duration: 500, easing: "easeOutBounce" },
            { id: "eid330", tween: [ "transform", "${_Text4}", "scaleY", '1.3', { fromValue: '0.9'}], position: 4500, duration: 500, easing: "easeOutBounce" },
            { id: "eid436", tween: [ "transform", "${_Text4}", "scaleY", '0.6', { fromValue: '1.3'}], position: 8000, duration: 500, easing: "easeOutBounce" },
            { id: "eid440", tween: [ "transform", "${_Text4}", "scaleY", '1', { fromValue: '0.6'}], position: 11500, duration: 500, easing: "easeOutBounce" },
            { id: "eid453", tween: [ "transform", "${_Text4}", "scaleY", '0.75', { fromValue: '1'}], position: 15000, duration: 500, easing: "easeOutBounce" },
            { id: "eid465", tween: [ "transform", "${_Text4}", "scaleY", '0.5', { fromValue: '0.75'}], position: 18500, duration: 500, easing: "easeOutBounce" },
            { id: "eid320", tween: [ "style", "${_Text4}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "easeOutBounce" },
            { id: "eid427", tween: [ "style", "${_Text4}", "opacity", '0', { fromValue: '1'}], position: 8000, duration: 500, easing: "easeOutBounce" },
            { id: "eid447", tween: [ "style", "${_Text4}", "opacity", '1', { fromValue: '0'}], position: 11500, duration: 500, easing: "easeOutBounce" },
            { id: "eid467", tween: [ "style", "${_Text4}", "opacity", '0', { fromValue: '1'}], position: 18500, duration: 500, easing: "easeOutBounce" },
            { id: "eid205", tween: [ "transform", "${_dot1Copy3}", "scaleX", '0.3', { fromValue: '0.3'}], position: 0, duration: 0 },
            { id: "eid198", tween: [ "transform", "${_dot1Copy3}", "scaleX", '0.45', { fromValue: '0.3'}], position: 1000, duration: 500, easing: "easeOutBounce" },
            { id: "eid241", tween: [ "transform", "${_dot1Copy3}", "scaleX", '0.65', { fromValue: '0.45'}], position: 4500, duration: 500, easing: "easeOutBounce" },
            { id: "eid432", tween: [ "transform", "${_dot1Copy3}", "scaleX", '0.3', { fromValue: '0.65'}], position: 8000, duration: 500, easing: "easeOutBounce" },
            { id: "eid444", tween: [ "transform", "${_dot1Copy3}", "scaleX", '0.6', { fromValue: '0.3'}], position: 11500, duration: 500, easing: "easeOutBounce" },
            { id: "eid456", tween: [ "transform", "${_dot1Copy3}", "scaleX", '0.4', { fromValue: '0.6'}], position: 15000, duration: 500, easing: "easeOutBounce" },
            { id: "eid460", tween: [ "transform", "${_dot1Copy3}", "scaleX", '0.3', { fromValue: '0.4'}], position: 18500, duration: 500, easing: "easeOutBounce" },
            { id: "eid407", tween: [ "style", "${_dot1Copy3}", "opacity", '1', { fromValue: '0.5'}], position: 1000, duration: 500, easing: "easeOutBounce" },
            { id: "eid434", tween: [ "style", "${_dot1Copy3}", "opacity", '0.5', { fromValue: '1'}], position: 8000, duration: 500, easing: "easeOutBounce" },
            { id: "eid469", tween: [ "style", "${_dot1Copy3}", "opacity", '1', { fromValue: '0.5'}], position: 11500, duration: 500, easing: "easeOutBounce" },
            { id: "eid471", tween: [ "style", "${_dot1Copy3}", "opacity", '0.5', { fromValue: '1'}], position: 18500, duration: 500, easing: "easeOutBounce" },
            { id: "eid325", tween: [ "transform", "${_Text4}", "scaleX", '0.9', { fromValue: '0.5'}], position: 1000, duration: 500, easing: "easeOutBounce" },
            { id: "eid329", tween: [ "transform", "${_Text4}", "scaleX", '1.3', { fromValue: '0.9'}], position: 4500, duration: 500, easing: "easeOutBounce" },
            { id: "eid435", tween: [ "transform", "${_Text4}", "scaleX", '0.6', { fromValue: '1.3'}], position: 8000, duration: 500, easing: "easeOutBounce" },
            { id: "eid439", tween: [ "transform", "${_Text4}", "scaleX", '1', { fromValue: '0.6'}], position: 11500, duration: 500, easing: "easeOutBounce" },
            { id: "eid452", tween: [ "transform", "${_Text4}", "scaleX", '0.75', { fromValue: '1'}], position: 15000, duration: 500, easing: "easeOutBounce" },
            { id: "eid464", tween: [ "transform", "${_Text4}", "scaleX", '0.5', { fromValue: '0.75'}], position: 18500, duration: 500, easing: "easeOutBounce" },
            { id: "eid206", tween: [ "transform", "${_dot1Copy3}", "scaleY", '0.3', { fromValue: '0.3'}], position: 0, duration: 0 },
            { id: "eid197", tween: [ "transform", "${_dot1Copy3}", "scaleY", '0.45', { fromValue: '0.3'}], position: 1000, duration: 500, easing: "easeOutBounce" },
            { id: "eid242", tween: [ "transform", "${_dot1Copy3}", "scaleY", '0.65', { fromValue: '0.45'}], position: 4500, duration: 500, easing: "easeOutBounce" },
            { id: "eid433", tween: [ "transform", "${_dot1Copy3}", "scaleY", '0.3', { fromValue: '0.65'}], position: 8000, duration: 500, easing: "easeOutBounce" },
            { id: "eid445", tween: [ "transform", "${_dot1Copy3}", "scaleY", '0.6', { fromValue: '0.3'}], position: 11500, duration: 500, easing: "easeOutBounce" },
            { id: "eid457", tween: [ "transform", "${_dot1Copy3}", "scaleY", '0.4', { fromValue: '0.6'}], position: 15000, duration: 500, easing: "easeOutBounce" },
            { id: "eid461", tween: [ "transform", "${_dot1Copy3}", "scaleY", '0.3', { fromValue: '0.4'}], position: 18500, duration: 500, easing: "easeOutBounce" }         ]
      }
   }
},
"Dot5": {
   version: "0.1.7",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.164",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'dot1Copy4',
      type: 'image',
      rect: ['-172px','-170px','313px','313px','auto','auto'],
      fill: ['rgba(0,0,0,0)','img/dot.png','0px','0px']
   },
   {
      transform: [{1:0,0:0},{},{},['0.6','0.6']],
      type: 'text',
      align: 'center',
      id: 'Text7',
      text: 'CONSULTING',
      rect: ['-31px','24px','157px','auto','auto','auto'],
      font: ['franklin-gothic-ext-comp-urw, sans-serif',37,'rgba(255,255,255,1)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '93.9px'],
            ["style", "width", '93.9px']
         ],
         "${_Text7}": [
            ["style", "top", '23.66px'],
            ["style", "letter-spacing", '2px'],
            ["transform", "scaleY", '0.6'],
            ["transform", "scaleX", '0.6'],
            ["style", "opacity", '0'],
            ["style", "left", '-31.27px'],
            ["style", "width", '156.5px']
         ],
         "${_dot1Copy4}": [
            ["style", "top", '-109.54px'],
            ["transform", "scaleY", '0.3'],
            ["style", "height", '313px'],
            ["transform", "scaleX", '0.3'],
            ["style", "opacity", '0.5'],
            ["style", "left", '-109.54px'],
            ["style", "width", '313px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5000,
         autoPlay: true,
         timeline: [
            { id: "eid409", tween: [ "style", "${_dot1Copy4}", "opacity", '0.5', { fromValue: '0.5'}], position: 0, duration: 0, easing: "easeOutBounce" },
            { id: "eid411", tween: [ "style", "${_dot1Copy4}", "opacity", '1', { fromValue: '0.5'}], position: 4500, duration: 500, easing: "easeOutBounce" },
            { id: "eid209", tween: [ "transform", "${_dot1Copy4}", "scaleX", '0.3', { fromValue: '0.3'}], position: 0, duration: 0 },
            { id: "eid200", tween: [ "transform", "${_dot1Copy4}", "scaleX", '0.2', { fromValue: '0.3'}], position: 1000, duration: 500, easing: "easeOutBounce" },
            { id: "eid259", tween: [ "transform", "${_dot1Copy4}", "scaleX", '0.41', { fromValue: '0.2'}], position: 4500, duration: 500, easing: "easeOutBounce" },
            { id: "eid377", tween: [ "transform", "${_Text7}", "scaleX", '0.4', { fromValue: '0.6'}], position: 1000, duration: 500, easing: "easeOutBounce" },
            { id: "eid385", tween: [ "transform", "${_Text7}", "scaleX", '0.8', { fromValue: '0.4'}], position: 4500, duration: 500, easing: "easeOutBounce" },
            { id: "eid389", tween: [ "style", "${_Text7}", "opacity", '1', { fromValue: '0'}], position: 4500, duration: 500, easing: "easeOutBounce" },
            { id: "eid210", tween: [ "transform", "${_dot1Copy4}", "scaleY", '0.3', { fromValue: '0.3'}], position: 0, duration: 0 },
            { id: "eid199", tween: [ "transform", "${_dot1Copy4}", "scaleY", '0.2', { fromValue: '0.3'}], position: 1000, duration: 500, easing: "easeOutBounce" },
            { id: "eid260", tween: [ "transform", "${_dot1Copy4}", "scaleY", '0.41', { fromValue: '0.2'}], position: 4500, duration: 500, easing: "easeOutBounce" },
            { id: "eid380", tween: [ "transform", "${_Text7}", "scaleY", '0.4', { fromValue: '0.6'}], position: 1000, duration: 500, easing: "easeOutBounce" },
            { id: "eid386", tween: [ "transform", "${_Text7}", "scaleY", '0.8', { fromValue: '0.4'}], position: 4500, duration: 500, easing: "easeOutBounce" }         ]
      }
   }
},
"Dot6": {
   version: "0.1.7",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.164",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      id: 'dot1Copy5',
      opacity: 0.5,
      rect: ['-110px','-110px','313px','313px','auto','auto'],
      fill: ['rgba(0,0,0,0)','img/dot.png','0px','0px']
   },
   {
      font: ['franklin-gothic-ext-comp-urw, sans-serif',24,'rgba(255,255,255,1)','normal','none','normal'],
      type: 'text',
      id: 'Text6',
      text: 'NEW PRODUCT DESIGN',
      align: 'center',
      rect: ['0px','29px','93px','35px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text6}": [
            ["style", "line-height", '35px'],
            ["style", "letter-spacing", '2px'],
            ["transform", "scaleX", '0.71'],
            ["style", "opacity", '0'],
            ["style", "left", '-18.97px'],
            ["style", "width", '130.95634352993px'],
            ["style", "top", '15px'],
            ["transform", "scaleY", '0.71'],
            ["style", "height", '64.583374023438px'],
            ["style", "font-size", '37px']
         ],
         "${_dot1Copy5}": [
            ["style", "top", '-109.55px'],
            ["transform", "scaleY", '0.3'],
            ["style", "height", '313px'],
            ["transform", "scaleX", '0.3'],
            ["style", "opacity", '0.5'],
            ["style", "left", '-109.97px'],
            ["style", "width", '313px']
         ],
         "${symbolSelector}": [
            ["style", "height", '93.9px'],
            ["style", "width", '93.9px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5000,
         autoPlay: true,
         timeline: [
            { id: "eid204", tween: [ "transform", "${_dot1Copy5}", "scaleY", '0.3', { fromValue: '0.3'}], position: 0, duration: 0 },
            { id: "eid201", tween: [ "transform", "${_dot1Copy5}", "scaleY", '0.61', { fromValue: '0.3'}], position: 1000, duration: 500, easing: "easeOutBounce" },
            { id: "eid222", tween: [ "transform", "${_dot1Copy5}", "scaleY", '0.39', { fromValue: '0.61'}], position: 4500, duration: 500, easing: "easeOutBounce" },
            { id: "eid203", tween: [ "transform", "${_dot1Copy5}", "scaleX", '0.3', { fromValue: '0.3'}], position: 0, duration: 0 },
            { id: "eid202", tween: [ "transform", "${_dot1Copy5}", "scaleX", '0.61', { fromValue: '0.3'}], position: 1000, duration: 500, easing: "easeOutBounce" },
            { id: "eid221", tween: [ "transform", "${_dot1Copy5}", "scaleX", '0.39', { fromValue: '0.61'}], position: 4500, duration: 500, easing: "easeOutBounce" },
            { id: "eid367", tween: [ "style", "${_Text6}", "left", '-49px', { fromValue: '-18.97px'}], position: 1000, duration: 500, easing: "easeOutBounce" },
            { id: "eid362", tween: [ "transform", "${_Text6}", "scaleY", '1', { fromValue: '0.71'}], position: 1000, duration: 500, easing: "easeOutBounce" },
            { id: "eid356", tween: [ "transform", "${_Text6}", "scaleY", '0.62', { fromValue: '1'}], position: 4500, duration: 500, easing: "easeOutBounce" },
            { id: "eid361", tween: [ "transform", "${_Text6}", "scaleX", '1', { fromValue: '0.71'}], position: 1000, duration: 500, easing: "easeOutBounce" },
            { id: "eid355", tween: [ "transform", "${_Text6}", "scaleX", '0.62', { fromValue: '1'}], position: 4500, duration: 500, easing: "easeOutBounce" },
            { id: "eid414", tween: [ "style", "${_dot1Copy5}", "opacity", '1', { fromValue: '0.5'}], position: 1000, duration: 500, easing: "easeOutBounce" },
            { id: "eid417", tween: [ "style", "${_dot1Copy5}", "opacity", '0.5', { fromValue: '1'}], position: 4500, duration: 500, easing: "easeOutBounce" },
            { id: "eid368", tween: [ "style", "${_Text6}", "width", '190.91667175293px', { fromValue: '130.95634352993px'}], position: 1000, duration: 500, easing: "easeOutBounce" },
            { id: "eid351", tween: [ "style", "${_Text6}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "easeOutBounce" },
            { id: "eid354", tween: [ "style", "${_Text6}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 500, easing: "easeOutBounce" }         ]
      }
   }
},
"Handcart": {
   version: "0.1.7",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.164",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'solar',
      type: 'image',
      rect: ['-125px','-125px','250px','250px','auto','auto'],
      fill: ['rgba(0,0,0,0)','img/solar.png','0px','0px']
   },
   {
      font: ['\"freight-text-pro\", sans-serif',18,'rgba(132,182,181,1)','normal','none','normal'],
      type: 'text',
      id: 'solar_text',
      text: 'Ihangane Solar',
      align: 'center',
      rect: ['-113px','125px','226px','27px','auto','auto']
   },
   {
      id: 'peacecorps',
      type: 'image',
      rect: ['-125px','-125px','250px','250px','auto','auto'],
      fill: ['rgba(0,0,0,0)','img/peacecorps.png','0px','0px']
   },
   {
      font: ['\"freight-text-pro\", sans-serif',18,'rgba(132,182,181,1)','normal','none','normal'],
      type: 'text',
      id: 'peacecorps_text',
      text: 'Peace Corps',
      align: 'center',
      rect: ['-113px','125px','226px','27px','auto','auto']
   },
   {
      id: 'wella',
      type: 'image',
      rect: ['-125px','-125px','250px','250px','auto','auto'],
      fill: ['rgba(0,0,0,0)','img/wella.png','0px','0px']
   },
   {
      font: ['\"freight-text-pro\", sans-serif',18,'rgba(132,182,181,1)','normal','none','normal'],
      type: 'text',
      id: 'wella_text',
      text: 'Human Powered Water Transport',
      align: 'center',
      rect: ['-113px','127px','226px','27px','auto','auto']
   },
   {
      id: 'pilotmethod',
      type: 'image',
      rect: ['-125px','-125px','250px','250px','auto','auto'],
      fill: ['rgba(0,0,0,0)','img/simpa.png','0px','0px']
   },
   {
      font: ['\"freight-text-pro\", sans-serif',18,'rgba(132,182,181,1)','normal','none','normal'],
      type: 'text',
      id: 'pilotmethod_text',
      text: 'Pilot Methodology Kit',
      align: 'center',
      rect: ['-113px','125px','226px','27px','auto','auto']
   },
   {
      id: 'worldbank',
      type: 'image',
      rect: ['-125px','-125px','250px','250px','auto','auto'],
      fill: ['rgba(0,0,0,0)','img/worldbank.png','0px','0px']
   },
   {
      font: ['\"freight-text-pro\", sans-serif',18,'rgba(132,182,181,1)','normal','none','normal'],
      type: 'text',
      id: 'worldbank_text',
      text: 'Clean Energy Adoption',
      align: 'center',
      rect: ['-113px','127px','226px','27px','auto','auto']
   },
   {
      id: 'handcart',
      type: 'image',
      rect: ['-125px','-125px','250px','250px','auto','auto'],
      fill: ['rgba(0,0,0,0)','img/handcart.png','0px','0px']
   },
   {
      font: ['\"freight-text-pro\", sans-serif',18,'rgba(132,182,181,1)','normal','none','normal'],
      type: 'text',
      id: 'handcart_text',
      text: 'Tanzanian Handcart',
      align: 'center',
      rect: ['-113px','125px','226px','27px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_handcart_text}": [
            ["transform", "scaleX", '1px'],
            ["style", "opacity", '0'],
            ["style", "left", '-113px'],
            ["style", "width", '225.89999389648px'],
            ["style", "top", '125px'],
            ["transform", "scaleY", '1px'],
            ["style", "height", '26.766407012939px'],
            ["style", "font-family", '"freight-text-pro", sans-serif'],
            ["style", "font-size", '18px'],
            ["color", "color", 'rgba(34,34,34,1.00)']
         ],
         "${_wella_text}": [
            ["style", "line-height", '20px'],
            ["transform", "scaleX", '1px'],
            ["style", "opacity", '0'],
            ["style", "left", '-113px'],
            ["style", "width", '225.89999389648px'],
            ["style", "top", '127px'],
            ["transform", "scaleY", '1px'],
            ["style", "height", '26.766407012939px'],
            ["style", "font-family", '"freight-text-pro", sans-serif'],
            ["style", "font-size", '18px'],
            ["color", "color", 'rgba(34,34,34,1.00)']
         ],
         "${_pilotmethod}": [
            ["style", "top", '-125px'],
            ["transform", "scaleY", '0.9'],
            ["transform", "scaleX", '0.9'],
            ["style", "opacity", '0'],
            ["style", "left", '-125px']
         ],
         "${_handcart}": [
            ["style", "top", '-125px'],
            ["transform", "scaleY", '0.9'],
            ["transform", "scaleX", '0.9'],
            ["style", "opacity", '0'],
            ["style", "left", '-125px'],
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_worldbank_text}": [
            ["style", "line-height", '20px'],
            ["transform", "scaleX", '1px'],
            ["style", "opacity", '0'],
            ["style", "left", '-113px'],
            ["style", "width", '225.89999389648px'],
            ["style", "top", '127px'],
            ["transform", "scaleY", '1px'],
            ["style", "height", '26.766407012939px'],
            ["style", "font-family", '"freight-text-pro", sans-serif'],
            ["color", "color", 'rgba(34,34,34,1.00)'],
            ["style", "font-size", '18px']
         ],
         "${_worldbank}": [
            ["style", "top", '-125px'],
            ["transform", "scaleY", '0.9'],
            ["transform", "scaleX", '0.9'],
            ["style", "opacity", '0'],
            ["style", "left", '-125px']
         ],
         "${_solar_text}": [
            ["transform", "scaleX", '1px'],
            ["style", "opacity", '0'],
            ["style", "left", '-113px'],
            ["style", "width", '225.89999389648px'],
            ["style", "top", '125px'],
            ["transform", "scaleY", '1px'],
            ["style", "height", '26.766407012939px'],
            ["style", "font-family", '"freight-text-pro", sans-serif'],
            ["color", "color", 'rgba(34,34,34,1.00)'],
            ["style", "font-size", '18px']
         ],
         "${_solar}": [
            ["style", "top", '-125px'],
            ["transform", "scaleY", '0.9'],
            ["transform", "scaleX", '0.9'],
            ["style", "opacity", '0'],
            ["style", "left", '-125px']
         ],
         "${symbolSelector}": [
            ["style", "height", '0px'],
            ["style", "width", '0px']
         ],
         "${_pilotmethod_text}": [
            ["transform", "scaleX", '1px'],
            ["style", "opacity", '0'],
            ["style", "left", '-113px'],
            ["style", "width", '225.89999389648px'],
            ["style", "top", '125px'],
            ["transform", "scaleY", '1px'],
            ["style", "height", '26.766407012939px'],
            ["style", "font-family", '"freight-text-pro", sans-serif'],
            ["color", "color", 'rgba(34,34,34,1.00)'],
            ["style", "font-size", '18px']
         ],
         "${_peacecorps_text}": [
            ["transform", "scaleX", '1px'],
            ["style", "opacity", '0'],
            ["style", "left", '-113px'],
            ["style", "width", '225.89999389648px'],
            ["style", "top", '125px'],
            ["transform", "scaleY", '1px'],
            ["style", "height", '26.766407012939px'],
            ["style", "font-family", '"freight-text-pro", sans-serif'],
            ["style", "font-size", '18px'],
            ["color", "color", 'rgba(34,34,34,1.00)']
         ],
         "${_wella}": [
            ["style", "top", '-125px'],
            ["transform", "scaleY", '0.9'],
            ["transform", "scaleX", '0.9'],
            ["style", "opacity", '0'],
            ["style", "left", '-125px']
         ],
         "${_peacecorps}": [
            ["style", "top", '-125px'],
            ["transform", "scaleY", '0.9'],
            ["transform", "scaleX", '0.9'],
            ["style", "opacity", '0'],
            ["style", "left", '-125px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 23000,
         autoPlay: true,
         timeline: [
            { id: "eid488", tween: [ "style", "${_handcart_text}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 1000, easing: "easeOutQuad" },
            { id: "eid490", tween: [ "style", "${_handcart_text}", "opacity", '0', { fromValue: '1'}], position: 5000, duration: 500, easing: "easeOutQuad" },
            { id: "eid634", tween: [ "style", "${_wella}", "opacity", '1', { fromValue: '0'}], position: 12000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid636", tween: [ "style", "${_wella}", "opacity", '0', { fromValue: '1'}], position: 15500, duration: 500, easing: "easeOutQuad" },
            { id: "eid613", tween: [ "style", "${_pilotmethod_text}", "opacity", '1', { fromValue: '0'}], position: 8500, duration: 1000, easing: "easeOutQuad" },
            { id: "eid614", tween: [ "style", "${_pilotmethod_text}", "opacity", '0', { fromValue: '1'}], position: 12000, duration: 500, easing: "easeOutQuad" },
            { id: "eid570", tween: [ "transform", "${_solar}", "scaleY", '1', { fromValue: '0.9'}], position: 19000, duration: 3500, easing: "easeOutQuad" },
            { id: "eid572", tween: [ "transform", "${_solar}", "scaleY", '0.9', { fromValue: '1'}], position: 22500, duration: 500, easing: "easeOutQuad" },
            { id: "eid569", tween: [ "transform", "${_solar}", "scaleX", '1', { fromValue: '0.9'}], position: 19000, duration: 3500, easing: "easeOutQuad" },
            { id: "eid571", tween: [ "transform", "${_solar}", "scaleX", '0.9', { fromValue: '1'}], position: 22500, duration: 500, easing: "easeOutQuad" },
            { id: "eid659", tween: [ "transform", "${_worldbank}", "scaleY", '1', { fromValue: '0.9'}], position: 5000, duration: 3500, easing: "easeOutQuad" },
            { id: "eid667", tween: [ "transform", "${_worldbank}", "scaleY", '0.9', { fromValue: '1'}], position: 8500, duration: 500, easing: "easeOutQuad" },
            { id: "eid575", tween: [ "style", "${_solar_text}", "opacity", '1', { fromValue: '0'}], position: 19000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid576", tween: [ "style", "${_solar_text}", "opacity", '0', { fromValue: '1'}], position: 22500, duration: 500, easing: "easeOutQuad" },
            { id: "eid649", tween: [ "style", "${_wella_text}", "opacity", '1', { fromValue: '0'}], position: 12000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid650", tween: [ "style", "${_wella_text}", "opacity", '0', { fromValue: '1'}], position: 15500, duration: 500, easing: "easeOutQuad" },
            { id: "eid580", tween: [ "style", "${_peacecorps}", "opacity", '1', { fromValue: '0'}], position: 15500, duration: 1000, easing: "easeOutQuad" },
            { id: "eid593", tween: [ "style", "${_peacecorps}", "opacity", '0', { fromValue: '1'}], position: 19000, duration: 500, easing: "easeOutQuad" },
            { id: "eid668", tween: [ "style", "${_worldbank_text}", "opacity", '1', { fromValue: '0'}], position: 5000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid669", tween: [ "style", "${_worldbank_text}", "opacity", '0', { fromValue: '1'}], position: 8500, duration: 500, easing: "easeOutQuad" },
            { id: "eid588", tween: [ "transform", "${_peacecorps}", "scaleY", '0.99763', { fromValue: '0.9'}], position: 15500, duration: 3500, easing: "easeOutQuad" },
            { id: "eid590", tween: [ "transform", "${_peacecorps}", "scaleY", '0.9', { fromValue: '0.99763'}], position: 19000, duration: 500, easing: "easeOutQuad" },
            { id: "eid655", tween: [ "style", "${_worldbank}", "opacity", '1', { fromValue: '0.000000'}], position: 5000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid661", tween: [ "style", "${_worldbank}", "opacity", '0', { fromValue: '1'}], position: 8500, duration: 500, easing: "easeOutQuad" },
            { id: "eid643", tween: [ "transform", "${_wella}", "scaleX", '1', { fromValue: '0.9'}], position: 12000, duration: 3500, easing: "easeOutQuad" },
            { id: "eid647", tween: [ "transform", "${_wella}", "scaleX", '0.9', { fromValue: '1'}], position: 15500, duration: 500, easing: "easeOutQuad" },
            { id: "eid623", tween: [ "transform", "${_pilotmethod}", "scaleX", '1', { fromValue: '0.9'}], position: 8500, duration: 3500, easing: "easeOutQuad" },
            { id: "eid627", tween: [ "transform", "${_pilotmethod}", "scaleX", '0.9', { fromValue: '1'}], position: 12000, duration: 500, easing: "easeOutQuad" },
            { id: "eid658", tween: [ "transform", "${_worldbank}", "scaleX", '1', { fromValue: '0.9'}], position: 5000, duration: 3500, easing: "easeOutQuad" },
            { id: "eid666", tween: [ "transform", "${_worldbank}", "scaleX", '0.9', { fromValue: '1'}], position: 8500, duration: 500, easing: "easeOutQuad" },
            { id: "eid620", tween: [ "style", "${_pilotmethod}", "opacity", '1', { fromValue: '0'}], position: 8500, duration: 1000, easing: "easeOutQuad" },
            { id: "eid631", tween: [ "style", "${_pilotmethod}", "opacity", '0', { fromValue: '1'}], position: 12000, duration: 500, easing: "easeOutQuad" },
            { id: "eid518", tween: [ "transform", "${_handcart}", "scaleY", '1', { fromValue: '0.9'}], position: 1500, duration: 3500, easing: "easeOutQuad" },
            { id: "eid496", tween: [ "transform", "${_handcart}", "scaleY", '0.95', { fromValue: '1'}], position: 5000, duration: 500, easing: "easeOutQuad" },
            { id: "eid483", tween: [ "style", "${_handcart}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 1000, easing: "easeOutQuad" },
            { id: "eid497", tween: [ "style", "${_handcart}", "opacity", '0.0035358297413794', { fromValue: '1'}], position: 5000, duration: 500, easing: "easeOutQuad" },
            { id: "eid594", tween: [ "style", "${_peacecorps_text}", "opacity", '1', { fromValue: '0'}], position: 15500, duration: 1000, easing: "easeOutQuad" },
            { id: "eid595", tween: [ "style", "${_peacecorps_text}", "opacity", '0', { fromValue: '1'}], position: 19000, duration: 500, easing: "easeOutQuad" },
            { id: "eid587", tween: [ "transform", "${_peacecorps}", "scaleX", '0.99763', { fromValue: '0.9'}], position: 15500, duration: 3500, easing: "easeOutQuad" },
            { id: "eid589", tween: [ "transform", "${_peacecorps}", "scaleX", '0.9', { fromValue: '0.99763'}], position: 19000, duration: 500, easing: "easeOutQuad" },
            { id: "eid644", tween: [ "transform", "${_wella}", "scaleY", '1', { fromValue: '0.9'}], position: 12000, duration: 3500, easing: "easeOutQuad" },
            { id: "eid648", tween: [ "transform", "${_wella}", "scaleY", '0.9', { fromValue: '1'}], position: 15500, duration: 500, easing: "easeOutQuad" },
            { id: "eid564", tween: [ "style", "${_solar}", "opacity", '1', { fromValue: '0.000000'}], position: 19000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid574", tween: [ "style", "${_solar}", "opacity", '0', { fromValue: '1'}], position: 22500, duration: 500, easing: "easeOutQuad" },
            { id: "eid624", tween: [ "transform", "${_pilotmethod}", "scaleY", '1', { fromValue: '0.9'}], position: 8500, duration: 3500, easing: "easeOutQuad" },
            { id: "eid628", tween: [ "transform", "${_pilotmethod}", "scaleY", '0.9', { fromValue: '1'}], position: 12000, duration: 500, easing: "easeOutQuad" },
            { id: "eid517", tween: [ "transform", "${_handcart}", "scaleX", '1', { fromValue: '0.9'}], position: 1500, duration: 3500, easing: "easeOutQuad" },
            { id: "eid495", tween: [ "transform", "${_handcart}", "scaleX", '0.95', { fromValue: '1'}], position: 5000, duration: 500, easing: "easeOutQuad" }         ]
      }
   }
},
"Words": {
   version: "0.1.7",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.164",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      font: ['\"franklin-gothic-ext-comp-urw\", sans-serif',50,'rgba(132,182,181,1.00)','400','none','normal'],
      rect: ['0px','0px','253px','auto','auto','auto'],
      type: 'text',
      id: 'DESIGN',
      text: 'DESIGN',
      align: 'center',
      tag: 'h1'
   },
   {
      font: ['\"franklin-gothic-ext-comp-urw\", sans-serif',50,'rgba(132,182,181,1.00)','400','none','normal'],
      rect: ['0px','0px','253px','auto','auto','auto'],
      type: 'text',
      id: 'EDUCATE',
      text: 'EDUCATE',
      align: 'center',
      tag: 'h1'
   },
   {
      font: ['\"franklin-gothic-ext-comp-urw\", sans-serif',50,'rgba(132,182,181,1.00)','400','none','normal'],
      rect: ['0px','0px','253px','auto','auto','auto'],
      type: 'text',
      id: 'IDEATE',
      text: 'IDEATE',
      align: 'center',
      tag: 'h1'
   },
   {
      font: ['\"franklin-gothic-ext-comp-urw\", sans-serif',50,'rgba(132,182,181,1.00)','400','none','normal'],
      rect: ['0px','0px','253px','auto','auto','auto'],
      type: 'text',
      id: 'ANALYZE',
      text: 'ANALYZE',
      align: 'center',
      tag: 'h1'
   },
   {
      font: ['\"franklin-gothic-ext-comp-urw\", sans-serif',50,'rgba(132,182,181,1.00)','400','none','normal'],
      rect: ['0px','0px','253px','auto','auto','auto'],
      type: 'text',
      id: 'INNOVATE',
      text: 'INNOVATE',
      align: 'center',
      tag: 'h1'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_DESIGN}": [
            ["color", "color", 'rgba(132,182,181,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "font-size", '50px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'center'],
            ["style", "font-weight", '400'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", '"franklin-gothic-ext-comp-urw", sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "width", '253px']
         ],
         "${symbolSelector}": [
            ["style", "height", '62px'],
            ["style", "width", '253px']
         ],
         "${_INNOVATE}": [
            ["color", "color", 'rgba(132,182,181,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "font-size", '50px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'center'],
            ["style", "width", '253px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", '"franklin-gothic-ext-comp-urw", sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "font-weight", '400']
         ],
         "${_EDUCATE}": [
            ["color", "color", 'rgba(132,182,181,1.00)'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '0px'],
            ["style", "font-size", '50px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'center'],
            ["style", "font-weight", '400'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", '"franklin-gothic-ext-comp-urw", sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "width", '253px']
         ],
         "${_ANALYZE}": [
            ["color", "color", 'rgba(132,182,181,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "font-size", '50px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'center'],
            ["style", "width", '253px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", '"franklin-gothic-ext-comp-urw", sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "font-weight", '400']
         ],
         "${_IDEATE}": [
            ["color", "color", 'rgba(132,182,181,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "font-size", '50px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'center'],
            ["style", "font-weight", '400'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", '"franklin-gothic-ext-comp-urw", sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "width", '253px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 22500,
         autoPlay: true,
         timeline: [
            { id: "eid692", tween: [ "style", "${_DESIGN}", "opacity", '1', { fromValue: '0'}], position: 18500, duration: 500 },
            { id: "eid693", tween: [ "style", "${_DESIGN}", "opacity", '0', { fromValue: '1'}], position: 22000, duration: 500 },
            { id: "eid686", tween: [ "style", "${_ANALYZE}", "opacity", '1', { fromValue: '0'}], position: 8000, duration: 500 },
            { id: "eid687", tween: [ "style", "${_ANALYZE}", "opacity", '0', { fromValue: '1'}], position: 11500, duration: 500 },
            { id: "eid684", tween: [ "style", "${_INNOVATE}", "opacity", '1', { fromValue: '0'}], position: 4500, duration: 500 },
            { id: "eid685", tween: [ "style", "${_INNOVATE}", "opacity", '0', { fromValue: '1'}], position: 8000, duration: 500 },
            { id: "eid690", tween: [ "style", "${_EDUCATE}", "opacity", '1', { fromValue: '0.000000'}], position: 15000, duration: 500 },
            { id: "eid691", tween: [ "style", "${_EDUCATE}", "opacity", '0', { fromValue: '1'}], position: 18500, duration: 500 },
            { id: "eid688", tween: [ "style", "${_IDEATE}", "opacity", '1', { fromValue: '0'}], position: 11500, duration: 500 },
            { id: "eid689", tween: [ "style", "${_IDEATE}", "opacity", '0', { fromValue: '1'}], position: 15000, duration: 500 }         ]
      }
   }
},
"Engineer": {
   version: "0.1.7",
   minimumCompatibleVersion: "0.1.7",
   build: "0.11.0.164",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      font: ['\"franklin-gothic-ext-comp-urw\", sans-serif',50,'rgba(132,182,181,1.00)','400','none','normal'],
      rect: ['160px','50px','253px','auto','auto','auto'],
      type: 'text',
      id: 'ENGINEER',
      text: 'ENGINEER',
      align: 'center',
      tag: 'h1'
   },
   {
      type: 'image',
      id: 'dot1Copy',
      opacity: 0.5,
      rect: ['22px','243px','313px','313px','auto','auto'],
      fill: ['rgba(0,0,0,0)','img/dot.png','0px','0px']
   },
   {
      type: 'text',
      rect: ['101px','361px','157px','auto','auto','auto'],
      text: 'COMPETITOR ANALYSIS',
      id: 'TextCopy',
      align: 'center',
      opacity: 1,
      transform: {},
      font: ['franklin-gothic-ext-comp-urw, sans-serif',37,'rgba(255,255,255,1.00)','normal','none','normal']
   },
   {
      type: 'image',
      id: 'dot1Copy2',
      opacity: 0.5,
      rect: ['132px','94px','313px','313px','auto','auto'],
      fill: ['rgba(0,0,0,0)','img/dot.png','0px','0px']
   },
   {
      type: 'text',
      rect: ['211px','211px','157px','auto','auto','auto'],
      text: 'CONCEPTUAL DESIGN',
      id: 'TextCopy2',
      align: 'center',
      opacity: 1,
      transform: {},
      font: ['franklin-gothic-ext-comp-urw, sans-serif',37,'rgba(255,255,255,1.00)','normal','none','normal']
   },
   {
      type: 'image',
      id: 'dot1Copy4',
      opacity: 0.5,
      rect: ['355px','82px','313px','313px','auto','auto'],
      fill: ['rgba(0,0,0,0)','img/dot.png','0px','0px']
   },
   {
      transform: [{1:0,0:0},{},{},['0.3','0.3']],
      type: 'text',
      align: 'center',
      id: 'TextCopy4',
      text: 'CAD DEVELOPMENT',
      rect: ['433px','199px','157px','auto','auto','auto'],
      font: ['franklin-gothic-ext-comp-urw, sans-serif',37,'rgba(255,255,255,1.00)','normal','none','normal']
   },
   {
      type: 'image',
      id: 'dot1Copy5',
      opacity: 0.5,
      rect: ['406px','226px','313px','313px','auto','auto'],
      fill: ['rgba(0,0,0,0)','img/dot.png','0px','0px']
   },
   {
      type: 'text',
      rect: ['485px','363px','157px','auto','auto','auto'],
      text: 'USER TESTING',
      id: 'TextCopy5',
      align: 'center',
      opacity: 1,
      transform: {},
      font: ['franklin-gothic-ext-comp-urw, sans-serif',37,'rgba(255,255,255,1.00)','normal','none','normal']
   },
   {
      type: 'image',
      id: 'dot1Copy3',
      opacity: 0.5,
      rect: ['234px','226px','313px','313px','auto','auto'],
      fill: ['rgba(0,0,0,0)','img/dot.png','0px','0px']
   },
   {
      type: 'text',
      rect: ['312px','363px','157px','auto','auto','auto'],
      text: 'PROTOTYPING',
      id: 'TextCopy3',
      align: 'center',
      opacity: 1,
      transform: {},
      font: ['franklin-gothic-ext-comp-urw, sans-serif',37,'rgba(255,255,255,1.00)','normal','none','normal']
   },
   {
      transform: [{1:0,0:0},{},{},['0.2','0.2']],
      rect: ['-61px','117px','313px','313px','auto','auto'],
      id: 'dot1',
      opacity: 0.5,
      type: 'image',
      fill: ['rgba(0,0,0,0)','img/dot.png','0px','0px']
   },
   {
      type: 'text',
      rect: ['18px','234px','157px','auto','auto','auto'],
      text: 'USER RESEARCH',
      id: 'Text',
      align: 'center',
      opacity: 1,
      transform: {},
      font: ['franklin-gothic-ext-comp-urw, sans-serif',37,'rgba(255,255,255,1.00)','normal','none','normal']
   },
   {
      type: 'image',
      id: 'handcart',
      opacity: 1,
      rect: ['628px','136px','250px','250px','auto','auto'],
      fill: ['rgba(0,0,0,0)','img/handcart.png','0px','0px']
   },
   {
      font: ['\"freight-text-pro\", sans-serif',18,'rgba(132,182,181,1)','normal','none','normal'],
      type: 'text',
      id: 'handcart_text',
      text: 'Tanzanian Handcart',
      align: 'center',
      rect: ['640px','377px','226px','27px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_TextCopy4}": [
            ["style", "line-height", '40px'],
            ["style", "letter-spacing", '2px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '433.22px'],
            ["style", "font-size", '37px'],
            ["style", "top", '199px'],
            ["transform", "scaleY", '0.3'],
            ["transform", "scaleX", '0.3'],
            ["style", "width", '156.5px']
         ],
         "${_TextCopy3}": [
            ["style", "line-height", '40px'],
            ["style", "letter-spacing", '2px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '311.52px'],
            ["style", "font-size", '37px'],
            ["style", "top", '363px'],
            ["transform", "scaleY", '0.3'],
            ["style", "width", '156.5px'],
            ["transform", "scaleX", '0.3']
         ],
         "${_ENGINEER}": [
            ["style", "font-weight", '400'],
            ["color", "color", 'rgba(132,182,181,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '159.97px'],
            ["style", "font-size", '50px'],
            ["style", "top", '50.35px'],
            ["style", "text-align", 'center'],
            ["transform", "scaleY", '1'],
            ["style", "width", '253px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", '"franklin-gothic-ext-comp-urw", sans-serif'],
            ["style", "text-decoration", 'none'],
            ["transform", "scaleX", '1']
         ],
         "${_dot1Copy4}": [
            ["style", "top", '82.17px'],
            ["transform", "scaleY", '0.2'],
            ["transform", "scaleX", '0.2'],
            ["style", "height", '313px'],
            ["style", "opacity", '0.5'],
            ["style", "left", '354.77px'],
            ["style", "width", '313px']
         ],
         "${_dot1Copy3}": [
            ["style", "top", '226.27px'],
            ["transform", "scaleY", '0.2'],
            ["transform", "scaleX", '0.2'],
            ["style", "height", '313px'],
            ["style", "opacity", '0.5'],
            ["style", "left", '233.95px'],
            ["style", "width", '313px']
         ],
         "${_handcart}": [
            ["style", "top", '136.03px'],
            ["transform", "scaleY", '0.9'],
            ["transform", "scaleX", '0.9'],
            ["style", "opacity", '1'],
            ["style", "left", '627.58px'],
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_dot1}": [
            ["style", "top", '117.03px'],
            ["transform", "scaleY", '0.2'],
            ["transform", "scaleX", '0.2'],
            ["style", "height", '313px'],
            ["style", "opacity", '0.5'],
            ["style", "left", '-60.67px'],
            ["style", "width", '313px']
         ],
         "${_dot1Copy2}": [
            ["style", "top", '94.22px'],
            ["transform", "scaleY", '0.2'],
            ["transform", "scaleX", '0.2'],
            ["style", "height", '313px'],
            ["style", "opacity", '0.5'],
            ["style", "left", '132.1px'],
            ["style", "width", '313px']
         ],
         "${_dot1Copy5}": [
            ["style", "top", '226.45px'],
            ["transform", "scaleY", '0.2'],
            ["transform", "scaleX", '0.2'],
            ["style", "height", '313px'],
            ["style", "opacity", '0.5'],
            ["style", "left", '406.45px'],
            ["style", "width", '313px']
         ],
         "${symbolSelector}": [
            ["style", "height", '62px'],
            ["style", "width", '253px']
         ],
         "${_Text}": [
            ["style", "line-height", '40px'],
            ["style", "letter-spacing", '2px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '17.87px'],
            ["style", "font-size", '37px'],
            ["style", "top", '234px'],
            ["transform", "scaleY", '0.3'],
            ["transform", "scaleX", '0.3'],
            ["style", "width", '156.5px']
         ],
         "${_dot1Copy}": [
            ["style", "top", '243.45px'],
            ["transform", "scaleY", '0.2'],
            ["transform", "scaleX", '0.2'],
            ["style", "height", '313px'],
            ["style", "opacity", '0.5'],
            ["style", "left", '22.31px'],
            ["style", "width", '313px']
         ],
         "${_TextCopy5}": [
            ["style", "line-height", '40px'],
            ["style", "letter-spacing", '2px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '484.52px'],
            ["style", "font-size", '37px'],
            ["style", "top", '363px'],
            ["transform", "scaleY", '0.4'],
            ["style", "width", '156.5px'],
            ["transform", "scaleX", '0.4']
         ],
         "${_TextCopy2}": [
            ["style", "line-height", '40px'],
            ["style", "letter-spacing", '2px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '211.22px'],
            ["style", "font-size", '37px'],
            ["style", "top", '211px'],
            ["transform", "scaleY", '0.3'],
            ["transform", "scaleX", '0.3'],
            ["style", "width", '156.5px']
         ],
         "${_TextCopy}": [
            ["style", "line-height", '40px'],
            ["style", "letter-spacing", '2px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '100.87px'],
            ["style", "font-size", '37px'],
            ["style", "top", '361px'],
            ["transform", "scaleY", '0.3'],
            ["style", "width", '156.5px'],
            ["transform", "scaleX", '0.3']
         ],
         "${_handcart_text}": [
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '640px'],
            ["style", "width", '225.89999389648px'],
            ["style", "top", '377px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '26.766407012939px'],
            ["style", "font-family", 'freight-text-pro, sans-serif'],
            ["color", "color", 'rgba(34,34,34,1)'],
            ["style", "font-size", '18px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 6000,
         autoPlay: true,
         timeline: [
            { id: "eid800", tween: [ "transform", "${_dot1Copy5}", "scaleX", '0.4', { fromValue: '0.2'}], position: 2000, duration: 500 },
            { id: "eid754", tween: [ "transform", "${_dot1Copy2}", "scaleY", '0.4', { fromValue: '0.2'}], position: 2000, duration: 500 },
            { id: "eid785", tween: [ "transform", "${_dot1Copy4}", "scaleX", '0.3', { fromValue: '0.2'}], position: 2000, duration: 500 },
            { id: "eid815", tween: [ "transform", "${_TextCopy5}", "scaleY", '0.7', { fromValue: '0.4'}], position: 2000, duration: 500 },
            { id: "eid753", tween: [ "transform", "${_dot1Copy2}", "scaleX", '0.4', { fromValue: '0.2'}], position: 2000, duration: 500 },
            { id: "eid786", tween: [ "transform", "${_dot1Copy4}", "scaleY", '0.3', { fromValue: '0.2'}], position: 2000, duration: 500 },
            { id: "eid733", tween: [ "transform", "${_dot1Copy}", "scaleX", '0.3', { fromValue: '0.2'}], position: 2000, duration: 500 },
            { id: "eid730", tween: [ "transform", "${_TextCopy}", "scaleY", '0.5', { fromValue: '0.3'}], position: 2000, duration: 500 },
            { id: "eid780", tween: [ "transform", "${_dot1Copy3}", "scaleY", '0.5', { fromValue: '0.2'}], position: 2000, duration: 500 },
            { id: "eid796", tween: [ "transform", "${_TextCopy4}", "scaleX", '0.5', { fromValue: '0.3'}], position: 2000, duration: 500 },
            { id: "eid779", tween: [ "transform", "${_dot1Copy3}", "scaleX", '0.5', { fromValue: '0.2'}], position: 2000, duration: 500 },
            { id: "eid728", tween: [ "style", "${_TextCopy}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500 },
            { id: "eid712", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0.000000'}], position: 2000, duration: 500 },
            { id: "eid694", tween: [ "style", "${_ENGINEER}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500 },
            { id: "eid695", tween: [ "style", "${_ENGINEER}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 500 },
            { id: "eid801", tween: [ "transform", "${_dot1Copy5}", "scaleY", '0.4', { fromValue: '0.2'}], position: 2000, duration: 500 },
            { id: "eid764", tween: [ "style", "${_TextCopy2}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500 },
            { id: "eid776", tween: [ "style", "${_TextCopy3}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500 },
            { id: "eid734", tween: [ "transform", "${_dot1Copy}", "scaleY", '0.3', { fromValue: '0.2'}], position: 2000, duration: 500 },
            { id: "eid783", tween: [ "transform", "${_TextCopy3}", "scaleX", '0.9', { fromValue: '0.3'}], position: 2000, duration: 500 },
            { id: "eid793", tween: [ "style", "${_TextCopy4}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500 },
            { id: "eid814", tween: [ "transform", "${_TextCopy5}", "scaleX", '0.7', { fromValue: '0.4'}], position: 2000, duration: 500 },
            { id: "eid709", tween: [ "transform", "${_dot1}", "scaleY", '0.3', { fromValue: '0.2'}], position: 2000, duration: 500 },
            { id: "eid729", tween: [ "transform", "${_TextCopy}", "scaleX", '0.5', { fromValue: '0.3'}], position: 2000, duration: 500 },
            { id: "eid718", tween: [ "transform", "${_Text}", "scaleY", '0.5', { fromValue: '0.3'}], position: 2000, duration: 500 },
            { id: "eid797", tween: [ "transform", "${_TextCopy4}", "scaleY", '0.5', { fromValue: '0.3'}], position: 2000, duration: 500 },
            { id: "eid768", tween: [ "transform", "${_TextCopy2}", "scaleY", '0.7', { fromValue: '0.3'}], position: 2000, duration: 500 },
            { id: "eid708", tween: [ "transform", "${_dot1}", "scaleX", '0.3', { fromValue: '0.2'}], position: 2000, duration: 500 },
            { id: "eid805", tween: [ "style", "${_TextCopy5}", "opacity", '1', { fromValue: '0.000000'}], position: 2000, duration: 500 },
            { id: "eid717", tween: [ "transform", "${_Text}", "scaleX", '0.5', { fromValue: '0.3'}], position: 2000, duration: 500 },
            { id: "eid784", tween: [ "transform", "${_TextCopy3}", "scaleY", '0.9', { fromValue: '0.3'}], position: 2000, duration: 500 },
            { id: "eid767", tween: [ "transform", "${_TextCopy2}", "scaleX", '0.7', { fromValue: '0.3'}], position: 2000, duration: 500 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-16963798");
