import { useEffect, useState } from 'react'

interface User {
  id: number
  name: string
  email: string
}

export default function UserList() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then(setUsers)
  }, [])

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id} data-testid="user-item">
          {user.name} ({user.email})
        </li>
      ))}
    </ul>
  )
}
