import React, { useState } from 'react';
import './App.css';

function App() {
  const [teamMemberList, setTeamMemberList] = useState([
    {
      name: 'John',
      email: 'john@gmail.com',
      role: 'Frontend Engineer',
    },
    {
      name: 'Katie',
      email: 'katie@gmail.com',
      role: 'Data Scientist',
    },
    {
      name: 'Jason',
      email: 'jason@gmail.com',
      role: 'Backend Engineer',
    },
  ]);

  return (
    <div className="App">
      {teamMemberList.map(teamMember => (
        <div>
          <h2>{teamMember.name}</h2>
          <p>{teamMember.email}</p>
          <p>{teamMember.role}</p>
        </div>
        ))}
    </div>
  );
}

export default App;
