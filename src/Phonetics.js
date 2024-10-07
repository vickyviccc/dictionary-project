export default function Phonetics(props) {
  if (props.meanings && props.meanings.phonetics) {
    return (
      <div className="Phonetics">
        <p>
          <em><strong>Phonetics: </strong></em>{props.meanings.phonetics}
        </p>
      </div>
    );
  } else {
    return (
      <div className="Phonetics">
        <p>No phonetics available</p>
      </div>
    );
  }
}
