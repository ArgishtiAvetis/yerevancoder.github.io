webpackJsonp([0x67ef26645b2a,60335399758886],{188:function(e,t){e.exports={data:{site:{siteMetadata:{title:"yerevancoder"}},allMarkdownRemark:{edges:[{node:{timeToRead:10}},{node:{timeToRead:1}},{node:{timeToRead:1}},{node:{timeToRead:1}},{node:{timeToRead:12}},{node:{timeToRead:10}},{node:{timeToRead:1}},{node:{timeToRead:2}},{node:{timeToRead:3}},{node:{timeToRead:12}},{node:{timeToRead:3}},{node:{timeToRead:3}},{node:{timeToRead:4}},{node:{timeToRead:8}},{node:{timeToRead:4}},{node:{timeToRead:7}},{node:{timeToRead:12}},{node:{timeToRead:6}},{node:{timeToRead:7}},{node:{timeToRead:14}},{node:{timeToRead:2}},{node:{timeToRead:1}},{node:{timeToRead:2}},{node:{timeToRead:4}},{node:{timeToRead:3}},{node:{timeToRead:2}},{node:{timeToRead:1}},{node:{timeToRead:1}}]}},layoutContext:{}}},403:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(1),a=r(i),u=n(410),c=r(u),l=n(188),s=r(l);t.default=function(e){return a.default.createElement(c.default,o({},e,s.default))},e.exports=t.default},180:function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function i(e,t,n){var i,s;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(c(e))return!!c(t)&&(e=a.call(e),t=a.call(t),l(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}try{var f=u(e),d=u(t)}catch(e){return!1}if(f.length!=d.length)return!1;for(f.sort(),d.sort(),i=f.length-1;i>=0;i--)if(f[i]!=d[i])return!1;for(i=f.length-1;i>=0;i--)if(s=f[i],!l(e[s],t[s],n))return!1;return typeof e==typeof t}var a=Array.prototype.slice,u=n(182),c=n(181),l=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:i(e,t,n))}},181:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},182:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},189:function(e,t){function n(e){return!!e&&"object"==typeof e}function r(e,t){var n=null==e?void 0:e[t];return a(n)?n:void 0}function o(e){return i(e)&&d.call(e)==u}function i(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function a(e){return null!=e&&(o(e)?p.test(s.call(e)):n(e)&&c.test(e))}var u="[object Function]",c=/^\[object .+?Constructor\]$/,l=Object.prototype,s=Function.prototype.toString,f=l.hasOwnProperty,d=l.toString,p=RegExp("^"+s.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=r},190:function(e,t){function n(e){return o(e)&&h.call(e,"callee")&&(!m.call(e,"callee")||T.call(e)==s)}function r(e){return null!=e&&a(e.length)&&!i(e)}function o(e){return c(e)&&r(e)}function i(e){var t=u(e)?T.call(e):"";return t==f||t==d}function a(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=l}function u(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function c(e){return!!e&&"object"==typeof e}var l=9007199254740991,s="[object Arguments]",f="[object Function]",d="[object GeneratorFunction]",p=Object.prototype,h=p.hasOwnProperty,T=p.toString,m=p.propertyIsEnumerable;e.exports=n},191:function(e,t){function n(e){return!!e&&"object"==typeof e}function r(e,t){var n=null==e?void 0:e[t];return u(n)?n:void 0}function o(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=E}function i(e){return a(e)&&h.call(e)==l}function a(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function u(e){return null!=e&&(i(e)?T.test(d.call(e)):n(e)&&s.test(e))}var c="[object Array]",l="[object Function]",s=/^\[object .+?Constructor\]$/,f=Object.prototype,d=Function.prototype.toString,p=f.hasOwnProperty,h=f.toString,T=RegExp("^"+d.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),m=r(Array,"isArray"),E=9007199254740991,y=m||function(e){return n(e)&&o(e.length)&&h.call(e)==c};e.exports=y},192:function(e,t,n){function r(e){return function(t){return null==t?void 0:t[e]}}function o(e){return null!=e&&a(y(e))}function i(e,t){return e="number"==typeof e||p.test(e)?+e:-1,t=null==t?E:t,e>-1&&e%1==0&&e<t}function a(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=E}function u(e){for(var t=l(e),n=t.length,r=n&&e.length,o=!!r&&a(r)&&(d(e)||f(e)),u=-1,c=[];++u<n;){var s=t[u];(o&&i(s,r)||T.call(e,s))&&c.push(s)}return c}function c(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function l(e){if(null==e)return[];c(e)||(e=Object(e));var t=e.length;t=t&&a(t)&&(d(e)||f(e))&&t||0;for(var n=e.constructor,r=-1,o="function"==typeof n&&n.prototype===e,u=Array(t),l=t>0;++r<t;)u[r]=r+"";for(var s in e)l&&i(s,t)||"constructor"==s&&(o||!T.call(e,s))||u.push(s);return u}var s=n(189),f=n(190),d=n(191),p=/^\d+$/,h=Object.prototype,T=h.hasOwnProperty,m=s(Object,"keys"),E=9007199254740991,y=r("length"),b=m?function(e){var t=null==e?void 0:e.constructor;return"function"==typeof t&&t.prototype===e||"function"!=typeof e&&o(e)?u(e):c(e)?m(e):[]}:u;e.exports=b},656:function(e,t,n){(function(t){(function(){var n,r,o,i,a,u;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!=typeof t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-a)/1e6},r=t.hrtime,n=function(){var e;return e=r(),1e9*e[0]+e[1]},i=n(),u=1e9*t.uptime(),a=i-u):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(t,n(65))},661:function(e,t,n){(function(t){for(var r=n(656),o="undefined"==typeof window?t:window,i=["moz","webkit"],a="AnimationFrame",u=o["request"+a],c=o["cancel"+a]||o["cancelRequest"+a],l=0;!u&&l<i.length;l++)u=o[i[l]+"Request"+a],c=o[i[l]+"Cancel"+a]||o[i[l]+"CancelRequest"+a];if(!u||!c){var s=0,f=0,d=[],p=1e3/60;u=function(e){if(0===d.length){var t=r(),n=Math.max(0,p-(t-s));s=n+t,setTimeout(function(){var e=d.slice(0);d.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(s)}catch(e){setTimeout(function(){throw e},0)}},Math.round(n))}return d.push({handle:++f,callback:e,cancelled:!1}),f},c=function(e){for(var t=0;t<d.length;t++)d[t].handle===e&&(d[t].cancelled=!0)}}e.exports=function(e){return u.call(o,e)},e.exports.cancel=function(){c.apply(o,arguments)},e.exports.polyfill=function(e){e||(e=o),e.requestAnimationFrame=u,e.cancelAnimationFrame=c}}).call(t,function(){return this}())},726:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),f=r(s),d=n(4),p=r(d),h=n(141),T=r(h),m=n(661),E=r(m),y=n(727),b=r(y),_=function(){},g=function(e){function t(e){i(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setRef=function(e){return n.inner=e},n.setHeightOffset=function(){n.setState({height:n.inner.offsetHeight}),n.resizeTicking=!1},n.getScrollY=function(){return void 0!==n.props.parent().pageYOffset?n.props.parent().pageYOffset:void 0!==n.props.parent().scrollTop?n.props.parent().scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop},n.getViewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},n.getDocumentHeight=function(){var e=document.body,t=document.documentElement;return Math.max(e.scrollHeight,t.scrollHeight,e.offsetHeight,t.offsetHeight,e.clientHeight,t.clientHeight)},n.getElementPhysicalHeight=function(e){return Math.max(e.offsetHeight,e.clientHeight)},n.getElementHeight=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},n.getScrollerPhysicalHeight=function(){var e=n.props.parent();return e===window||e===document.body?n.getViewportHeight():n.getElementPhysicalHeight(e)},n.getScrollerHeight=function(){var e=n.props.parent();return e===window||e===document.body?n.getDocumentHeight():n.getElementHeight(e)},n.isOutOfBound=function(e){var t=e<0,r=n.getScrollerPhysicalHeight(),o=n.getScrollerHeight(),i=e+r>o;return t||i},n.handleScroll=function(){n.scrollTicking||(n.scrollTicking=!0,(0,E.default)(n.update))},n.handleResize=function(){n.resizeTicking||(n.resizeTicking=!0,(0,E.default)(n.setHeightOffset))},n.unpin=function(){n.props.onUnpin(),n.setState({translateY:"-100%",className:"headroom headroom--unpinned"},function(){setTimeout(function(){n.setState({state:"unpinned"})},0)})},n.pin=function(){n.props.onPin(),n.setState({translateY:0,className:"headroom headroom--pinned",state:"pinned"})},n.unfix=function(){n.props.onUnfix(),n.setState({translateY:0,className:"headroom headroom--unfixed",state:"unfixed"})},n.update=function(){if(n.currentScrollY=n.getScrollY(),!n.isOutOfBound(n.currentScrollY)){var e=(0,b.default)(n.lastKnownScrollY,n.currentScrollY,n.props,n.state),t=e.action;"pin"===t?n.pin():"unpin"===t?n.unpin():"unfix"===t&&n.unfix()}n.lastKnownScrollY=n.currentScrollY,n.scrollTicking=!1},n.currentScrollY=0,n.lastKnownScrollY=0,n.scrollTicking=!1,n.resizeTicking=!1,n.state={state:"unfixed",translateY:0,className:"headroom headroom--unfixed"},n}return u(t,e),l(t,[{key:"componentDidMount",value:function(){this.setHeightOffset(),this.props.disable||(this.props.parent().addEventListener("scroll",this.handleScroll),this.props.calcHeightOnResize&&this.props.parent().addEventListener("resize",this.handleResize))}},{key:"componentWillReceiveProps",value:function(e){e.disable&&!this.props.disable?(this.unfix(),this.props.parent().removeEventListener("scroll",this.handleScroll),this.props.parent().removeEventListener("resize",this.handleResize)):!e.disable&&this.props.disable&&(this.props.parent().addEventListener("scroll",this.handleScroll),this.props.calcHeightOnResize&&this.props.parent().addEventListener("resize",this.handleResize))}},{key:"shouldComponentUpdate",value:function(e,t){return!(0,T.default)(this.props,e)||!(0,T.default)(this.state,t)}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.setHeightOffset()}},{key:"componentWillUnmount",value:function(){this.props.parent().removeEventListener("scroll",this.handleScroll),window.removeEventListener("scroll",this.handleScroll),this.props.parent().removeEventListener("resize",this.handleResize)}},{key:"render",value:function(){var e=this.props,t=e.className,n=o(e,["className"]);delete n.onUnpin,delete n.onPin,delete n.onUnfix,delete n.disableInlineStyles,delete n.disable,delete n.parent,delete n.children,delete n.upTolerance,delete n.downTolerance,delete n.pinStart,delete n.calcHeightOnResize;var r=n.style,i=n.wrapperStyle,a=o(n,["style","wrapperStyle"]),u={position:this.props.disable||"unfixed"===this.state.state?"relative":"fixed",top:0,left:0,right:0,zIndex:1,WebkitTransform:"translateY("+this.state.translateY+")",MsTransform:"translateY("+this.state.translateY+")",transform:"translateY("+this.state.translateY+")"},l=this.state.className;"unfixed"!==this.state.state&&(u=c({},u,{WebkitTransition:"all .2s ease-in-out",MozTransition:"all .2s ease-in-out",OTransition:"all .2s ease-in-out",transition:"all .2s ease-in-out"}),l+=" headroom--scrolled"),u=this.props.disableInlineStyles?r:c({},u,r);var s=c({},i,{height:this.state.height?this.state.height:null}),d=t?t+" headroom-wrapper":"headroom-wrapper";return f.default.createElement("div",{style:s,className:d},f.default.createElement("div",c({ref:this.setRef},a,{style:u,className:l}),this.props.children))}}]),t}(s.Component);g.propTypes={className:p.default.string,parent:p.default.func,children:p.default.any.isRequired,disableInlineStyles:p.default.bool,disable:p.default.bool,upTolerance:p.default.number,downTolerance:p.default.number,onPin:p.default.func,onUnpin:p.default.func,onUnfix:p.default.func,wrapperStyle:p.default.object,pinStart:p.default.number,style:p.default.object,calcHeightOnResize:p.default.bool},g.defaultProps={parent:function(){return window},disableInlineStyles:!1,disable:!1,upTolerance:5,downTolerance:0,onPin:_,onUnpin:_,onUnfix:_,wrapperStyle:{},pinStart:0,calcHeightOnResize:!0},t.default=g},727:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=t>=e?"down":"up",i=Math.abs(t-e);return n.disable?{action:"none",scrollDirection:o,distanceScrolled:i}:t<=n.pinStart&&"unfixed"!==r.state?{action:"unfix",scrollDirection:o,distanceScrolled:i}:t<=r.height&&"down"===o&&"unfixed"===r.state?{action:"none",scrollDirection:o,distanceScrolled:i}:"down"===o&&["pinned","unfixed"].indexOf(r.state)>=0&&t>r.height+n.pinStart&&i>n.downTolerance?{action:"unpin",scrollDirection:o,distanceScrolled:i}:"up"===o&&i>n.upTolerance&&["pinned","unfixed"].indexOf(r.state)<0?{action:"pin",scrollDirection:o,distanceScrolled:i}:"up"===o&&t<=r.height&&["pinned","unfixed"].indexOf(r.state)<0?{action:"pin",scrollDirection:o,distanceScrolled:i}:{action:"none",scrollDirection:o,distanceScrolled:i}}},209:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),f=r(s),d=n(4),p=r(d),h=n(214),T=r(h),m=n(180),E=r(m),y=n(210),b=n(103),_=function(e){var t,n;return n=t=function(t){function n(){return i(this,n),a(this,t.apply(this,arguments))}return u(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,E.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.TAG_NAMES.SCRIPT:case b.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case b.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return c({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[c({},o,this.mapNestedChildrenToProps(n,i))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case b.TAG_NAMES.TITLE:return c({},o,(t={},t[r.type]=a,t.titleAttributes=c({},i),t));case b.TAG_NAMES.BODY:return c({},o,{bodyAttributes:c({},i)});case b.TAG_NAMES.HTML:return c({},o,{htmlAttributes:c({},i)})}return c({},o,(n={},n[r.type]=c({},i),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=c({},t);return Object.keys(e).forEach(function(t){var r;n=c({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return f.default.Children.forEach(e,function(e){if(e&&e.props){var i=e.props,a=i.children,u=o(i,["children"]),c=(0,y.convertReactPropstoHtmlAttributes)(u);switch(n.warnOnInvalidChildren(e,a),e.type){case b.TAG_NAMES.LINK:case b.TAG_NAMES.META:case b.TAG_NAMES.NOSCRIPT:case b.TAG_NAMES.SCRIPT:case b.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:a})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),i=c({},r);return n&&(i=this.mapChildrenToProps(n,i)),f.default.createElement(e,i)},l(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(f.default.Component),t.propTypes={base:p.default.object,bodyAttributes:p.default.object,children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node]),defaultTitle:p.default.string,defer:p.default.bool,encodeSpecialCharacters:p.default.bool,htmlAttributes:p.default.object,link:p.default.arrayOf(p.default.object),meta:p.default.arrayOf(p.default.object),noscript:p.default.arrayOf(p.default.object),onChangeClientState:p.default.func,script:p.default.arrayOf(p.default.object),style:p.default.arrayOf(p.default.object),title:p.default.string,titleAttributes:p.default.object,titleTemplate:p.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,y.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},g=function(){return null},A=(0,T.default)(y.reducePropsToState,y.handleClientStateChange,y.mapStateOnServer)(g),S=_(A);S.renderStatic=S.rewind,t.Helmet=S,t.default=S},103:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},210:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(1),u=r(a),c=n(10),l=r(c),s=n(103),f=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=E(e,s.TAG_NAMES.TITLE),n=E(e,s.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=E(e,s.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return E(e,s.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},h=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return i({},e,t)},{})},T=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[s.TAG_NAMES.BASE]}).map(function(e){return e[s.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o],a=i.toLowerCase();if(e.indexOf(a)!==-1&&n[a])return t.concat(n)}return t},[])},m=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&S("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var u=i[a],c=u.toLowerCase();t.indexOf(c)===-1||n===s.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||c===s.TAG_PROPERTIES.REL&&"stylesheet"===e[c].toLowerCase()||(n=c),t.indexOf(u)===-1||u!==s.TAG_PROPERTIES.INNER_HTML&&u!==s.TAG_PROPERTIES.CSS_TEXT&&u!==s.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],c=(0,l.default)({},r[u],o[u]);r[u]=c}return e},[]).reverse()},E=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},y=function(e){return{baseTag:T([s.TAG_PROPERTIES.HREF],e),bodyAttributes:h(s.ATTRIBUTE_NAMES.BODY,e),defer:E(e,s.HELMET_PROPS.DEFER),encode:E(e,s.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:h(s.ATTRIBUTE_NAMES.HTML,e),linkTags:m(s.TAG_NAMES.LINK,[s.TAG_PROPERTIES.REL,s.TAG_PROPERTIES.HREF],e),metaTags:m(s.TAG_NAMES.META,[s.TAG_PROPERTIES.NAME,s.TAG_PROPERTIES.CHARSET,s.TAG_PROPERTIES.HTTPEQUIV,s.TAG_PROPERTIES.PROPERTY,s.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:m(s.TAG_NAMES.NOSCRIPT,[s.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:m(s.TAG_NAMES.SCRIPT,[s.TAG_PROPERTIES.SRC,s.TAG_PROPERTIES.INNER_HTML],e),styleTags:m(s.TAG_NAMES.STYLE,[s.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:h(s.ATTRIBUTE_NAMES.TITLE,e)}},b=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){b(t)},0)}}(),_=function(e){return clearTimeout(e)},g="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||b:e.requestAnimationFrame||b,A="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||_:e.cancelAnimationFrame||_,S=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},v=null,O=function(e){v&&A(v),e.defer?v=g(function(){R(e,function(){v=null})}):(R(e),v=null)},R=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,f=e.styleTags,d=e.title,p=e.titleAttributes;M(s.TAG_NAMES.BODY,r),M(s.TAG_NAMES.HTML,o),w(d,p);var h={baseTag:C(s.TAG_NAMES.BASE,n),linkTags:C(s.TAG_NAMES.LINK,i),metaTags:C(s.TAG_NAMES.META,a),noscriptTags:C(s.TAG_NAMES.NOSCRIPT,u),scriptTags:C(s.TAG_NAMES.SCRIPT,l),styleTags:C(s.TAG_NAMES.STYLE,f)},T={},m={};Object.keys(h).forEach(function(e){var t=h[e],n=t.newTags,r=t.oldTags;n.length&&(T[e]=n),r.length&&(m[e]=h[e].oldTags)}),t&&t(),c(e,T,m)},P=function(e){return Array.isArray(e)?e.join(""):e},w=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=P(e)),M(s.TAG_NAMES.TITLE,t)},M=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(s.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),u=0;u<a.length;u++){var c=a[u],l=t[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),o.indexOf(c)===-1&&o.push(c);var f=i.indexOf(c);f!==-1&&i.splice(f,1)}for(var d=i.length-1;d>=0;d--)n.removeAttribute(i[d]);o.length===i.length?n.removeAttribute(s.HELMET_ATTRIBUTE):n.getAttribute(s.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(s.HELMET_ATTRIBUTE,a.join(","))}},C=function(e,t){var n=document.head||document.querySelector(s.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+s.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===s.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===s.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(s.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return a=t,n.isEqualNode(e)})?o.splice(a,1):i.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),i.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:i}},N=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},I=function(e,t,n,r){var o=N(n),i=P(t);return o?"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+">"+f(i,r)+"</"+e+">":"<"+e+" "+s.HELMET_ATTRIBUTE+'="true">'+f(i,r)+"</"+e+">"},L=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===s.TAG_PROPERTIES.INNER_HTML||e===s.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+f(r[t],n)+'"';return e?e+" "+o:o},""),i=r.innerHTML||r.cssText||"",a=s.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")},"")},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.REACT_TAG_MAP[n]||n]=e[n],t},t)},x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.HTML_TAG_MAP[n]||n]=e[n],t},t)},H=function(e,t,n){var r,o=(r={key:t},r[s.HELMET_ATTRIBUTE]=!0,r),i=j(n,o);return[u.default.createElement(s.TAG_NAMES.TITLE,i,t)]},k=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[s.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=s.REACT_TAG_MAP[e]||e;if(n===s.TAG_PROPERTIES.INNER_HTML||n===s.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),u.default.createElement(e,o)})},G=function(e,t,n){switch(e){case s.TAG_NAMES.TITLE:return{toComponent:function(){return H(e,t.title,t.titleAttributes,n)},toString:function(){return I(e,t.title,t.titleAttributes,n)}};case s.ATTRIBUTE_NAMES.BODY:case s.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return j(t)},toString:function(){return N(t)}};default:return{toComponent:function(){return k(e,t)},toString:function(){return L(e,t,n)}}}},B=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.scriptTags,l=e.styleTags,f=e.title,d=void 0===f?"":f,p=e.titleAttributes;return{base:G(s.TAG_NAMES.BASE,t,r),bodyAttributes:G(s.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:G(s.ATTRIBUTE_NAMES.HTML,o,r),link:G(s.TAG_NAMES.LINK,i,r),meta:G(s.TAG_NAMES.META,a,r),noscript:G(s.TAG_NAMES.NOSCRIPT,u,r),script:G(s.TAG_NAMES.SCRIPT,c,r),style:G(s.TAG_NAMES.STYLE,l,r),title:G(s.TAG_NAMES.TITLE,{title:d,titleAttributes:p},r)}};t.convertReactPropstoHtmlAttributes=x,t.handleClientStateChange=O,t.mapStateOnServer=B,t.reducePropsToState=y,t.requestAnimationFrame=g,t.warn=S}).call(t,function(){return this}())},214:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(u){function d(){h=e(p.map(function(e){return e.props})),T.canUseDOM?t(h):n&&(h=n(h))}if("function"!=typeof u)throw new Error("Expected WrappedComponent to be a React component.");var p=[],h=void 0,T=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.peek=function(){return h},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=h;return h=void 0,p=[],e},t.prototype.shouldComponentUpdate=function(e){return!f(e,this.props)},t.prototype.componentWillMount=function(){p.push(this),d()},t.prototype.componentDidUpdate=function(){d()},t.prototype.componentWillUnmount=function(){var e=p.indexOf(this);p.splice(e,1),d()},t.prototype.render=function(){return l.createElement(u,this.props)},t}(c.Component);return T.displayName="SideEffect("+r(u)+")",T.canUseDOM=s.canUseDOM,T}}var c=n(1),l=r(c),s=r(n(97)),f=r(n(141));e.exports=u},141:function(e,t,n){"use strict";var r=n(192);e.exports=function(e,t,n,o){var i=n?n.call(o,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var a=r(e),u=r(t),c=a.length;if(c!==u.length)return!1;o=o||null;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<c;s++){var f=a[s];if(!l(f))return!1;var d=e[f],p=t[f],h=n?n.call(o,d,p,f):void 0;if(h===!1||void 0===h&&d!==p)return!1}return!0}},408:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;
var o=n(1),i=r(o),a=n(63),u=r(a),c=n(5);t.default=function(e){var t=e.header_content;return i.default.createElement("aside",{className:"InformationBar"},t,i.default.createElement("p",null,"yerevancoder.com is a place for coders in Armenia to share their experiences in tech. "," ",i.default.createElement(u.default,{to:c.ROUTES.AVAILABLE_FOR_WORK},"Find freelancers")," looking for a job, or post a tech job on our ",i.default.createElement(u.default,{to:c.ROUTES.JOBS_TABLE},"hiring board"),". Check out our"," ",i.default.createElement("a",{href:"https://forum.yerevancoder.com/categories"},"forums")," for more discussions, consider coming to ",i.default.createElement("a",{href:"https://iteratehackerspace.com"},"iterate hackerspace")," for coding workshops and a vibrant programmer community."),i.default.createElement("p",null,"Use this ",i.default.createElement(u.default,{to:"/2018-03-13-how-yerevan-coder-works/"},"post")," as a guide on how to add a new blog post and check out this"," ",i.default.createElement(u.default,{to:"/2017-12-21-javascript-resources/"},"post")," for many inpage lecture notes on learning JavaScript, consider checking out the source code"," ",i.default.createElement("a",{href:"https://github.com/yerevancoder/yerevancoder.github.io"},"here"),"."))},e.exports=t.default},409:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),i=r(o),a=n(63),u=r(a),c=n(5),l=i.default.createElement(u.default,{className:"BlogTable__MobileBarBanner",to:"/"},"yerevancoder");t.default=i.default.createElement("div",{className:"BlogTable__MobileBar"},i.default.createElement("img",{className:"BlogTable__MobileBarSiteLogo",src:"/mobile-bar-logo.png"}),l,i.default.createElement("div",{className:"BlogTable__MobileBarNavBox PlainFlexRow"},i.default.createElement("div",{className:"PlainFlexColumn BlogTable__MobileBarNavBoxElement"},i.default.createElement(u.default,{to:c.ROUTES.AVAILABLE_FOR_WORK},"freelancers"),c.SPACER_10_H,i.default.createElement(u.default,{to:c.ROUTES.JOBS_TABLE},"hiring board")),i.default.createElement("div",{className:"PlainFlexColumn BlogTable__MobileBarNavBoxElement"},i.default.createElement("a",{href:"https://forum.yerevancoder.com/categories"},"forums"),c.SPACER_10_H,i.default.createElement("a",{href:"https://iteratehackerspace.com"},"iterate")))),e.exports=t.default},410:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=n(1),l=r(c),s=n(63),f=r(s),d=n(4),p=r(d),h=n(209),T=r(h),m=n(726),E=r(m),y=n(31),b=n(408),_=r(b),g=n(409),A=r(g),S=n(5),v=n(11),O=l.default.createElement(f.default,{className:"InformationBar__SiteBannerName",to:"/"},"yerevancoder"),R={authenticated_user:null,remember_me_checked:!1,pin_bar_content:S.EMPTY_DIV},P=function(e){function t(){var n,r,a;o(this,t);for(var c=arguments.length,l=Array(c),s=0;s<c;s++)l[s]=arguments[s];return n=r=i(this,e.call.apply(e,[this].concat(l))),r.state=u({},R),r.pass_through=function(e){var t=e.displayName,n=e.email,r=e.emailVerified,o=e.metadata,i=e.phoneNumber,a=e.photoURL,u=e.refreshToken,c=e.uid;return{displayName:t,email:n,emailVerified:r,metadata:o,phoneNumber:i,photoURL:a,refreshToken:u,uid:c}},r.onUnpin=function(){return r.setState(function(){return{pin_bar_content:S.EMPTY_DIV}})},r.onUnfix=function(){return r.setState({pin_bar_content:S.EMPTY_DIV})},r.onPin=function(){return r.setState({pin_bar_content:A.default})},a=n,i(r,a)}return a(t,e),t.prototype.getChildContext=function(){var e=this;return{authenticated_user:function(){return e.state.authenticated_user},sign_user_up:function(t,n,r,o,i){return y.firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(n,r).catch(function(e){throw new Error("Could not sign you up because:\n"+e.message)}).then(function(r){var a=e.pass_through(r.user),u=y.firebase.auth().currentUser;return y.db.ref("signed-up-users/"+u.uid).set({user_receives_blog_newsletter:o,given_email:n,given_username:t}).then(function(){return u.updateProfile({displayName:t})}).then(function(){e.setState(function(){return{authenticated_user:a}},i)})})},sign_user_in:function(t,n,r,o){return y.auth.signInWithEmailAndPassword(t,n).then(function(t){return e.setState(function(){return{remember_me_checked:r,authenticated_user:e.pass_through(t)}},o)})},sign_user_out:function(t){return y.auth.signOut().then(function(){e.setState(function(){return u({},R)},t)})},submit_new_freelancer_post:function(t){return(0,v.query_my_freelance_submission)().then(function(n){if(null===n)return y.freelancers_posts_ref.push(t).then(function(n){var r=e.state.authenticated_user.uid;return y.db.ref("users/"+r+"/my-freelance-submission").set(u({},t,{post_key:n.key}))});throw new Error("Profile already exists, delete existing one first")})},submit_new_hiring_post:function(t){return y.hiring_table_posts_ref.push().then(function(n){var r=e.state.authenticated_user.uid,o=n.key,i={},a=u({},t,{post_key:o});return i["/hiring-table-posts/"+o]=a,i["/users/"+r+"/my-hiring-board-submissions/"+o]=a,y.db.ref().update(i)})}}},t.prototype.render=function(){var e=this.props.children,t=this.props.data.site.siteMetadata.title;return l.default.createElement("div",{className:"ApplicationContainer__Container"},l.default.createElement(T.default,{title:t},S.global_styles,l.default.createElement("link",{rel:"stylesheet",href:"/yc-styles.css"}),l.default.createElement("link",{href:"https://fonts.googleapis.com/css?family=Montserrat|Titillium+Web",rel:"stylesheet"}),l.default.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/balloon-css/0.5.0/balloon.min.css"})),l.default.createElement(_.default,{header_content:O}),l.default.createElement("div",{className:"ApplicationContainer__MainContent"},l.default.createElement(E.default,{pinStart:300,onPin:this.onPin,onUnpin:this.onUnpin,onUnfix:this.onUnfix},this.state.pin_bar_content),l.default.createElement("div",{className:"ApplicationContainer__BusinessContent"},e())))},t}(l.default.Component);P.childContextTypes={authenticated_user:p.default.func,sign_user_in:p.default.func,sign_user_up:p.default.func,sign_user_out:p.default.func,submit_new_freelancer_post:p.default.func,submit_new_hiring_post:p.default.func},P.displayName="ApplicationRoot",t.default=P;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-layouts-index-js-ddf2a0da12228a05ac8f.js.map