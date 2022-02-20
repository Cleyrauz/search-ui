import React, {useState} from "react";
import ResultList from "../components/ResultList";
import SearchForm from "../components/SearchForm";

const SearchBox = () => {

    const mockData = [
        {
           "title": "Tempor Iisque",
           "description": "sapien adversarium possim",
           "tags": [
             "delenit",
             "eripuit"
           ],
           "weight": 2
         },
         {
           "title": "Turpis ad",
           "description": "expetenda tempor massa taciti falli viverra",
           "tags": [
             "signiferumque",
             "mentitum"
           ],
           "weight": 3
         },
         {
           "title": "Urbanitas Ubique Pertinacia Disputationi Disputationi",
           "description": "lobortis maximus propriae falli elementum qualisque convenire ultrices aliquet non constituam periculis erroribus quisque",
           "tags": [
             "maiestatis",
             "alterum"
           ],
           "weight": 10
         }
       ]

  const [results, setSearchs] = useState(
    []
  )

  const sendRequest = (searchRequest) => {
    setSearchs(mockData)
    console.log(searchRequest)
}


  return (
    <>
        <SearchForm onSearchSubmit={(searchRequest) => sendRequest(searchRequest)} />
        <ResultList results={results} />
    </>
  );

}

export default SearchBox;