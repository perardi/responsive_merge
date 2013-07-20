/* Dynamic script, do not copy */
if(!cf_scripts)
{var cf_scripts=function(){var callbacks=[];var duringCallbacks=[];var that={};that.loaded=false;that.duringload=function(callback){duringCallbacks.push(callback);};that.afterload=function(callback){if(!that.loaded){callbacks.push(callback);}
else{callback();}}
that.gz=function(){var u=navigator.userAgent.toLowerCase();if(u.indexOf("msie 6.0")!=-1&&u.indexOf("sv1")==-1){return".nogz";}
return"";};var loadem=function(scripts,css,loadedFx)
{var loc=function(){return document.getElementsByTagName("script")[0];}
var ele=function(type,attrs,content)
{var e=document.createElement(type);for(var a in attrs){e[a]=attrs[a];}
if(content)
e.innerHTML=content;return e;}
var loadscript=function(url,afterFx){var h=loc();var s=ele("script",{src:url,type:"text/javascript",charset:"utf-8"});if(afterFx){if(s.addEventListener){s.addEventListener("load",afterFx,false);}else if(s.readyState){s.onreadystatechange=function(){if(s.readyState=='loaded'||s.readyState=='complete')
afterFx();};}}
h.parentNode.insertBefore(s,h);};var loadstyle=function(url)
{h=loc();h.parentNode.insertBefore(ele("link",{"type":"text/css","rel":"stylesheet","href":url}),h);};var chain=function(scripts,i){var afterFx=loadedFx;if(i<scripts.length-1)
afterFx=chain(scripts,i+1);return function(){loadscript(scripts[i],afterFx);}}
chain(scripts,0)();for(var i=0;i<css.length;i++)
{loadstyle(css[i]);}}
var gz=that.gz();var scripts=[];var proto=window.location.protocol+"//";scripts.push(proto+"d2yeu2mwujl2s5.cloudfront.net/3.20-18/js/CF_insight.min"+gz+".js");var js=scripts.concat([]);var css=[proto+"d2yeu2mwujl2s5.cloudfront.net/3.20-18/styles/widgets"+gz+".css"].concat([]);loadem(js,css,function(){if(!window.cf_jq)
throw"Error loading cf_jq jquery";if(!window.CF)
throw"Error loading CF libraries";if(!that.loaded){setTimeout(function(){CF.config.set({b2cHost:proto+"b2c-mlm.marketo.com",b2cPath:"/rest/",rpxUrl:"https://social.mrk.to",scriptHost:proto+"d2yeu2mwujl2s5.cloudfront.net/3.20-18",useBackplane:false,cfKeys:{subscriber:"insight",product:"3934da8a-9bbc-421f-ba5e-deea2920691b",topcommunity:3359},siteProxies:[],urlShortener:"http://mrk.to/",hidePoweredBy:true,allowDiagMode:false,messagingEnable:false,messagingText:""});var afterConfig=function(){cf_jq.each(duringCallbacks,function(i,fx){fx(cf_jq,CF);});CF.config.complete();CF.widget.startSpec([]);that.loaded=true;cf_jq.each(callbacks,function(i,fx){fx(cf_jq,CF);});}
afterConfig();},0);};});return that;}();}