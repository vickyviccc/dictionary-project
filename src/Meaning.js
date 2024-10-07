import React from "react";

export default function Meaning(props) {
  console.log(props.meaning); // Check if 'example' exists in the data
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>{props.meaning.definition}</p>
      <br />
      {props.meaning.example ? (
        <p><em><strong>Example: </strong></em>{props.meaning.example}</p>
      ) : (
        <p><em><strong>No example available.</strong></em></p>)
        }

         <br />
    </div>
  );
}
