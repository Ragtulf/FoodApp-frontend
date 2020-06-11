import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import { useHistory } from 'react-router-dom'
import swal from 'sweetalert'
import { useSelector } from 'react-redux'
import { DynamicInput } from '../components/DynamicInput'
import { ShareButton } from '../components/Button/ShareButton'

export const CreateNew = () => {
  const [title, setTitle] = useState('')
  const [shortDescription, setShortDescription] = useState('')
  const [ingredients, setIngredients] = useState([{ value: null }])
  const [directions, setDirections] = useState('')
  // const [image, setImage] = useState('')
  const [tags, setTags] = useState([{ value: null }])
  const history = useHistory()
  const accessToken = useSelector((store) => store.user.accessToken)

  useEffect(() => {
    if (!accessToken) {
      history.push('/')
    }
  })

  const handleSubmit = (event) => {
    console.log('OnClick:', event)
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
          console.log('error')
          console.log('ingredients', ingredients)
          console.log(res.json)
          swal({
            text: 'Make sure you are logged in!',
            icon: "warning",
            button: {
              text: 'Try again'
            },
          })
        } else {
          console.log(res.json)
          return res.json()
        }
      })
      .then(() => {
        history.push('/')
      })
      .catch(err => console.log('error', err))
  }

  return (
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

      {/* <RecipeLabel>
        Image:
        <InputField
          type="text"
          onChange={(event) => setImage(event.target.value)}
          value={image}
          placeholder="Image" />
      </RecipeLabel> */}

      <RecipeLabel>
        Ingredients:
        <DynamicInput placeholderText="Add Ingredient" buttonText='+' fields={ingredients} setFields={setIngredients} />
      </RecipeLabel>

      <RecipeLabel>
        Directions:
        <InputField
          required
          type="text"
          onChange={(event) => setDirections(event.target.value)}
          value={directions}
          placeholder="How to prepare"
        />
      </RecipeLabel>

      <RecipeLabel>
        Tags:
        <DynamicInput placeholderText="Add Tag" buttonText="+" fields={tags} setFields={setTags} />
      </RecipeLabel>

      <ShareButton buttonName="Share recipe" />

    </RecipeForm>
  )
}

const RecipeForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #FFFBFA;
  border-radius: 20px;
  margin: 0px 10px;
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