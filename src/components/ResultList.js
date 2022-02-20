import React from "react";
import Result from "./Result";

const SearchList = ({results}) => {

  const orderNodes = results.sort(compare);
  const resultNodes = orderNodes.map((result, i) => {
    return (
      <Result key={i} title={result.title} description={result.description} tags={result.tags}></Result>
    );
  });

  function compare( a, b ) {
    if ( a.weight < b.weight ){
      return 1;
    }
    if ( a.weight > b.weight ){
      return -1;
    }
    return 0;
  }

  return(
    <>
      {resultNodes}
    </>
  )

}

export default SearchList;
