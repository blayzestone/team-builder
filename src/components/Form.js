import React from 'react';

function App(props) {
  const { 
    values, 
    onInputChange, 
    onSubmit, 
    memberToEdit, 
    editMember 
  } = props;
  
  const roles = [
    'Frontend Engineer',
    'Backend Engineer',
    'Data Scientist',
    'UX Designer',
    'Project Manager',
    'Shareholder',
  ];
  return(
    <form>
      <h1>Add a team member</h1>
      <label>Name:&nbsp;
      <input
        value={values.name}
        onChange={onInputChange}
        name='name'
        type='text'
      /></label>
      <label>Email:&nbsp;
      <input 
        value={values.email}
        onChange={onInputChange}
        name='email'
        type='text'
      /></label>
      <label>Role:&nbsp;
      <select onChange={onInputChange}
        name='role'
      >
        {roles.map((role, index) => {
          return(
            <option key={index}
            // Make the default role of the dropdown be the role of the member being edited if there is one
              selected={memberToEdit && memberToEdit.role === role ? true : false}
            >{role}</option>
          );
        })}
      </select></label>

      <button onClick={evt => {
        if(memberToEdit) { // If a team member is being edited when the button is clicked callback is editMember
          return editMember(evt);
        } else {
          return onSubmit(evt);
        }
      }}>submit</button>
    </form>
  );
}

export default App;
