import React from 'react';
import Helmet from 'react-helmet';
import EffectiveDiscussionsCommentsIframe from 'gatsby-plugin-ed-comments';

import { rhythm, scale } from '../utils/typography';

const post_style = {
  ...scale(-1 / 5),
  display: 'block',
  marginBottom: rhythm(1),
  marginTop: rhythm(-1),
};

const with_bottom_margin = { marginBottom: rhythm(1) };

export default ({ data }) => {
  const post = data.markdownRemark;
  const { title, tags, author, date } = post.frontmatter;
  const tag_names = new Set(tags.split(',').map(s => s.trim().toLowerCase()));
  const siteTitle = data.site.siteMetadata.title;
  return (
    <div>
      <Helmet title={`${title} | ${siteTitle}`} />
      <h1>{title}</h1>
      <p style={post_style}>
        {date} | By {author} | {tags}
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr style={with_bottom_margin} />
      {tag_names.has('javascript') ? (
        <iframe
          height="400px"
          width="100%"
          src="https://repl.it/@fxfactorial/WarlikeIntrepidGraphics?lite=true"
          scrolling="no"
          frameBorder="no"
          allowTransparency="true"
          allowFullScreen="true"
          sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        />
      ) : null}
      <EffectiveDiscussionsCommentsIframe discussionId={post.frontmatter.discussionId} />
    </div>
  );
};

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        tags
        author
        date(formatString: "MMMM DD, YYYY")
        discussionId
      }
    }
  }
`;
