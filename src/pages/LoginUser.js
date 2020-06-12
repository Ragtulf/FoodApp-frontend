import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import { useDispatch } from 'react-redux'
import swal from 'sweetalert'
import { user } from '../reducers/user'
import { ShareButton } from '../components/Button/ShareButton'

const loginURL = 'https://grymt-food-app.herokuapp.com/login'
// const loginURL = 'http://localhost:8080/login'

export const LoginForm = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const dispatch = useDispatch()

  const handleSignup = (event) => {
    event.preventDefault()

    fetch(loginURL, {
      method: 'POST',
      body: JSON.stringify({ userName, password }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => {
        if (!res.ok) {
          setUserName('')
          setPassword('')
          swal({
            text: 'Something went wrong',
            icon: 'error',
            button: {
              text: 'Try again'
            }
          })
        } else {
          return res.json()
        }
      })
      .then(({ accessToken, userID }) => {
        if (accessToken) {
          dispatch(user.actions.login())
          dispatch(user.actions.access(accessToken))
          dispatch(user.actions.userId(userID))
          history.push('/profile')
        }
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
          minLength="5"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
          placeholder="******" />
      </SignupLabel>

      <ShareButton buttonName="Login" />
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