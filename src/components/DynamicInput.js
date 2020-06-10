import React from 'react'
import styled from 'styled-components/macro'

export const DynamicInput = ({ placeholderText, buttonText, fields, setFields }) => {

  const handleChange = (index, event) => {
    event.preventDefault()
    const values = [...fields]
    values[index].value = event.target.value
    // console.log('values:', values)
    setFields(values)
  }

  const handleAdd = () => {
    console.log('Fields:', fields)
    const values = [...fields]
    values.push({ value: null })

    console.log("Console log of values: ",values)
    setFields(values)
  }

  const handleRemove = (index) => {
    const values = [...fields]
    values.splice(index, 1)
    setFields(values)
  }

  return (
    <div>
      {fields.map((field, idx) => {
        return (
          <div key={`${field}-${idx}`}>
            <InputField
              required
              type='text'
              placeholder={placeholderText}
              value={field.value || ""}
              onChange={event => handleChange(idx, event)}
            />
            <button
              type='button'
              onClick={() => handleRemove(idx)}>X</button>
          </div>
        )
      })}
      <button
        type='button'
        onClick={() => handleAdd()}
      >{buttonText}</button>
    </div>
  )
}

const InputField = styled.input`
  width: 200px;
  padding: 10px;
  background: #F3DDD4;
  border-radius: 2px;
  border: none;
  margin: 5px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #F56C54;
  }
  :-ms-input-placeholder {
    color: #F56C54;
  } 
`