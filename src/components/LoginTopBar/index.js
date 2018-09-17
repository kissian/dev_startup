import React from 'react';

const LoginTopBar = ({
  handleChange,
  handleSubmit,
}) => (
  <div>
    <form onSubmit={handleSubmit}>
      <input
        type="text" 
        placeholder="Username" 
        onChange={handleChange}
        name="username"
      />
      <input 
          type="password" 
          placeholder="Password" 
          onChange={handleChange}
          name="password"
      />
      <button type="submit">LOGIN</button>
    </form>
  </div>
)

export default LoginTopBar;