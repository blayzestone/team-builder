import React, { useState, useEffect } from 'react';
import Form from './Form';

function App() {
  const initialFormData = {
    name: '',
    email: '',
    role: '',
  };
  const initialTeam = [
    {
      id: 0,
      name: 'John',
      email: 'john@gmail.com',
      role: 'Frontend Engineer',
    },
    {
      id: 1,
      name: 'Katie',
      email: 'katie@gmail.com',
      role: 'Data Scientist',
    },
    {
      id: 2,
      name: 'Jason',
      email: 'jason@gmail.com',
      role: 'Backend Engineer',
    },
  ];

  const [formData, setFormData] = useState(initialFormData);
  const [teamMemberList, setTeamMemberList] = useState(initialTeam);
  const [memberToEdit, setMemberToEdit] = useState(null);

  useEffect(() => {
    if(memberToEdit) {
      setFormData(memberToEdit);
    }
  }, [memberToEdit]);

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

    // create a new team member with a unique id
    const newTeamMemberId = teamMemberList.length;
    const newTeamMemberData = {
      ...formData,
      id: newTeamMemberId,
    }
    setTeamMemberList([...teamMemberList, newTeamMemberData]);
    setFormData(initialFormData);
  }

  const editMember = evt => {
    evt.preventDefault();

    const updtatedTeamMemberList = teamMemberList.map(teamMember => {
      if(teamMember.id === memberToEdit.id) {
        return formData;
      } else {
        return teamMember;
      }
    })

    // Reset state but with the updated team member list
    setMemberToEdit(null);
    setFormData(initialFormData);
    return setTeamMemberList(updtatedTeamMemberList);
  }


  return (
    <div className="App">
      {teamMemberList.map((teamMember, index) => (
        <div key={index}>
          <h2>{teamMember.name}</h2>
          <p>{teamMember.email}</p>
          <p>{teamMember.role}</p>
          
          {/* EDIT BUTTON */}
          <button onClick={() => setMemberToEdit(teamMember)}>Edit</button> 
        </div>
        ))}
        <Form 
          values={formData} 
          onInputChange={onInputChange} 
          onSubmit={onSubmit} 
          memberToEdit={memberToEdit}
          editMember={editMember}
        />
    </div>
  );
}

export default App;
