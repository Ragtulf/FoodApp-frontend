import React, { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import { ShareButton } from '../components/Button/ShareButton'

const signupURL = 'https://grymt-food-app.herokuapp.com/signup'

export const SignupForm = () => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [fileName, setFileName] = useState()
  const [password, setPassword] = useState('')
  const [shortBio, setShortBio] = useState('')
  const history = useHistory()
  const fileInput = useRef()

  const handleSignup = (event) => {
    event.preventDefault()

    fetch(signupURL, {
      method: 'POST',
      body: JSON.stringify({ userName, email, password, shortBio }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => {
        if (!res.ok) {
          console.log('Error on fetch')
        } else {
          console.log(res.json)
          return res.json()
        }
      })
      .then(({ id }) => {
        const formData = new FormData()
        formData.append('image', fileInput.current.files[0])
        fetch(`https://grymt-food-app.herokuapp.com/login/user/${id}/image`, {
          method: 'POST',
          body: formData
        })
          .then((res) => res.json())
          .then((json) => {
            console.log('JSON:', json)
            history.push('/login')
          })
      })
      .catch((err) => console.log('errors', err))
  }

  return (
    <UserForm onSubmit={handleSignup}>
      <HeaderDiv>
        <ButtonColumn>
          <PicInput
            type='file'
            ref={fileInput}
            onChange={(event) => {
              setFileName(event.target.files[0].name)
            }} />
          <FileName>{fileName}</FileName>
        </ButtonColumn>
        <SignupTitle>Sign Up</SignupTitle>
      </HeaderDiv>

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

      <SignupLabel>
        About me:
        <InputField
          required
          type="text"
          onChange={(event) => setShortBio(event.target.value)}
          value={shortBio}
          placeholder="Write a short bio"
          maxLength="140" />
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

const HeaderDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ButtonColumn = styled.div`
  display: flex;
  flex-direction: column;
`

const SignupTitle = styled.h2`
  font-family: 'Circular', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  color: #8DCAC7;
  margin-left: 20px;
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

const PicInput = styled.input`
  color: transparent;
  width: 106px;
  height: 106px;

  &::-webkit-file-upload-button {
    visibility: hidden;
  }

  &::before {
    content: '+';
    color: transparent;
    display: inline-block;
    background-image: url(${process.env.PUBLIC_URL + '/assets/profileButton.svg'});
    width: 106px;
    height: 106px;
    border-radius: 50%;
    cursor: pointer;
  }

  &:active::before {
    background-image: none;
  }
`

const FileName = styled.p`
  font-size: 10px;
`