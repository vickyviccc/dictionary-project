import React from "react";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <h3>{meaning.partOfSpeech}</h3>
              <p>{meaning.definition}</p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
