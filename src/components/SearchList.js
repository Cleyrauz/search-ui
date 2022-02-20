import React from "react";
import Result from "./Result";

const SearchList = ({results}) => {

  const orderNodes = results.sort(compare);

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
     <div data-testid="result">
         {orderNodes.map((result,i) => (
          <div key={i} data-testid={`result-item-${i}`}>
                <Result title={result.title} description={result.description} tags={result.tags}></Result>
          </div>
        ))}
    </div>
    </>
  )

}

export default SearchList;