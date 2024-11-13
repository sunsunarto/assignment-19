import React from 'react';
import UserCard from './UserCard.jsx';

function App() {
  const user = {
    name: 'Sunaryo',
    age: 15,
    email: 'Sunaryo@example.com',
    online: true,
  };

  return (
    <div>
      <UserCard {...user} />
    </div>
  );
}

export default App;