import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(res => {
        setCharacters(res.data.results);
        setLoading(false);
      })
      .catch(err => {
        setError('هنگام دریافت اطلاعات خطایی رخ داده است!');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>loading ... </p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className='container-character'>
      {characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}

export default CharacterList;