import { useState } from "react";

export const Article = (props) => {
  const [showAuthor, setShowAuthor] = useState(false);
  const handleClick = () => {
    setShowAuthor(true);
  };

  return (
    <article>
      <h1>{props.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.content }} />
      {props.isSponsored ? <p>Sponsored article</p> : null}
      {showAuthor ? (
        <p>Author: {props.author}</p>
      ) : (
        <button onClick={handleClick}>Show author</button>
      )}
    </article>
  );
};
