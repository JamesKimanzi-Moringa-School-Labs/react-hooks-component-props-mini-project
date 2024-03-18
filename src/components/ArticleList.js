import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  // Check if posts is defined and is an array before mapping over it
  if (!posts || !Array.isArray(posts)) {
    console.error("Posts must be an array.");
    return null;
  }

  const blogArticles = posts.map((post) => (
    <Article 
      key={post.id}
      title={post.title}
      date={post.date}
      preview={post.preview}
    />
  ));

  return (
    <main>{blogArticles}</main>
  );
}

export default ArticleList;
