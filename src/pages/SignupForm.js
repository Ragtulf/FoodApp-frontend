import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import { ShareButton } from '../components/Button/ShareButton'

import avatars01 from '../components/Avatars2/avatars01.svg'

const signupURL = 'https://grymt-food-app.herokuapp.com/signup'

export const SignupForm = () => {
  const [userName, setUserName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  // AVATARTEST
  // const avatarsArray = [avatars01]

  // const randomSelector = array => {
  //   return array[Math.floor(Math.random() * array.length)]
  // }

  const handleSignup = (event) => {
    event.preventDefault()

    setAvatar(avatars01)

    // const pickAvatar = () => {
    //   const image = randomSelector(avatarsArray)
    //   setAvatar(image)
    // }
    // pickAvatar()

    fetch(signupURL, {
      method: 'POST',
      body: JSON.stringify({ userName, avatar, email, password }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => {
        if (!res.ok) {
          console.log('Error on fetch')
        } else {
          return res.json()
        }
      })
      .then(() => {
        setUserName('')
        setEmail('')
        setPassword('')
        history.push('/login')
      })
      .catch((err) => console.log('errors', err))
  }

  return (
    <UserForm onSubmit={handleSignup}>
      <SignupLabel>
        User name:
        <InputField
          required
          type="text"
          onChange={(event) => setUserName(event.target.value)}
          value={userName}
          placeholder="Your name" />
      </SignupLabel>

      <SignupLabel>
        Password:
        <InputField
          required
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
          placeholder="******" />
      </SignupLabel>

      <SignupLabel>
        E-mail:
        <InputField
          required
          type="email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          placeholder="hey@hey.com" />
      </SignupLabel>

      <ShareButton buttonName="Sign Up" />
    </UserForm>
  )
}

const UserForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #FFFBFA;
  border-radius: 20px;
  margin: 0px 10px;
  padding: 10px;
  `

const SignupLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin: 10px;
  color: #31556D;
`

const InputField = styled.input`
  width: 200px;
  padding: 10px;
  background: #F3DDD4;
  border-radius: 2px;
  border: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #F56C54;
  }
  :-ms-input-placeholder {
    color: #F56C54;
  }
  `