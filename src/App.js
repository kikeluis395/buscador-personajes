import { useEffect, useState } from "react";
import "./App.css";
import Characters from "./components/Characters/Characters";
import Search from "./components/Search/Search";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState([]);

  const fetchCharacters = async () => {
    let response = await fetch("https://api.hatchways.io/assessment/students");
    let { students } = await response.json();
    let studentesTag = students.map((el) => (el = { ...el, tag: [] }));
    setCharacters(studentesTag);
    setFilter(studentesTag);
    console.log(studentesTag);
  };

  const charactersFilter = (search) => {
    // eslint-disable-next-line
    let filtrados = characters.filter((e) => {
      if (
        e.firstName.toLowerCase().includes(search.toLowerCase()) ||
        e.lastName.toLowerCase().includes(search.toLowerCase())
      ) {
        return e;
      }
    });
    setFilter(filtrados);
  };

  const charactersFilterTag = (search) => {
    // eslint-disable-next-line
    let filtrados = characters.filter((e) => {
      if (
        e.tag.find((el) => el.includes(search.toLowerCase())) ||
        search === ''
      ) {
        return e;
      }
    })
    console.log(search);
    setFilter(filtrados);
  }

  const handleList = (item, addTag) => {
    console.log(addTag);
    console.log(item);
    let newTag = characters.map((el) => {
      if (el.id === item.id) {
        el.tag = [...el.tag, addTag];
      }
      return el;
    });
    console.log(newTag);
    setCharacters(newTag);
    setFilter(newTag);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  const Average = ({ grades }) => {
    let total = grades.reduce(
      (total, value) => parseInt(total) + parseInt(value)
    );
    let result = total / grades.length;
    return result;
  };

  return (
    <div className="main">
      <div className="container">
        <div className="characters-container">
          <Search
            placeholder="Search by name"
            charactersFilter={charactersFilter}
          />
          <Search
            placeholder="Search by tag"
            charactersFilter={charactersFilterTag}
          />
          <Characters characters={filter} Average={Average} handleList={handleList}/>
        </div>
      </div>
    </div>
  );
};

export default App;
