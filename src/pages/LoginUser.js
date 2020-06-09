import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import { ShareButton } from '../components/Button/ShareButton'

// const signupURL = 'https://grymt-food-app.herokuapp.com/login'
const loginURL = 'http://localhost:8080/login'

export const LoginForm = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const handleSignup = event => {
    event.preventDefault()

    fetch(loginURL, {
      method: 'POST',
      body: JSON.stringify({ userName, password }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => {
        if (!res.ok) {
          console.log('Error on fetch')
        } else {
          console.log('status ok')
          return res.json()
        }
      })
      // Needs an if statement with accessToken 
      // to redirect to secret-endpoint,
      // Use reducer to login and authenticate
      .then(() => {
        setUserName('')
        setPassword('')
        history.push('/secret')
      })
      .catch(err => console.log('errors', err))
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
          placeholder="Your name"
        />
      </SignupLabel>

      <SignupLabel>
        Password:
        <InputField
          required
          minLength="5"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
          placeholder="******"
        />
      </SignupLabel>

      <ShareButton buttonName='Login' />
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