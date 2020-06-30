import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components/macro'
import { useHistory } from 'react-router-dom'
import swal from 'sweetalert'
import { useSelector } from 'react-redux'
import { DynamicInput } from '../components/DynamicInput'
import { ShareButton } from '../components/Button/ShareButton'
import { UserHeader } from '../components/Header/UserHeader'

export const CreateNew = () => {
  const [title, setTitle] = useState('')
  const [shortDescription, setShortDescription] = useState('')
  const [ingredients, setIngredients] = useState([{ value: null }])
  const [directions, setDirections] = useState('')
  const [tags, setTags] = useState([{ value: null }])
  const [fileName, setFileName] = useState()
  const fileInput = useRef()
  const history = useHistory()
  const accessToken = useSelector((store) => store.user.accessToken)

  // Go back if not authenticated
  useEffect(() => {
    if (!accessToken) {
      history.push('/')
    }
  })

  // Submitted form trigger fetch w POST req
  // Validation w accesstoken and sweetalert
  const handleSubmit = (event) => {
    event.preventDefault()

    fetch('https://grymt-food-app.herokuapp.com/recipes', {
      method: 'POST',
      body: JSON.stringify({
        title,
        shortDescription,
        directions,
        ingredients: ingredients.map((ingredient) => ingredient.value),
        tags: tags.map((tag) => tag.value)
      }),
      headers: { 'Content-Type': 'application/json', Authorization: accessToken }
    })
      .then((res) => {
        if (!res.ok) {
          swal({
            text: 'Make sure you are logged in!',
            icon: 'warning',
            button: {
              text: 'Try again'
            }
          })
        } else {
          return res.json()
        }
      })
      .then(({ _id }) => {
        const formData = new FormData()
        formData.append('image', fileInput.current.files[0])
        fetch(`https://grymt-food-app.herokuapp.com/recipes/${_id}/image`, {
          method: 'POST',
          body: formData
        })
          .then((res) => res.json())
          .then(() => {
            history.push('/')
          })
      })
      .catch((err) => console.log('error', err))
  }

  return (
    <BackgroundContainer>
      <UserHeader />
      <RecipeForm
        onSubmit={(event) => handleSubmit(event)}>

        <RecipeLabel>
          Title:
          <InputField
            required
            type="text"
            onChange={(event) => setTitle(event.target.value)}
            value={title}
            placeholder="Name of your recipe" />
        </RecipeLabel>

        <RecipeLabel>
          Short Description:
          <DescriptionInput
            required
            maxLength="100"
            type="text"
            onChange={(event) => setShortDescription(event.target.value)}
            value={shortDescription}
            placeholder="Describe your recipe" />
        </RecipeLabel>

        <UploadImg>
          <FileLabel>
            <Plus>+</Plus> Upload your image
            <InputField
              type="file"
              style={{ display: 'none' }}
              ref={fileInput}
              placeholder="Image"
              onChange={(event) => {
                setFileName(event.target.files[0].name)
              }} />
          </FileLabel>
        </UploadImg>
        <FileName>{fileName}</FileName>

        <RecipeLabel>
          <DynamicTitle>Ingredients:</DynamicTitle>
          <DynamicInput placeholderText="Add Ingredient" fields={ingredients} setFields={setIngredients} />
        </RecipeLabel>

        <RecipeLabel>
          Directions:
          <DirectionsInput
            required
            type="text"
            onChange={(event) => setDirections(event.target.value)}
            value={directions}
            placeholder="How to prepare" />
        </RecipeLabel>

        <RecipeLabel>
          <DynamicTitle>Tags:</DynamicTitle>
          <DynamicInput placeholderText="Add Tag" fields={tags} setFields={setTags} />
        </RecipeLabel>

        <ShareButton buttonName="Share recipe" />

      </RecipeForm>
    </BackgroundContainer>
  )
}

const BackgroundContainer = styled.div`
  border-radius: 20px;
  margin: 0px 10px 40px 10px;

  @media (min-width: 600px) {
    width: 80%;
    margin-right: auto;
    margin-left: auto;
  }
`

const RecipeForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  `

const Plus = styled.span`
  font-size: 24px;
  line-height: 21px;
  color: #FFFBFA;
  font-weight: 400;
  margin-right: 10px;
`

const DescriptionInput = styled.textarea`
  resize: none;
  width: 200px;
  height: 40px;
  border: none;
  padding: 10px;
  background: #F3DDD4;
  color: #F56C54;
  border-radius: 2px;
  font-family: 'Circular', sans-serif;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #F56C54;
    font-family: 'Circular', sans-serif;
  }
  :-ms-input-placeholder {
    color: #F56C54;
    font-family: 'Circular', sans-serif;
  }

  &:focus {
    outline: 2px solid #F56C54;
  }

  @media (min-width: 800px) {
    width: 250px;
  }
`

const UploadImg = styled.div`
  width: 200px;
  padding: 10px;
  background: #F3DDD4;
  border-radius: 2px;
  text-align: center;
  margin-top: 20px;

  @media (min-width: 800px) {
    width: 250px;
  }
`

const FileLabel = styled.label`
  color: #F56C54;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const RecipeLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin: 10px;
  color: #31556D;
  `

const InputField = styled.input`
  width: 200px;
  padding: 10px;
  background: #F3DDD4;
  color: #F56C54;
  border-radius: 2px;
  font-family: 'Circular', sans-serif;
  border: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #F56C54;
    font-family: 'Circular', sans-serif;
  }
  :-ms-input-placeholder {
    color: #F56C54;
    font-family: 'Circular', sans-serif;
  }

  &:focus {
    outline: 2px solid #F56C54;
  }

  @media (min-width: 800px) {
    width: 250px;
  }
  `

  const DirectionsInput = styled.textarea`
    resize: none;
    width: 200px;
    height: 100px;
    border: none;
    padding: 10px;
    background: #F3DDD4;
    color: #F56C54;
    border-radius: 2px;
    font-family: 'Circular', sans-serif;

    ::placeholder,
    ::-webkit-input-placeholder {
      color: #F56C54;
      font-family: 'Circular', sans-serif;
    }
    :-ms-input-placeholder {
      color: #F56C54;
      font-family: 'Circular', sans-serif;
    }
  
    &:focus {
      outline: 2px solid #F56C54;
    }

    @media (min-width: 800px) {
      width: 250px;
    }
  `

const DynamicTitle = styled.p`
  color: #31556D;
  font-size: 16px;
  margin: 0;
`

const FileName = styled.p`
  color: #F56C54;
  font-size: 10px;
  text-align: center;
`