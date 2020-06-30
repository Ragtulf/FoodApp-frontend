import React from 'react'
import styled from 'styled-components/macro'

// We use props to set the state of the inputs in the parent component
export const DynamicInput = ({ placeholderText, fields, setFields }) => {

  // Puts a value to each input field
  const handleChange = (index, event) => {
    event.preventDefault()
    const values = [...fields]
    values[index].value = event.target.value

    setFields(values)
  }

  // Adds new input field
  const handleAdd = () => {
    console.log('Fields:', fields)
    const values = [...fields]
    values.push({ value: null })

    setFields(values)
  }

  // Removes input field
  const handleRemove = (index) => {
    const values = [...fields]
    values.splice(index, 1)
    setFields(values)
  }

  return (
    <InputContainer>

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
      <DynamicButtons
        type='button'
        onClick={() => handleAdd()}>
        <Add src='/assets/plus.svg' alt="add item" />
      </DynamicButtons>

    </InputContainer>
  )
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

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

  &:focus {
    outline: 2px solid #F3DDD4;
  }
`

const InputField = styled.input`
  width: 163px;
  padding: 10px;
  background: #F3DDD4;
  color: #F56C54;
  border-radius: 2px;
  border: none;
  margin: 5px;
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
    width: 213px;
  }
`

const Remove = styled.img`
  width: 20px;
`
const Add = styled.img`
  width: 13px;
`