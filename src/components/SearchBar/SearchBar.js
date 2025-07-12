import React, { useRef } from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  const inputRef = useRef();

  const handleOnButttonClick = () => {
    props.setQuery(inputRef.current.value);
  };
  const handleonEnterClick = (e) => {
    if (e.key === "Enter") {
      props.setQuery(inputRef.current.value);
    }
  };

  return (
    <div className="search-bar">
      <input
        onKeyPress={(e) => handleonEnterClick(e)}
        ref={inputRef}
        type="text"
        placeholder="Search for a movie..."
      />
      <button onClick={handleOnButttonClick}>Search</button>
    </div>
  );
};

export default SearchBar;
