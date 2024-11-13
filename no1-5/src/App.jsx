import React from 'react';
import ChildButton from './ChildButton.jsx';

class App extends React.Component {
  handleButtonClick = () => {
    alert('Button clicked in child component!');
  };
}
function Age(props) {
  return <p>You are {props.age} years old.</p>;
}

function Status(props) {
  return <p>{props.online ? 'Online' : 'Offline'}</p>;
}

function FruitList(props) {
  return (
    <ul>
      {props.fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

function UserCard(props) {
  return (
    <div>
      <h2>{props.user.name}</h2>
      <p>Age: {props.user.age}</p>
      <p>Email: {props.user.email}</p>
    </div>
  );
}

function App() {
  const fruits = ['Apple', 'Banana', 'Cherry'];
  const user = {
    name: 'Sunaryo',
    age: 15,
    email: 'Sunaryo@example.com',
  };

  return (
    <div>
      <Greeting name="Alice" />
      <Age age={15} />
      <Status online={true} />
      <FruitList fruits={fruits} />
      <UserCard user={user} />
    </div>
  );
}

export default App;