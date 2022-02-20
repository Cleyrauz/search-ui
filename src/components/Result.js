import React from "react";

const Result = ({title, description, tags}) => {


  return(
    <>
    <div className="list-item">
        <h2 data-testid="title">{title}</h2>
        <p>{description}</p>
        <ul className="tags-wrapper">
        {tags.map(tag => (
          <li className="tag-item" key={tag} data-testid={`result-tag-${tag}`}>{tag}</li>
        ))}
      </ul>
    </div>
    </>
  )

}

export default Result;

