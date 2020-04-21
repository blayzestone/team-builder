import React from 'react';

function App({ values, onInputChange, onSubmit }) {
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
        <option value='Frontend Engineer'>Frontend Engineer</option>
        <option value='Backend Engineer'>Backend Engineer</option>
        <option value='Data Scientist'>Data Scientist</option>
        <option value='UX Designer'>UX Designer</option>
        <option value='Shareholder'>Shareholder</option>
      </select></label>

      <button onClick={onSubmit}>submit</button>
    </form>
  );
}

export default App;
