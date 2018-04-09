webpackJsonp([87164367457709],{625:function(e,a){e.exports={data:{site:{siteMetadata:{title:"yerevancoder",author:"Coders of Armenia"}},markdownRemark:{id:"/Users/Edgar/Repos/yerevan-coder/src/pages/2018-03-13-how-yerevan-coder-works/index.md absPath of file >>> MarkdownRemark",html:'<p><strong>This is part one of a two part series, see\n<a href="../2018-04-05-how-yerevan-coder-works-part-two">part-two</a> for the rest of the post.</strong></p>\n<h1>web application</h1>\n<p><code class="language-text">yerevancoder</code>, (yc), is a <a href="https://www.gatsbyjs.org/">gatsby</a> web application and its built using a\nvery important JavaScript library called <a href="https://reactjs.org/">react</a>. The site is a hybrid app\nbecause some of the site is generated on the server side (the blog posts) and some parts (the hiring\nboard) are dynamic and made on the client with <code class="language-text">JavaScript</code>. In addition, yc is a ‘serverless’ application\nbecause we use <a href="https://firebase.google.com/">firebase</a> to provide for things like user\nauthentication and a database, (because our traffic is low we don’t pay firebase for the\nservice). This means that we can build everything for our application with just JavaScript and we\ndon’t have to run a server. Because the site is a github pages site, we don’t pay for hosting (the\ncomputers that physically provide the <code class="language-text">HTML</code> and <code class="language-text">JavaScript</code>). Serverless <code class="language-text">JavaScript</code> applications\nare very popular now because you can build an entire startup just by writing <code class="language-text">JavaScript</code>.</p>\n<p><code class="language-text">GitHub</code> gives us a free domain at <code class="language-text">http://yerevancoder.github.io</code> but you’ll notice that the site\nis <code class="language-text">https://yerevancoder.com</code>. So we have a custom domain name, this is done by having a <code class="language-text">CNAME</code>\nfile at <code class="language-text">public/CNAME</code>. However that doesn’t provide us with\n<a href="https://en.wikipedia.org/wiki/HTTPS">https</a>, so for that part we use\n<a href="https://www.cloudflare.com/">cloudflare</a> which provides us with free\n<a href="https://en.wikipedia.org/wiki/Denial-of-service_attack">DDoS</a> protection and <code class="language-text">https</code>.</p>\n<h2>The blog posts</h2>\n<p>Blog posts are easy to write and require knowledge of only two things, <a href="https://git-scm.com/">git</a>\nand <a href="https://en.wikipedia.org/wiki/Markdown">markdown</a>. To learn <code class="language-text">git</code>, you need practice and we use\nit so that we can save the blog posts to the github repo and make pull requests (a request for\nsomeone to accept your work into a master copy of the source code). I recommend looking at this\ninteractive website for learning <a href="https://learngitbranching.js.org/">git</a> and our own blog\n<a href="https://yerevancoder.com/2018-02-18-git-and-github/">post</a>. For markdown, look at the source code\nof other blog posts and keep this\n<a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">cheatsheet</a> open.</p>\n<h2>How to write a blog post</h2>\n<p>Exact steps to write a blog post:</p>\n<ol>\n<li>First <a href="https://help.github.com/articles/fork-a-repo/">fork</a> the main\n<a href="https://github.com/yerevancoder/yerevancoder.github.io">repo</a></li>\n<li><a href="https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository">clone</a> your <code class="language-text">fork</code>.</li>\n<li><code class="language-text">cd</code> to your recently cloned directory and install all the dependencies with either <code class="language-text">yarn</code> or\n<code class="language-text">npm</code>. So something like:</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ <span class="token function">git</span> clone YOUR_FORK_OF_YEREVAN_CODER\n$ <span class="token function">cd</span> YOUR_FORK_OF_YEREVAN_CODER\n$ <span class="token function">npm</span> <span class="token function">install</span> <span class="token comment"># OR just type yarn</span>\n</code></pre>\n      </div>\n<ol start="4">\n<li>Now run <code class="language-text">npm run dev</code> or just <code class="language-text">yarn dev</code>. This will start a local web server on <code class="language-text">localhost:8000</code>\nand you can see the site automatically rebuilt whenever you make a change, it lets you iterate\nvery fast, the automatic refresh is called\n<a href="https://webpack.js.org/concepts/hot-module-replacement/">hot-module-replacement</a> and gatsby sets\nit up for us.</li>\n</ol>\n<p><img src="/hmr-refresh-is-awesome-f44d5d1f56a6e1617b4b9051a60facd5.gif"></p>\n<p>Note that <code class="language-text">gatsby</code> will generate an <code class="language-text">HTML</code> file for JavaScript files under <code class="language-text">src/pages</code>, so make a\nnew directory with <code class="language-text">mkdir</code> under <code class="language-text">src/pages</code>. Notice how the other directories are organized with\nthe date and title in the directory names.</p>\n<ol start="5">\n<li>Under your new directory, create an <code class="language-text">index.md</code> file. This is your blog post and you write it in\n<code class="language-text">markdown</code>, be sure to make sure that the top part of the markdown file is set up correctly,</li>\n</ol>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/meta-data-1d45f5f6a568a0a0efe31213b1e59189-e089a.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 20.3125%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAvklEQVQY02WQzQ6DIBCEeRorakVBFFCUHpr+eGua9ND3f47pgqlp0sOXGdhdMgvTakTQDtpZ9N7BBId+dsl3o92RxiSNtVr14FWH4vgPs63Byy6Y1hnnZ8B881juHtIZZIVCXm0cSgUeh0SXfMZVqu/wrYc5afEeAx4h4LIGTFefUgwLETY0nc1pREsphR4grUleUeKokW6yKIUGE2LATI8uDa3VDCnZtzk2ab+trOi+oAFeU0riV5OnWk7f8AEr4oHDTMlTCQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="meta data"\n        title=""\n        src="/static/meta-data-1d45f5f6a568a0a0efe31213b1e59189-fb8a0.png"\n        srcset="/static/meta-data-1d45f5f6a568a0a0efe31213b1e59189-1a291.png 148w,\n/static/meta-data-1d45f5f6a568a0a0efe31213b1e59189-2bc4a.png 295w,\n/static/meta-data-1d45f5f6a568a0a0efe31213b1e59189-fb8a0.png 590w,\n/static/meta-data-1d45f5f6a568a0a0efe31213b1e59189-526de.png 885w,\n/static/meta-data-1d45f5f6a568a0a0efe31213b1e59189-e089a.png 1152w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<ol start="6">\n<li>Once you are happy with the post, create a <a href="https://help.github.com/articles/about-pull-requests/">pull\nrequest</a> and someone with commit access\nfor the main yerevancoder repo will either merge the PR or will give some comments.</li>\n</ol>\n<p>This is basically the flow of all open source projects so its important to get some experience in\nit, the dynamic part which is the React coding part, will be explained in part two.</p>',frontmatter:{title:"How yerevancoder.com works and how you can contribute (Part One)",tags:"yerevancoder, tutorial, reactjs",author:"Edgar Aroutiounian",date:"March 13, 2018",discussionId:"2018-03-13-how-yerevancoder-works"}}},pathContext:{slug:"/2018-03-13-how-yerevan-coder-works/"}}}});
//# sourceMappingURL=path---2018-03-13-how-yerevan-coder-works-3a32bf6a1a6061de40bc.js.map