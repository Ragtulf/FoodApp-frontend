import React, { useState } from 'react'

export const DynamicInput = ({ placeholderText }) => {
  const [fields, setFields] = useState([{ value:null }])
  
  const handleChange = (index, event) => {

    const values = [...fields]
    values[index].value = event.target.value
    setFields(values)
  }

  const handleAdd = () => {
    const values = [...fields]
    values.push({ value:null })
    setFields(values)
  }

  const handleRemove = (index) => {
    const values = [...fields]
    values.splice(index,1)
    setFields(values)
  }

  return(
    <div>
      <button
      type='button'
      onClick={() => handleAdd()}
      >Add</button>
      
      {fields.map((field, idx) => {
        return(
          <div key={`${field}-${idx}`}>
            <input
            type='text'
            placeholder={placeholderText}
            onChange={event => handleChange(idx, event)}
            />
            <button
            type='button'
            onClick={() => handleRemove(idx)}>X</button>
          </div>
        )
      })}
    </div>

  )
}