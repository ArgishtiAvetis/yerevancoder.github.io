webpackJsonp([35783957827783],{151:function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function i(e,t,n){var i,s;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(c(e))return!!c(t)&&(e=a.call(e),t=a.call(t),l(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}try{var f=u(e),p=u(t)}catch(e){return!1}if(f.length!=p.length)return!1;for(f.sort(),p.sort(),i=f.length-1;i>=0;i--)if(f[i]!=p[i])return!1;for(i=f.length-1;i>=0;i--)if(s=f[i],!l(e[s],t[s],n))return!1;return typeof e==typeof t}var a=Array.prototype.slice,u=n(153),c=n(152),l=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:i(e,t,n))}},152:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},153:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},78:function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return i}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},154:function(e,t){function n(e){return!!e&&"object"==typeof e}function r(e,t){var n=null==e?void 0:e[t];return a(n)?n:void 0}function o(e){return i(e)&&p.call(e)==u}function i(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function a(e){return null!=e&&(o(e)?d.test(s.call(e)):n(e)&&c.test(e))}var u="[object Function]",c=/^\[object .+?Constructor\]$/,l=Object.prototype,s=Function.prototype.toString,f=l.hasOwnProperty,p=l.toString,d=RegExp("^"+s.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=r},155:function(e,t){function n(e){return o(e)&&T.call(e,"callee")&&(!E.call(e,"callee")||h.call(e)==s)}function r(e){return null!=e&&a(e.length)&&!i(e)}function o(e){return c(e)&&r(e)}function i(e){var t=u(e)?h.call(e):"";return t==f||t==p}function a(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=l}function u(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function c(e){return!!e&&"object"==typeof e}var l=9007199254740991,s="[object Arguments]",f="[object Function]",p="[object GeneratorFunction]",d=Object.prototype,T=d.hasOwnProperty,h=d.toString,E=d.propertyIsEnumerable;e.exports=n},156:function(e,t){function n(e){return!!e&&"object"==typeof e}function r(e,t){var n=null==e?void 0:e[t];return u(n)?n:void 0}function o(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=y}function i(e){return a(e)&&T.call(e)==l}function a(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function u(e){return null!=e&&(i(e)?h.test(p.call(e)):n(e)&&s.test(e))}var c="[object Array]",l="[object Function]",s=/^\[object .+?Constructor\]$/,f=Object.prototype,p=Function.prototype.toString,d=f.hasOwnProperty,T=f.toString,h=RegExp("^"+p.call(d).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),E=r(Array,"isArray"),y=9007199254740991,m=E||function(e){return n(e)&&o(e.length)&&T.call(e)==c};e.exports=m},157:function(e,t,n){function r(e){return function(t){return null==t?void 0:t[e]}}function o(e){return null!=e&&a(m(e))}function i(e,t){return e="number"==typeof e||d.test(e)?+e:-1,t=null==t?y:t,e>-1&&e%1==0&&e<t}function a(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=y}function u(e){for(var t=l(e),n=t.length,r=n&&e.length,o=!!r&&a(r)&&(p(e)||f(e)),u=-1,c=[];++u<n;){var s=t[u];(o&&i(s,r)||h.call(e,s))&&c.push(s)}return c}function c(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function l(e){if(null==e)return[];c(e)||(e=Object(e));var t=e.length;t=t&&a(t)&&(p(e)||f(e))&&t||0;for(var n=e.constructor,r=-1,o="function"==typeof n&&n.prototype===e,u=Array(t),l=t>0;++r<t;)u[r]=r+"";for(var s in e)l&&i(s,t)||"constructor"==s&&(o||!h.call(e,s))||u.push(s);return u}var s=n(154),f=n(155),p=n(156),d=/^\d+$/,T=Object.prototype,h=T.hasOwnProperty,E=s(Object,"keys"),y=9007199254740991,m=r("length"),A=E?function(e){var t=null==e?void 0:e.constructor;return"function"==typeof t&&t.prototype===e||"function"!=typeof e&&o(e)?u(e):c(e)?E(e):[]}:u;e.exports=A},335:function(e,t,n){(function(t){(function(){var n,r,o,i,a,u;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!=typeof t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-a)/1e6},r=t.hrtime,n=function(){var e;return e=r(),1e9*e[0]+e[1]},i=n(),u=1e9*t.uptime(),a=i-u):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(t,n(54))},556:function(e,t){},337:function(e,t,n){(function(t){for(var r=n(335),o="undefined"==typeof window?t:window,i=["moz","webkit"],a="AnimationFrame",u=o["request"+a],c=o["cancel"+a]||o["cancelRequest"+a],l=0;!u&&l<i.length;l++)u=o[i[l]+"Request"+a],c=o[i[l]+"Cancel"+a]||o[i[l]+"CancelRequest"+a];if(!u||!c){var s=0,f=0,p=[],d=1e3/60;u=function(e){if(0===p.length){var t=r(),n=Math.max(0,d-(t-s));s=n+t,setTimeout(function(){var e=p.slice(0);p.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(s)}catch(e){setTimeout(function(){throw e},0)}},Math.round(n))}return p.push({handle:++f,callback:e,cancelled:!1}),f},c=function(e){for(var t=0;t<p.length;t++)p[t].handle===e&&(p[t].cancelled=!0)}}e.exports=function(e){return u.call(o,e)},e.exports.cancel=function(){c.apply(o,arguments)},e.exports.polyfill=function(e){e||(e=o),e.requestAnimationFrame=u,e.cancelAnimationFrame=c}}).call(t,function(){return this}())},822:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(3),f=r(s),p=n(13),d=r(p),T=n(98),h=r(T),E=n(337),y=r(E),m=n(823),A=r(m),S=function(){},g=function(e){function t(e){i(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setRef=function(e){return n.inner=e},n.setHeightOffset=function(){n.setState({height:n.inner.offsetHeight}),n.resizeTicking=!1},n.getScrollY=function(){return void 0!==n.props.parent().pageYOffset?n.props.parent().pageYOffset:void 0!==n.props.parent().scrollTop?n.props.parent().scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop},n.getViewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},n.getDocumentHeight=function(){var e=document.body,t=document.documentElement;return Math.max(e.scrollHeight,t.scrollHeight,e.offsetHeight,t.offsetHeight,e.clientHeight,t.clientHeight)},n.getElementPhysicalHeight=function(e){return Math.max(e.offsetHeight,e.clientHeight)},n.getElementHeight=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},n.getScrollerPhysicalHeight=function(){var e=n.props.parent();return e===window||e===document.body?n.getViewportHeight():n.getElementPhysicalHeight(e)},n.getScrollerHeight=function(){var e=n.props.parent();return e===window||e===document.body?n.getDocumentHeight():n.getElementHeight(e)},n.isOutOfBound=function(e){var t=e<0,r=n.getScrollerPhysicalHeight(),o=n.getScrollerHeight(),i=e+r>o;return t||i},n.handleScroll=function(){n.scrollTicking||(n.scrollTicking=!0,(0,y.default)(n.update))},n.handleResize=function(){n.resizeTicking||(n.resizeTicking=!0,(0,y.default)(n.setHeightOffset))},n.unpin=function(){n.props.onUnpin(),n.setState({translateY:"-100%",className:"headroom headroom--unpinned"},function(){setTimeout(function(){n.setState({state:"unpinned"})},0)})},n.pin=function(){n.props.onPin(),n.setState({translateY:0,className:"headroom headroom--pinned",state:"pinned"})},n.unfix=function(){n.props.onUnfix(),n.setState({translateY:0,className:"headroom headroom--unfixed",state:"unfixed"})},n.update=function(){if(n.currentScrollY=n.getScrollY(),!n.isOutOfBound(n.currentScrollY)){var e=(0,A.default)(n.lastKnownScrollY,n.currentScrollY,n.props,n.state),t=e.action;"pin"===t?n.pin():"unpin"===t?n.unpin():"unfix"===t&&n.unfix()}n.lastKnownScrollY=n.currentScrollY,n.scrollTicking=!1},n.currentScrollY=0,n.lastKnownScrollY=0,n.scrollTicking=!1,n.resizeTicking=!1,n.state={state:"unfixed",translateY:0,className:"headroom headroom--unfixed"},n}return u(t,e),l(t,[{key:"componentDidMount",value:function(){this.setHeightOffset(),this.props.disable||(this.props.parent().addEventListener("scroll",this.handleScroll),this.props.calcHeightOnResize&&this.props.parent().addEventListener("resize",this.handleResize))}},{key:"componentWillReceiveProps",value:function(e){e.disable&&!this.props.disable?(this.unfix(),this.props.parent().removeEventListener("scroll",this.handleScroll),this.props.parent().removeEventListener("resize",this.handleResize)):!e.disable&&this.props.disable&&(this.props.parent().addEventListener("scroll",this.handleScroll),this.props.calcHeightOnResize&&this.props.parent().addEventListener("resize",this.handleResize))}},{key:"shouldComponentUpdate",value:function(e,t){return!(0,h.default)(this.props,e)||!(0,h.default)(this.state,t)}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.setHeightOffset()}},{key:"componentWillUnmount",value:function(){this.props.parent().removeEventListener("scroll",this.handleScroll),window.removeEventListener("scroll",this.handleScroll),this.props.parent().removeEventListener("resize",this.handleResize)}},{key:"render",value:function(){var e=this.props,t=e.className,n=o(e,["className"]);delete n.onUnpin,delete n.onPin,delete n.onUnfix,delete n.disableInlineStyles,delete n.disable,delete n.parent,delete n.children,delete n.upTolerance,delete n.downTolerance,delete n.pinStart,delete n.calcHeightOnResize;var r=n.style,i=n.wrapperStyle,a=o(n,["style","wrapperStyle"]),u={position:this.props.disable||"unfixed"===this.state.state?"relative":"fixed",top:0,left:0,right:0,zIndex:1,WebkitTransform:"translateY("+this.state.translateY+")",MsTransform:"translateY("+this.state.translateY+")",transform:"translateY("+this.state.translateY+")"},l=this.state.className;"unfixed"!==this.state.state&&(u=c({},u,{WebkitTransition:"all .2s ease-in-out",MozTransition:"all .2s ease-in-out",OTransition:"all .2s ease-in-out",transition:"all .2s ease-in-out"}),l+=" headroom--scrolled"),u=this.props.disableInlineStyles?r:c({},u,r);var s=c({},i,{height:this.state.height?this.state.height:null}),p=t?t+" headroom-wrapper":"headroom-wrapper";return f.default.createElement("div",{style:s,className:p},f.default.createElement("div",c({ref:this.setRef},a,{style:u,className:l}),this.props.children))}}]),t}(s.Component);g.propTypes={className:d.default.string,parent:d.default.func,children:d.default.any.isRequired,disableInlineStyles:d.default.bool,disable:d.default.bool,upTolerance:d.default.number,downTolerance:d.default.number,onPin:d.default.func,onUnpin:d.default.func,onUnfix:d.default.func,wrapperStyle:d.default.object,pinStart:d.default.number,style:d.default.object,calcHeightOnResize:d.default.bool},g.defaultProps={parent:function(){return window},disableInlineStyles:!1,disable:!1,upTolerance:5,downTolerance:0,onPin:S,onUnpin:S,onUnfix:S,wrapperStyle:{},pinStart:0,calcHeightOnResize:!0},t.default=g},823:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=t>=e?"down":"up",i=Math.abs(t-e);return n.disable?{action:"none",scrollDirection:o,distanceScrolled:i}:t<=n.pinStart&&"unfixed"!==r.state?{action:"unfix",scrollDirection:o,distanceScrolled:i}:t<=r.height&&"down"===o&&"unfixed"===r.state?{action:"none",scrollDirection:o,distanceScrolled:i}:"down"===o&&["pinned","unfixed"].indexOf(r.state)>=0&&t>r.height+n.pinStart&&i>n.downTolerance?{action:"unpin",scrollDirection:o,distanceScrolled:i}:"up"===o&&i>n.upTolerance&&["pinned","unfixed"].indexOf(r.state)<0?{action:"pin",scrollDirection:o,distanceScrolled:i}:"up"===o&&t<=r.height&&["pinned","unfixed"].indexOf(r.state)<0?{action:"pin",scrollDirection:o,distanceScrolled:i}:{action:"none",scrollDirection:o,distanceScrolled:i}}},165:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(3),f=r(s),p=n(13),d=r(p),T=n(167),h=r(T),E=n(151),y=r(E),m=n(166),A=n(59),S=function(e){var t,n;return n=t=function(t){function n(){return i(this,n),a(this,t.apply(this,arguments))}return u(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,y.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case A.TAG_NAMES.SCRIPT:case A.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case A.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return c({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[c({},o,this.mapNestedChildrenToProps(n,i))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case A.TAG_NAMES.TITLE:return c({},o,(t={},t[r.type]=a,t.titleAttributes=c({},i),t));case A.TAG_NAMES.BODY:return c({},o,{bodyAttributes:c({},i)});case A.TAG_NAMES.HTML:return c({},o,{htmlAttributes:c({},i)})}return c({},o,(n={},n[r.type]=c({},i),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=c({},t);return Object.keys(e).forEach(function(t){var r;n=c({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return f.default.Children.forEach(e,function(e){if(e&&e.props){var i=e.props,a=i.children,u=o(i,["children"]),c=(0,m.convertReactPropstoHtmlAttributes)(u);switch(n.warnOnInvalidChildren(e,a),e.type){case A.TAG_NAMES.LINK:case A.TAG_NAMES.META:case A.TAG_NAMES.NOSCRIPT:case A.TAG_NAMES.SCRIPT:case A.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:a})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),i=c({},r);return n&&(i=this.mapChildrenToProps(n,i)),f.default.createElement(e,i)},l(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(f.default.Component),t.propTypes={base:d.default.object,bodyAttributes:d.default.object,children:d.default.oneOfType([d.default.arrayOf(d.default.node),d.default.node]),defaultTitle:d.default.string,defer:d.default.bool,encodeSpecialCharacters:d.default.bool,htmlAttributes:d.default.object,link:d.default.arrayOf(d.default.object),meta:d.default.arrayOf(d.default.object),noscript:d.default.arrayOf(d.default.object),onChangeClientState:d.default.func,script:d.default.arrayOf(d.default.object),style:d.default.arrayOf(d.default.object),title:d.default.string,titleAttributes:d.default.object,titleTemplate:d.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,m.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},g=function(){return null},b=(0,h.default)(m.reducePropsToState,m.handleClientStateChange,m.mapStateOnServer)(g),_=S(b);_.renderStatic=_.rewind,t.Helmet=_,t.default=_},59:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},166:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(3),u=r(a),c=n(7),l=r(c),s=n(59),f=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},p=function(e){var t=y(e,s.TAG_NAMES.TITLE),n=y(e,s.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=y(e,s.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},d=function(e){return y(e,s.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return i({},e,t)},{})},h=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[s.TAG_NAMES.BASE]}).map(function(e){return e[s.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o],a=i.toLowerCase();if(e.indexOf(a)!==-1&&n[a])return t.concat(n)}return t},[])},E=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&_("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var u=i[a],c=u.toLowerCase();t.indexOf(c)===-1||n===s.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||c===s.TAG_PROPERTIES.REL&&"stylesheet"===e[c].toLowerCase()||(n=c),t.indexOf(u)===-1||u!==s.TAG_PROPERTIES.INNER_HTML&&u!==s.TAG_PROPERTIES.CSS_TEXT&&u!==s.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],c=(0,l.default)({},r[u],o[u]);r[u]=c}return e},[]).reverse()},y=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},m=function(e){return{baseTag:h([s.TAG_PROPERTIES.HREF],e),bodyAttributes:T(s.ATTRIBUTE_NAMES.BODY,e),defer:y(e,s.HELMET_PROPS.DEFER),encode:y(e,s.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(s.ATTRIBUTE_NAMES.HTML,e),linkTags:E(s.TAG_NAMES.LINK,[s.TAG_PROPERTIES.REL,s.TAG_PROPERTIES.HREF],e),metaTags:E(s.TAG_NAMES.META,[s.TAG_PROPERTIES.NAME,s.TAG_PROPERTIES.CHARSET,s.TAG_PROPERTIES.HTTPEQUIV,s.TAG_PROPERTIES.PROPERTY,s.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:E(s.TAG_NAMES.NOSCRIPT,[s.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:d(e),scriptTags:E(s.TAG_NAMES.SCRIPT,[s.TAG_PROPERTIES.SRC,s.TAG_PROPERTIES.INNER_HTML],e),styleTags:E(s.TAG_NAMES.STYLE,[s.TAG_PROPERTIES.CSS_TEXT],e),title:p(e),titleAttributes:T(s.ATTRIBUTE_NAMES.TITLE,e)}},A=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){A(t)},0)}}(),S=function(e){return clearTimeout(e)},g="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||A:e.requestAnimationFrame||A,b="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||S:e.cancelAnimationFrame||S,_=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},v=null,O=function(e){v&&b(v),e.defer?v=g(function(){R(e,function(){v=null})}):(R(e),v=null)},R=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,f=e.styleTags,p=e.title,d=e.titleAttributes;M(s.TAG_NAMES.BODY,r),M(s.TAG_NAMES.HTML,o),P(p,d);var T={baseTag:C(s.TAG_NAMES.BASE,n),linkTags:C(s.TAG_NAMES.LINK,i),metaTags:C(s.TAG_NAMES.META,a),noscriptTags:C(s.TAG_NAMES.NOSCRIPT,u),scriptTags:C(s.TAG_NAMES.SCRIPT,l),styleTags:C(s.TAG_NAMES.STYLE,f)},h={},E={};Object.keys(T).forEach(function(e){var t=T[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(E[e]=T[e].oldTags)}),t&&t(),c(e,h,E)},w=function(e){return Array.isArray(e)?e.join(""):e},P=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=w(e)),M(s.TAG_NAMES.TITLE,t)},M=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(s.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),u=0;u<a.length;u++){var c=a[u],l=t[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),o.indexOf(c)===-1&&o.push(c);var f=i.indexOf(c);f!==-1&&i.splice(f,1)}for(var p=i.length-1;p>=0;p--)n.removeAttribute(i[p]);o.length===i.length?n.removeAttribute(s.HELMET_ATTRIBUTE):n.getAttribute(s.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(s.HELMET_ATTRIBUTE,a.join(","))}},C=function(e,t){var n=document.head||document.querySelector(s.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+s.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===s.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===s.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(s.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return a=t,n.isEqualNode(e)})?o.splice(a,1):i.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),i.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:i}},I=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},N=function(e,t,n,r){var o=I(n),i=w(t);return o?"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+">"+f(i,r)+"</"+e+">":"<"+e+" "+s.HELMET_ATTRIBUTE+'="true">'+f(i,r)+"</"+e+">"},L=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===s.TAG_PROPERTIES.INNER_HTML||e===s.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+f(r[t],n)+'"';return e?e+" "+o:o},""),i=r.innerHTML||r.cssText||"",a=s.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+s.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")},"")},x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.REACT_TAG_MAP[n]||n]=e[n],t},t)},H=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[s.HTML_TAG_MAP[n]||n]=e[n],t},t)},j=function(e,t,n){var r,o=(r={key:t},r[s.HELMET_ATTRIBUTE]=!0,r),i=x(n,o);return[u.default.createElement(s.TAG_NAMES.TITLE,i,t)]},G=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[s.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=s.REACT_TAG_MAP[e]||e;if(n===s.TAG_PROPERTIES.INNER_HTML||n===s.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),u.default.createElement(e,o)})},k=function(e,t,n){switch(e){case s.TAG_NAMES.TITLE:return{toComponent:function(){return j(e,t.title,t.titleAttributes,n)},toString:function(){return N(e,t.title,t.titleAttributes,n)}};case s.ATTRIBUTE_NAMES.BODY:case s.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return x(t)},toString:function(){return I(t)}};default:return{toComponent:function(){return G(e,t)},toString:function(){return L(e,t,n)}}}},U=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.scriptTags,l=e.styleTags,f=e.title,p=void 0===f?"":f,d=e.titleAttributes;return{base:k(s.TAG_NAMES.BASE,t,r),bodyAttributes:k(s.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:k(s.ATTRIBUTE_NAMES.HTML,o,r),link:k(s.TAG_NAMES.LINK,i,r),meta:k(s.TAG_NAMES.META,a,r),noscript:k(s.TAG_NAMES.NOSCRIPT,u,r),script:k(s.TAG_NAMES.SCRIPT,c,r),style:k(s.TAG_NAMES.STYLE,l,r),title:k(s.TAG_NAMES.TITLE,{title:p,titleAttributes:d},r)}};t.convertReactPropstoHtmlAttributes=H,t.handleClientStateChange=O,t.mapStateOnServer=U,t.reducePropsToState=m,t.requestAnimationFrame=g,t.warn=_}).call(t,function(){return this}())},167:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(u){function p(){T=e(d.map(function(e){return e.props})),h.canUseDOM?t(T):n&&(T=n(T))}if("function"!=typeof u)throw new Error("Expected WrappedComponent to be a React component.");var d=[],T=void 0,h=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.peek=function(){return T},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=T;return T=void 0,d=[],e},t.prototype.shouldComponentUpdate=function(e){return!f(e,this.props)},t.prototype.componentWillMount=function(){d.push(this),p()},t.prototype.componentDidUpdate=function(){p()},t.prototype.componentWillUnmount=function(){var e=d.indexOf(this);d.splice(e,1),p()},t.prototype.render=function(){return l.createElement(u,this.props)},t}(c.Component);return h.displayName="SideEffect("+r(u)+")",h.canUseDOM=s.canUseDOM,h}}var c=n(3),l=r(c),s=r(n(78)),f=r(n(98));e.exports=u},98:function(e,t,n){"use strict";var r=n(157);e.exports=function(e,t,n,o){var i=n?n.call(o,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var a=r(e),u=r(t),c=a.length;if(c!==u.length)return!1;o=o||null;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<c;s++){var f=a[s];if(!l(f))return!1;var p=e[f],d=t[f],T=n?n.call(o,p,d,f):void 0;if(T===!1||void 0===T&&p!==d)return!1}return!0}},557:function(e,t){},558:function(e,t){},456:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};n(558),n(557);var i=n(3),a=r(i),u=n(180),c=r(u),l=n(74),s=n(38),f={display:"flex",flexDirection:"column",marginLeft:"1rem",marginRight:"1rem",marginTop:"1rem"},p={marginBottom:(0,l.rhythm)(1)};t.default=function(e){var t=e.style,n=void 0===t?{}:t,r=e.authors_count;return a.default.createElement("div",{style:o({},f,n)},a.default.createElement("span",{style:p},"yerevancoder.com is a place for coders in Armenia to share their thoughts, experiences in programming and tech. ",r," coders have already contributed and we are always looking for more contributors, add a post"," ",a.default.createElement("a",{
href:"https://github.com/yerevancoder/yerevancoder.github.io"},"here")),a.default.createElement("span",null,"Post a tech job on our ",a.default.createElement(c.default,{to:s.ROUTES.JOBS_TABLE},"hiring board")))},e.exports=t.default},463:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0,n(556);var u=n(3),c=r(u),l=n(180),s=r(l),f=n(328),p=r(f),d=n(165),T=r(d),h=n(822),E=r(h),y=n(456),m=r(y),A=n(74),S={marginBottom:(0,A.rhythm)(.25)},g=function(e){function t(){var n,r,a;o(this,t);for(var u=arguments.length,c=Array(u),l=0;l<u;l++)c[l]=arguments[l];return n=r=i(this,e.call.apply(e,[this].concat(c))),r.state={showing_header:!1},r.unpinned=function(){return r.setState(function(){return{showing_header:!0}})},r.unfixed=function(){return r.setState(function(){return{showing_header:!1}})},a=n,i(r,a)}return a(t,e),t.prototype.render=function(){var e=(0,p.default)(this,"props.data.site.siteMetadata.title"),t=(0,p.default)(this,"props.data.allMarkdownRemark.edges"),n={};this.state.showing_header===!0&&(n=this.props.header_style);var r=new Set(t.map(function(e){var t=e.node;return t.frontmatter.author})),o=r.size;return c.default.createElement("div",null,c.default.createElement(T.default,{title:e}),c.default.createElement(E.default,{onPin:this.pinned,onUnpin:this.unpinned,onUnfix:this.unfixed},c.default.createElement(m.default,{style:n,authors_count:o})),t.map(function(e){var t=e.node,n=t.frontmatter,r=n.title,o=n.tags,i=n.author,a=n.date;return c.default.createElement("div",{key:t.fields.slug},c.default.createElement("h3",{style:S},c.default.createElement(s.default,{style:{boxShadow:"none"},to:t.fields.slug},r)),c.default.createElement("small",null,a," | ",t.wordCount.words," words | ",t.timeToRead," minutes to read | ",i," ","| ",o),c.default.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))}))},t}(c.default.Component);g.defaultProps={header_style:{backgroundColor:"hsla(247.5, 50%, 3.1%, 0.9)",color:"white",paddingLeft:"1%",paddingRight:"1%",paddingTop:"1%",transition:"all .1s ease-in-out"}},g.displayName="BlogIndex",t.default=g;t.pageQuery="** extracted graphql fragment **"},38:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.LARGER_CHECKBOX_CSS=t.MEDIA_QUERIES=t.MODAL_CSS=t.GLOBAL_CSS=t.ARMENIA_COLORS=t.SESSION_USER=t.NO_MARGIN_BOTTOM=t.MODAL_TRANSITION=t.SPACER_10_H=t.SPACER_30_H=t.JOB_POSTING_DESCRIPTION_LIMIT=t.SUMMARY_LIMIT=t.DISPLAY_FLEX_S=t.TEXT_S=t.ROW=t.ROUTES=void 0;var o=n(3),i=r(o),a=(t.ROUTES={JOBS_TABLE:"/hiring-board",NEW_JOB_POSTING:"/new-job-posting"},t.ROW={display:"flex",justifyContent:"space-between"},t.TEXT_S={fontFamily:"Montserrat, sans-serif"},t.DISPLAY_FLEX_S={display:"flex"},t.SUMMARY_LIMIT=120,t.JOB_POSTING_DESCRIPTION_LIMIT=1e3,t.SPACER_30_H=i.default.createElement("div",{style:{height:"30px",width:"100%"}}),t.SPACER_10_H=i.default.createElement("div",{style:{height:"10px",width:"100%"}}),t.MODAL_TRANSITION=450);t.NO_MARGIN_BOTTOM={marginBottom:0},t.SESSION_USER="yerevan-coder-authed-user",t.ARMENIA_COLORS={red:"#ec493c",blue:"#0c5fa1",orange:"#f58f31"},t.GLOBAL_CSS="\n.loginActionRow__GetHiredText {\n  margin-bottom:0;\n  font-family: 'Montserrat, sans-serif';\n}\n\ninput[type=button], input[type=submit] {\n  border: 0;\n  border-radius: 5px;\n  padding: 3px 15px;\n  box-shadow: inset 0 2px 4px 0 hsla(0, 0%, 1%, 0.20);\n  background-color: hsl(220, 12%, 95%);\n}\n",t.MODAL_CSS="\n.ReactModal__Content {\n  opacity: 0;\n}\n\n.ReactModal__Content--after-open {\n  opacity: 1;\n  transition: opacity "+a+"ms;\n}\n\n.ReactModal__Content--before-close {\n  opacity: 0;\n}",t.MEDIA_QUERIES="\n.loginActionRow__Container, .loginActionRow__AuthingButtons {\n  display:flex;\n}\n\n@media (min-width: 620px) {\n  .loginActionRow__GetHiredText {\n    font-size:24px;\n  }\n\n  .loginActionRow__Container, .loginActionRow__AuthingButtons {\n    flex-direction:row;\n    justify-content:space-between;\n    align-items:center;\n  }\n}\n\n@media (max-width: 619px) {\n  .ReactModal__Content--after-open {\n    width:90%;\n  }\n  .loginActionRow__GetHiredText {\n    font-size:39px;\n  }\n  .loginActionRow__Container, .loginActionRow__AuthingButtons {\n    flex-direction:column;\n    text-align:center;\n  }\n  input[type=button] {\n    margin-top:10px;\n  }\n}\n",t.LARGER_CHECKBOX_CSS='\n@supports (zoom:2) {\n\tinput[type="radio"],  input[type=checkbox]{\n\t  zoom: 1.3;\n\t}\n}\n\n@supports not (zoom:2) {\n\tinput[type="radio"],  input[type=checkbox]{\n\t\ttransform: scale(1.3);\n\t}\n}\n'}});
//# sourceMappingURL=component---src-pages-index-js-15ecbaa300c77da110da.js.map