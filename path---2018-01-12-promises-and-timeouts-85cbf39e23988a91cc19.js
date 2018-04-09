webpackJsonp([0xccadff13f035],{611:function(n,s){n.exports={data:{site:{siteMetadata:{title:"yerevancoder",author:"Coders of Armenia"}},markdownRemark:{id:"/Users/Edgar/Repos/yerevan-coder/src/pages/2018-01-12-promises-and-timeouts/index.md absPath of file >>> MarkdownRemark",html:'<p><em>By Edgar Aroutiounian</em>,\ncatch me on <a href=\'https://twitter.com/@edgararout\'>twitter</a></p>\n<p>Here is a simple and elegant way to say “Run this shell command within a\nmaximum of x seconds”</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token string">\'use strict\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> spawnAsync <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'@expo/spawn-async\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> with_timeout <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>cmd<span class="token punctuation">,</span> args<span class="token punctuation">,</span> limit <span class="token operator">=</span> <span class="token number">20</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span> <span class="token operator">=></span>\n  Promise<span class="token punctuation">.</span><span class="token function">race</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>_<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=></span>\n      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`Took longer than </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>limit <span class="token operator">/</span> <span class="token number">1000</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> seconds`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token function">spawnAsync</span><span class="token punctuation">(</span>cmd<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Notice how we don’t need a trailing <code class="language-text">await</code> for the Promise and the\nusage of <code class="language-text">Promise.race</code>.</p>',frontmatter:{title:"Racing to get a timeout",tags:"javascript",author:"Edgar Aroutiounian",date:"January 12, 2018",discussionId:"2019-01-12-promises-and-timeouts"}}},pathContext:{slug:"/2018-01-12-promises-and-timeouts/"}}}});
//# sourceMappingURL=path---2018-01-12-promises-and-timeouts-85cbf39e23988a91cc19.js.map