import React from "react";

function Article({title, date = "January 1, 19970", preview}){
  return (
    <Article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </Article>
  )

}

export default Article;