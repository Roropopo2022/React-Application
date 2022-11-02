import React from 'react'
import { useState } from 'react'
import uuid from 'react-uuid'
import AddItem from './AddItem'
import ItemsList from './ItemsList'

export default function Shop() {
  const [items, setItems] = useState([])
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')

  function handleFormSubmit(e) {
    e.preventDefault()
    const item = { id: uuid(), name, desc }
    setItems([...items, item])
    setName('')
    setDesc('')
  }

  function handleRemoveClick(id) {
    const rest = items.filter((item) => item.id !== id)
    setItems(rest)
  }
  return (
    <>
      <AddItem
        name={name}
        desc={desc}
        items={items}
        handleFormSubmit={handleFormSubmit}
        setName={setName}
        setDesc={setDesc}
      />

      <div>
        <p className="ui-title" hidden={items.length !== 0}>
          Добавьте первый товар
        </p>
      </div>

      <ItemsList items={items} handleRemoveClick={handleRemoveClick} />
    </>
  )
}
