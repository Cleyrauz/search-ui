import React, {useState} from "react";

const SearchForm = ({onSearchSubmit}) => {

const [text, setText] = useState("");

const handleTextChange = (evt) => {
    setText(evt.target.value);
  }

  const handleSearchSubmit = (evt) => {
    evt.preventDefault();
    const textToSubmit = text.trim();
    if (!textToSubmit){
      return
    }

   onSearchSubmit({
      searchTerm: textToSubmit
    });

    setText("");
  }

  return (
    <form className="form-container" onSubmit={handleSearchSubmit}>
      <input 
        type="text"
        className="input"
        placeholder="Search something..."
        value={text}
        onChange={handleTextChange}
      />
      <button 
        type="submit"
        value="Post"
        className="search-btn"
      >
        Search
      </button>
    </form>
  )

}

export default SearchForm;