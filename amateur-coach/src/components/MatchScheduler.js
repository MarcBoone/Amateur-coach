// src/components/MatchScheduler.js
import React, { useState } from 'react';

const MatchScheduler = () => {
  const [teams, setTeams] = useState('');
  const [dates, setDates] = useState('');
  const [matches, setMatches] = useState([]);

  const handleGenerateSchedule = () => {
    const teamList = teams.split(',').map(team => team.trim());
    const dateList = dates.split(',').map(date => date.trim());
    
    // Zorg ervoor dat het aantal datums en teams overeenkomt voor een eenvoudige generering
    if (teamList.length <= dateList.length) {
      const newMatches = [];
      let matchIndex = 0;

      // Genereer het speelschema
      dateList.forEach(date => {
        const match = teamList[matchIndex] + ' vs ' + teamList[matchIndex + 1];
        newMatches.push({ date, match });
        matchIndex += 2;
      });

      setMatches(newMatches);
    } else {
      alert('Aantal teams moet minder zijn dan of gelijk zijn aan aantal datums.');
    }
  };

  return (
    <div>
      <h1>Speelschema Generator</h1>
      <div>
        <label>
          Teams (comma-separated): 
          <input 
            type="text" 
            value={teams} 
            onChange={e => setTeams(e.target.value)} 
            placeholder="Team 1, Team 2, Team 3, Team 4" 
          />
        </label>
      </div>
      <div>
        <label>
          Speeldagen (comma-separated): 
          <input 
            type="text" 
            value={dates} 
            onChange={e => setDates(e.target.value)} 
            placeholder="2025-04-11, 2025-04-18, 2025-04-25" 
          />
        </label>
      </div>
      <button onClick={handleGenerateSchedule}>Genereer Speelschema</button>

      <div>
        <h2>Gegenereerd Speelschema</h2>
        <ul>
          {matches.map((match, index) => (
            <li key={index}>
              {match.date}: {match.match}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MatchScheduler;
