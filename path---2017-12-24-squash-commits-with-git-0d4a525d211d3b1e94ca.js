webpackJsonp([55470570494735],{609:function(e,s){e.exports={data:{site:{siteMetadata:{title:"yerevancoder",author:"Coders of Armenia"}},markdownRemark:{id:"/Users/Edgar/Repos/yerevan-coder/src/pages/2017-12-24-squash-commits-with-git/index.md absPath of file >>> MarkdownRemark",html:'<p><em>By Robert Adamian</em>,\nfind me on <a href=\'https://twitter.com/@paerallax\'>twitter</a></p>\n<p><img src="https://i.imgur.com/Eh8FBP7.png" alt="alt text" title="Git&#x27;s logo"></p>\n<blockquote>\n<p>Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.</p>\n</blockquote>\n<blockquote>\n<p>As with most other distributed version control systems, and unlike most client–server systems, every Git directory on every computer is a full-fledged repository with complete history and full version tracking abilities, independent of network access or a central server.</p>\n</blockquote>\n<p>It’s also a must-have in any software developer’s toolchain. Using git for version control allows for powerful collaboration in tech teams.</p>\n<p>I won’t delve into Git’s history and the motivations behind it here as that deserves a post of its own or even a series of posts. Instead, we discuss a simple git feature you might need - squashing commits.</p>\n<p>I needed to do this yesterday but forgot the command. First Stack Overflow answers were overly complicated for my use case. So here goes a simplified version.</p>\n<p>Let’s say you’ve been working on a feature and just finished. With git, it’s possible to squash previous commits into one. This helps you logically group commits together before sharing with others. Say you’ve been implementing <a href="https://en.wikipedia.org/wiki/Depth-first_search">DFS</a> and this is your current <code class="language-text">git log</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-zsh"><code class="language-zsh">* 16e9bbd (HEAD -&gt; master) depth-first search working\n* 36ab519 fix vertex lookup\n* aa264b1 label vertices\n* bcd1838 recursive discovery\n* 3a6eed3 isolate subgraph\n* 7126d8e add topological sort</code></pre>\n      </div>\n<p>Now you want to squash your latest 5 commits into one to have a nice history.</p>\n<div class="gatsby-highlight">\n      <pre class="language-zsh"><code class="language-zsh">$ git rebase -i HEAD~5</code></pre>\n      </div>\n<p>After you run this command your terminal editor will open up with the following:</p>\n<div class="gatsby-highlight">\n      <pre class="language-zsh"><code class="language-zsh">pick 3a6eed3 isolate subgraph\npick bcd1838 recursive discovery\npick aa264b1 label vertices\npick 36ab519 fix vertex lookup\npick 16e9bbd depth-first search working</code></pre>\n      </div>\n<p>Note that while doing interactive rebase, commits are displayed in reverse order.</p>\n<p>Replace the words “pick” with “squash” next to the commits you want to squash into the commit before it. In our case:</p>\n<div class="gatsby-highlight">\n      <pre class="language-zsh"><code class="language-zsh">pick 3a6eed3 isolate subgraph\nsquash bcd1838 recursive discovery\nsquash aa264b1 label vertices\nsquash 36ab519 fix vertex lookup\nsquash 16e9bbd depth-first search working</code></pre>\n      </div>\n<p>Save and close the editor.</p>\n<p>If you’re too lazy to type that or you’re operating on a Commodore 64 and desperately need those additional few bytes, it’s also possible to write “s” for squash and “p” for pick. So the latest snippet is equivalent to:</p>\n<div class="gatsby-highlight">\n      <pre class="language-zsh"><code class="language-zsh">p 3a6eed3 isolate subgraph\ns bcd1838 recursive discovery\ns aa264b1 label vertices\ns 36ab519 fix vertex lookup\ns 16e9bbd depth-first search working</code></pre>\n      </div>\n<p>Git will now give you the opportunity to change your commit message into something more descriptive. For doing that, replace this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-zsh"><code class="language-zsh"># This is a combination of 5 commits.\n# The first commit&#39;s message is:\nisolate subgraph\n\n# This is the 2nd commit message:\n\nrecursive discovery\n\n# This is the 3rd commit message:\n\nlabel vertices\n\n# This is the 4th commit message:\n\nfix vertex lookup\n\n# This is the 5th commit message:\n\ndepth-first seach working</code></pre>\n      </div>\n<p>With just:</p>\n<div class="gatsby-highlight">\n      <pre class="language-zsh"><code class="language-zsh">implement depth-first search</code></pre>\n      </div>\n<p>Note that your new commit message line shouldn’t start with <code class="language-text">#</code> as it’ll be treated as a comment.</p>\n<p><code class="language-text">git log</code> should then return:</p>\n<div class="gatsby-highlight">\n      <pre class="language-zsh"><code class="language-zsh">* bb26b9d (HEAD -&gt; master) implement depth-first search\n* ea1a7e8 add topological sort</code></pre>\n      </div>\n<p>That’s it! Now you have your commits squashed into one with an easier to navigate history.</p>',frontmatter:{title:"Squashing commits with git",tags:"git, development",author:"Robert Adamian",date:"December 24, 2017",discussionId:"2017-12-24-squash-commits-with-git"}}},pathContext:{slug:"/2017-12-24-squash-commits-with-git/"}}}});
//# sourceMappingURL=path---2017-12-24-squash-commits-with-git-0d4a525d211d3b1e94ca.js.map