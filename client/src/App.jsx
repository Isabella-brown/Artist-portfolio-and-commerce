import Users from './components/users/users';
import { useState, useEffect } from 'react';

function App() {

  const [userData, setUserData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      res => res.json())
      .then(
        userData => setUserData(userData))
  }, []);


  return (
    <div>

      {/*<p>{!userData ? "Loading..." :
        userData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      }
    </p>*/}
    </div>
  );
}

export default App
