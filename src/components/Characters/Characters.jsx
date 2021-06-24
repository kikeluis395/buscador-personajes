import React from "react";
import Character from "./Character/Character";
import "./Characters.css";

const Characters = ({ characters, Average }) => {
  return (
    <div className="characters-main-container">
      {characters.length>0 ? (
        characters.map((singleCharacter) => (
          <Character
            key={singleCharacter.id}
            singleCharacter={singleCharacter}
            Average={Average}
          />
        ))
      ) : (
        <div className="characters-empty">
          <p>No results found</p>
        </div>
      )}
    </div>
  );
};

export default Characters;
