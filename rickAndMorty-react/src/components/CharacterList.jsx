import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import "../App.css";

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        setCharacters(res.data.results);
        setLoading(false);
      } catch (err) {
        let errMessage;
        if (err.response && err.response.data && err.response.data.error) {
          errMessage = err.response.data.error;
        } else {
          errMessage = err.message;
        }
        setError("پیغام خطا: " + errMessage);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p className="text-message">loading ... </p>;
  }

  if (error) {
    return <p className="text-message">{error}</p>;
  }

  return (
    <div className="container-character">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}

export default CharacterList;
