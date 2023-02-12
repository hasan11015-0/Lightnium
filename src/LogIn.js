import React, { useState } from 'react';
import './LogInStyles.css'

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your code here to handle the submission of the form, e.g. sending a request to the server to verify the credentials
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
            />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
            />
        </div>
       </div>
        <button type="submit">Submit</button>
      </form>
      <div className="create-account-container">
        <a href="Register">Create an account</a>
      </div>
    </div>
  );
};

export default LogIn;