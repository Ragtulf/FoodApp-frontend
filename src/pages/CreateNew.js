import React, { useState } from 'react'
import { DynamicInput } from '../components/DynamicInput'

export const CreateNew = () => {
  const [title, setTitle] = useState("")
  const [shortD, setShortD] = useState("")
  const [ingredients, setIngredients] = useState([])
  const [directions, setDirections] = useState("")
  const [tags, setTags] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event)
  }
  
  return (
    <form>
      <label>
      Title:
        <input required
        type='text'
        onChange={(event) => setTitle(event.target.value)}
        value={title}
        placeholder='Name of your recipe'/>
      </label>

      <label>
      Short Description:
        <input required
        type='text'
        onChange={(event) => setShortD(event.target.value)}
        value={shortD}
        placeholder='Describe your recipe'/>
      </label>
        
        <DynamicInput placeholderText='Add Ingredient' />
      
      <label>  
      Directions:
        <input required
        type='text'
        onChange={(event) => setDirections(event.target.value)}
        value={directions}
        placeholder='How to prepare'/>
      </label>

      <DynamicInput placeholderText='Add Tag' />

      <button
      onSubmit={handleSubmit} 
      type="submit">
        Share Recipe
        </button>
    </form>
    )
  }