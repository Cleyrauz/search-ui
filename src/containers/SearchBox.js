import React, {useState} from "react";
import SearchList from "../components/SearchList";
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
        <div>
          <div className="container">
            <h1 title="Header" className="header">Awesome Search App</h1>
            <div className="input-container">
              <SearchForm onSearchSubmit={(searchRequest) => sendRequest(searchRequest)} />
            </div>
            <SearchList results={results} />
          </div>
        </div>
      </div>
    </>
  );

}

export default SearchBox;