import React, { useState, useEffect } from 'react'

const Users = () => {

    const [user, setUser] = useState("")

    useEffect(() => {


        fetch("/api")
            .then((res) => res.json())
            .then((data) => {
                setUser(data.user)
            })
    }, [])
    return (
        <div>
            <h2>{user}</h2>
        </div>
    )
}

/* const [userData, setUserData] = useState([])

  useEffect(() => {
    fetch("/api").then(
      res => res.json())
      .then(
        userData => setUserData(userData.message))
  }, []);


  return (
    <div>

      {<p>{!userData ? "Loading..." :
        userData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      }
    </p>}
    </div>
  );
}
*/
export default Users