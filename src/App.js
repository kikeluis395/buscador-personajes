import { useEffect, useState } from "react";
import "./App.css";
import Characters from "./components/Characters/Characters";
import Search from "./components/Search/Search";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState([]);

  const fetchCharacters = async () => {
    const { students } = await fetch(
      "https://api.hatchways.io/assessment/students"
    )
      .then((data) => data.json())
      .catch((error) => console.log(error));
    setCharacters(students);
    setFilter(students);
    console.log(students);
  };

  const charactersFilter = (search) => {
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
          <Search placeholder="Search by name" charactersFilter={charactersFilter} />
          <Search placeholder="Search by tag" charactersFilter={charactersFilter} />
          <Characters characters={filter} Average={Average} />
        </div>
      </div>
    </div>
  );
};

export default App;
