// src/components/MatchList.js
import React from 'react';

const MatchList = ({ matches }) => {
  return (
    <div>
      <h2>Speelschema:</h2>
      <ul>
        {matches.length > 0 ? (
          matches.map((match, index) => (
            <li key={index}>
              {match.date}: {match.match}
            </li>
          ))
        ) : (
          <p>Geen wedstrijden gegenereerd.</p>
        )}
      </ul>
    </div>
  );
};

export default MatchList;
