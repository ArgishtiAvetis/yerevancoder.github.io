webpackJsonp([35783957827783],{577:function(e,t,r){!function(t,r){e.exports=r()}(this,function(){"use strict";var e={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,a=Object.getOwnPropertyNames,n=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,o=Object.getPrototypeOf,s=o&&o(Object);return function c(u,d,i){if("string"!=typeof d){if(s){var f=o(d);f&&f!==s&&c(u,f,i)}var p=a(d);n&&(p=p.concat(n(d)));for(var m=0;m<p.length;++m){var g=p[m];if(!(e[g]||t[g]||i&&i[g])){var y=l(d,g);try{r(u,g,y)}catch(e){}}}return u}return u}})},711:function(e,t){},625:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0,r(711);var n=r(4),l=a(n),o=r(387),s=a(o);t.default=function(e){var t=e.data,r=t.allMarkdownRemark.edges;return l.default.createElement("div",{className:"BlogTable"},r.map(function(e){var t=e.node,r=t.frontmatter,a=r.title,n=r.tags,o=r.author,c=r.date;return l.default.createElement("div",{key:t.fields.slug,className:"BlogEntryCard"},l.default.createElement("h3",{className:"BlogEntryCard__Banner"},l.default.createElement(s.default,{to:t.fields.slug},a)),l.default.createElement("small",{className:"BlogEntryCard__Byline"},c," | ",t.wordCount.words," words | ",t.timeToRead," minutes to read | ",o," |"," ",n),l.default.createElement("p",{className:"BlogEntryCard__Excerpt",dangerouslySetInnerHTML:{__html:t.excerpt}}))}))};t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-js-1379843365cc5c157cf0.js.map