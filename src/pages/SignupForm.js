import React, { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import { ShareButton } from '../components/Button/ShareButton'

const signupURL = 'https://grymt-food-app.herokuapp.com/signup'

export const SignupForm = () => {
  const [userName, setUserName] = useState('')
  // const [avatar, setAvatar] = useState('')
  const [email, setEmail] = useState('')
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
      // .then(() => {
      //   setUserName('')
      //   setEmail('')
      //   setPassword('')
      //   history.push('/login')
      // })
      .catch((err) => console.log('errors', err))
  }

  return (
    <UserForm onSubmit={handleSignup}>
      <SignupTitle>Sign Up</SignupTitle>
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

      {/* <ProfileLabel
        for='file'>
        +
      </ProfileLabel> */}
      <PicInput
        type='file' ref={fileInput} />

      {/* <SignupLabel>
        Image:
        <InputField
          type="file"
          ref={fileInput}
          placeholder="Profile pic" />
      </SignupLabel> */}

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

const SignupTitle = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  color: #8DCAC7;
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

// const PicInput = styled.input`
//   width: 0.1px;
//   height: 0.1px;
//   opacity: 0;
//   overflow: hidden;
//   position: absolute;
//   z-index: -1;
// `

// const ProfileLabel = styled.label`
//   background-color: #F97A2D;
//   width: 106px;
//   height: 106px;
//   border-radius: 50%;

//   ${PicInput}: {
//     font-weight: 700;
//     color: white;
//     background-color: black;
//     display: inline-block
//   }
// `