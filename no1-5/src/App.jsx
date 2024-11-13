import React from 'react';

function Age(props) {
  return <p>You are {props.age} years old.</p>;
}

function App() {
  return <Age age={15} />;
}

export default App;