import React from "react";
import "../App.css";
function CharacterCard({ character }) {
  const { name, image, status } = character;

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Status: {status}</p>
      <img src={image}/>
    </div>
  );
}

export default CharacterCard;
