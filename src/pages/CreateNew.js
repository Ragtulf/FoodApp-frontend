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
  const fileInput = useRef()
  const history = useHistory()
  const accessToken = useSelector((store) => store.user.accessToken)

  useEffect(() => {
    if (!accessToken) {
      history.push('/')
    }
  })

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
          <InputField
            required
            type="text"
            onChange={(event) => setShortDescription(event.target.value)}
            value={shortDescription}
            placeholder="Describe your recipe" />
        </RecipeLabel>

        <RecipeLabel>
          Image:
          <InputField
            type="file"
            ref={fileInput}
            placeholder="Image" />
        </RecipeLabel>

        <RecipeLabel>
          Ingredients:
          <DynamicInput placeholderText="Add Ingredient" buttonText="+" fields={ingredients} setFields={setIngredients} />
        </RecipeLabel>

        <RecipeLabel>
          Directions:
          <InputField
            required
            type="text"
            onChange={(event) => setDirections(event.target.value)}
            value={directions}
            placeholder="How to prepare" />
        </RecipeLabel>

        <RecipeLabel>
          Tags:
          <DynamicInput placeholderText="Add Tag" buttonText="+" fields={tags} setFields={setTags} />
        </RecipeLabel>

        <ShareButton buttonName="Share recipe" />

      </RecipeForm>
    </BackgroundContainer>
  )
}

const BackgroundContainer = styled.div`
  background: #FFFBFA;
  border-radius: 20px;
  margin: 0px 10px 40px 10px;
`

const RecipeForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
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