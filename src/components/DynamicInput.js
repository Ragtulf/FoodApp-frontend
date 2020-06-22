import React from 'react'
import styled from 'styled-components/macro'

export const DynamicInput = ({ placeholderText, fields, setFields }) => {

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

    console.log("Console log of values: ", values)
    setFields(values)
  }

  const handleRemove = (index) => {
    const values = [...fields]
    values.splice(index, 1)
    setFields(values)
  }

  return (
    <DynamicInputField>
      <DynamicButtons
        type='button'
        onClick={() => handleAdd()}>
        <Add src='/assets/plus.svg' alt="add item" />
      </DynamicButtons>
      {fields.map((field, idx) => {
        return (
          <DynamicInputField key={`${field}-${idx}`}>
            <InputField
              required
              type='text'
              placeholder={placeholderText}
              value={field.value || ""}
              onChange={event => handleChange(idx, event)}
            />
            <DynamicButtons
              type='button'
              onClick={() => handleRemove(idx)}>
              <Remove src='/assets/x.svg' alt="remove item" />
            </DynamicButtons>
          </DynamicInputField>
        )
      })}
    </DynamicInputField>
  )
}

const DynamicInputField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const DynamicButtons = styled.button`
  background: #F56C54;
  border: none;
  width: 33px;
  height: 33px;
  border-radius: 2px;
  font-family:'Circular', sans-serif;
  font-size: 21px;
  color: #FFFBFA;
  display: flex;
  align-items: center;
  justify-content: center;
`

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
    font-family: 'Circular', sans-serif;
  }
  :-ms-input-placeholder {
    color: #F56C54;
    font-family: 'Circular', sans-serif;
  } 
`

const Remove = styled.img`
  width: 20px;
`
const Add = styled.img`
  width: 13px;
`