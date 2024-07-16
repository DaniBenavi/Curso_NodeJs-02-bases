interface User {
  id: number
  name: string
}

const users = [
  {
    id: 1,
    name: 'John Doe'
  },
  {
    id: 2,
    name: 'Jane Doe'
  }
]

export const getUserById = (id: number, callback: (err?: string, user?: User) => void) => {
  0
  const user = users.find(user => user.id === id)

  user ? callback(undefined, user) : callback(`User not found with id ${id}`)
}
