import React from "react";

const Result = ({title, description, tags}) => {

    const tagsNodes = tags.map((tag,i) => {
        return (
          <li key={i}>{tag}</li>
        );
      });

  return(
    <>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>{tagsNodes}</ul>
    </>
  )

}

export default Result;