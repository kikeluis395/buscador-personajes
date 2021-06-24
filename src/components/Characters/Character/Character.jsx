import React, { useState } from "react";
import "./Character.css";
import Tag from "../../Tags/Tag";

const Character = ({ singleCharacter, Average }) => {
  singleCharacter = {...singleCharacter, tag: []};
  const [open, setOpen] = useState(false);
  const [signo, setSigno] = useState("+");
  const show = () => {
    setOpen(!open);
    if (!open) {
      setSigno("-");
    } else {
      setSigno("+");
    }
  };

  return (
    <div className="character-container">
      <div style={{display: "flex"}}>
        <img
          src={singleCharacter.pic}
          alt={singleCharacter.firstName}
          title={singleCharacter.firstName}
        />
        <div className="character-details">
          <h1>
            {singleCharacter.firstName.toUpperCase()}{" "}
            {singleCharacter.lastName.toUpperCase()}
          </h1>
          <p>Email: {singleCharacter.email}</p>
          <p>Company: {singleCharacter.company}</p>
          <p>Skill: {singleCharacter.skill}</p>
          <p>Average: {Average(singleCharacter)}%</p>
          {open ? (
            <div className="grades-container">
              {singleCharacter.grades.map((e, index) => (
                <p key={index}>{`Test ${index + 1}: ${e}%`}</p>
              ))}
            </div>
          ) : null}
          <Tag singleCharacter={singleCharacter}/>
        </div>
      </div>

      <div className="grades-show" onClick={show}>
        <span>{signo}</span>
      </div>
    </div>
  );
};

export default Character;
