import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";


export default function Dictionary() {
  
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null); // Use null initially

  function handleResponse(response) {
   
    // Get only the first meaning from the response
    if (response.data.meanings.length > 0) {
      setResults(response.data.meanings[7]); // Get the first meaning
    }
  }

  function search(event) {
    event.preventDefault();
    let apiKey = "ob013544229b2c6b3ft9f43ac4050481";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          onChange={handleKeywordChange}
          placeholder="Look for a word"
        />
      </form>
      {keyword}
      {results && <Results meaning={results} />} {/* Pass only the first meaning */}
    </div>
  );
}
