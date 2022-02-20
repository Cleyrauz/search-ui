import React, {useState} from "react";
import ResultList from "../components/ResultList";
import SearchForm from "../components/SearchForm";

const SearchBox = () => {

    const [results, setSearchs] = useState(
        [
           /* {
              "title": "Tempor Iisque",
              "description": "sapien adversarium possim",
              "tags": [
                "delenit",
                "eripuit"
              ],
              "weight": 3
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
            }*/
          ]
      )

  const sendRequest = (searchRequest) =>{
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(searchRequest)
    };
    fetch('http://localhost:8080/api/search', requestOptions)
    .then(response => response.json())
    .then(data => setSearchs(data));
}

  return (
    <>
        <div className="App">
            <div className="banner" />
                <SearchForm onSearchSubmit={(searchRequest) => sendRequest(searchRequest)} />
                <ResultList results={results} />
        </div>
    </>
  );

}

export default SearchBox;