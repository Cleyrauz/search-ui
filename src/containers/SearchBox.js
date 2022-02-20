import React, {useState} from "react";

const SearchBox = () => {

  const [results, setSearchs] = useState(
    [
       {
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
        }
      ]
  )

  return (
    <>
        <h1>This is a search box</h1>
    </>
  );

}

export default SearchBox;