import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null); // Set the initial state to null or an empty object

  function handleResponse(response) {
    console.log(response);
    // Store the entire response instead of one part
    setResults(response.data); 
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
      {/* Pass the results to the Results component */}
      {results && <Results results={results} />}
    </div>
  );
}
