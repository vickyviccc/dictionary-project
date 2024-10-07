import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props) {
  return (
    <div className="Results">
      <Meaning meaning={props.meaning} />
      <Phonetics meaning={props.meaning.phonetics}/>
    </div>
  );
}
