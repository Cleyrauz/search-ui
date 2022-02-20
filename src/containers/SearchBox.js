import axios from "axios";
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

      const sendRequest = async (searchRequest) =>{
        const {data} = await axios.post('http://localhost:8080/api/search', searchRequest)
        setSearchs(data)
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
            <div className="result-container">
              <div className="list-container">
                <SearchList results={results} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}

export default SearchBox;