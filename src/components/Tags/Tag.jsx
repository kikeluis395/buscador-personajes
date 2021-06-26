import React, { useState } from "react";
import "./Tag.css";
const Tag = ({ singleCharacter, handleList }) => {
  const [tag, setTag] = useState("");

  const handleTag = (e) => {
    setTag(e.target.value);
    console.log(tag);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTag('');
    handleList(singleCharacter, tag);
  };

  return (
    <div>
      <div className="tag-container">
        <div className="tag-cards-container">
          {singleCharacter.tag.length
            ? singleCharacter.tag.map((item, index) => (
                <div className="tag-card" key={index}>
                  {item}
                </div>
              ))
            : null}
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="tag"
            placeholder="Add a tag"
            value={tag}
            onChange={handleTag}
          />
        </form>
      </div>
    </div>
  );
};

export default Tag;
