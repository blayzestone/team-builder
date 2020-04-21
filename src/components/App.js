import React, { useState } from 'react';
import Form from './Form';

function App() {
  const initialFormData = {
    name: '',
    email: '',
    role: '',
  };
  const initialTeam = [
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
  ];

  const [formData, setFormData] = useState(initialFormData);
  const [teamMemberList, setTeamMemberList] = useState(initialTeam);

  const onInputChange = evt => {
    const name = evt.target.name;
    const value = evt.target.value;
    return setFormData({
      ...formData,
      [name]: value,
    });
  }

  const onSubmit = evt => {
    evt.preventDefault();
    setTeamMemberList([...teamMemberList, formData]);
    setFormData(initialFormData);
  }

  return (
    <div className="App">
      {teamMemberList.map((teamMember, index) => (
        <div key={index}>
          <h2>{teamMember.name}</h2>
          <p>{teamMember.email}</p>
          <p>{teamMember.role}</p>
        </div>
        ))}
        <Form values={formData} onInputChange={onInputChange} onSubmit={onSubmit}/>
    </div>
  );
}

export default App;
