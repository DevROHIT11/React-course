import React from 'react'
// for taking parameters from link at browser (e.g http://localhost:5173/user/ravi)
import { useParams } from 'react-router-dom'

const User = () => {
    // to pass prameters from link
    const params = useParams()
  return (
    <div>
      I'm User {params.username}
    </div>
  )
}

export default User
