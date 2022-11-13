import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Users = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('/api')
      .then(res => {
        setUsers(res.data)
      }).catch(err => {
        console.log(err)
      })
  }, [])




  return (
    <div>

      <h1>User app</h1>

      {users.map(user => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <p>{user.age}</p>
        </div>
      ))
      }
    </div>

  )
}


export default Users