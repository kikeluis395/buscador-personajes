import React, {  useEffect, useState } from "react";
import "./Tag.css";
const Tag = ({singleCharacter}) => {
  const [array, setArray]= useState([]);
  const [bolean, setBolean] = useState(false);
  const [list, setList] = useState(singleCharacter);
  const [tag, setTag] = useState('');

  const handleTag = e => {
    setTag(e.target.value);
    console.log(tag);
   }
 
  const handleList = e => {
    e.preventDefault()
    setArray([...array, tag]);
    setBolean(true);
    setTag('');
    console.log(array);
  }

  useEffect(() => {
    setList({
      ...list,
      tag: array
    })
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [array])

  return (
    <div>
      <div className="tag-container">
        <div className="tag-cards-container">
          {
            bolean?
            list.tag.map( (item, index) => (
              <div className="tag-card" key={index}>
                {item}
              </div>
            )): null
          }
        </div>
        <form onSubmit={handleList}>
          <input type="text" className="tag" placeholder="Add a tag" value={tag} onChange={handleTag}/>
        </form>
      </div>
    </div>
  );
};

export default Tag;
