import React, { useState } from "react";
import "./styles.css";

const moviesDict = {
  action: [
    { name: "Die Hard", rating: "4/5" },
    { name: "Commando", rating: "5/5" }
  ],
  "psychological thriller": [
    { name: "Shutter Island", rating: "5/5" },
    { name: "The Sixth Sense", rating: "4/5" }
  ],
  "true stories": [
    { name: "The Pursuit of Happyness", rating: "5/5" },
    { name: "Bhaag Milkha Bhaag", rating: "4/5" },
    { name: "Imitation Game", rating: "4/5" }
  ],
  "sci-fi": [
    { name: "Avatar", rating: "5/5" },
    { name: "Mortal Engines", rating: "4/5" }
  ]
};

// converting object to an array of keys
const generes = Object.keys(moviesDict);

export default function App() {
  const [genere, setGenere] = useState("action");

  return (
    <div className="App">
      <h1 style={{color: "#FF8C00", marginTop: "3rem"}}>📽 My Movie List</h1>
      <h3>This is list of my favourite movies in various generes.</h3>
      {generes.map((genere, key) => (
        <button
          key={key}
          style={{
            backgroundColor: "#222",
            color: "#FF8C00",
            border: "1px solid black",
            padding: "0.5rem",
            borderRadius: "0.5rem",
            margin: "0.5rem",
            fontSize: "0.9rem"
          }}
          onClick={() => setGenere(genere)}
        >
          {genere}{" "}
        </button>
      ))}
      <hr />

      {moviesDict[genere].map((movie, key) => (
        <div key={key} style={{ textAlign: "left" }}>
          <ul style={{ paddingInlineStart: "0" }}>
            <li
              style={{
                listStyle: "none",
                border: "1px solid white",
                padding: "0.5rem",
                borderRadius: "0.5rem",
                maxWidth: "300px",
                backgroundColor: "#444",
                color: "#fff"
              }}
            >
              <div style={{ fontSize: "larger" }}>{movie.name}</div>
              <div style={{ fontSize: "smaller" }}>{movie.rating}</div>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}
