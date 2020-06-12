import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

export const UserHeader = () => {
  const [user, setUser] = useState(null)
  const id = useSelector((store) => store.user.id)
  // const loggedIn = useSelector((store) => store.user.loggedIn)

  useEffect(() => {
    fetch(`https://grymt-food-app.herokuapp.com/login/user/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setUser(json)
        console.log(id)
        console.log(json)
      })
  }, [id])

  return (
    <div>
      <p>This is the UserHeader</p>
    </div>
  )
}