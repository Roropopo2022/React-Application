import React from 'react'

export default function AddItem({
  handleFormSubmit,
  name,
  desc,
  items,
  setName,
  setDesc,
}) {
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="name">
        <label htmlFor="item-name" className="label">
          Название Товара:{' '}
        </label>
        <input
          type="text"
          placeholder="Название товара"
          className="ui-textfield"
          onChange={(e) => setName(e.target.value)}
          id="item-name"
          value={name}
        />
      </div>
      <div className="name">
        <label htmlFor="item-desc" className="label">
          Описание товара:{' '}
        </label>
        <input
          type="text"
          placeholder="Описание товара"
          className="ui-textfield"
          onChange={(e) => setDesc(e.target.value)}
          id="item-desc"
          value={desc}
        />
      </div>
      <div className="form-footer">
        <div className="validation" hidden={desc !== '' && name !== ''}>
          Пожалуйста, заполните все поля
        </div>
        <input
          type="submit"
          className="ui-button"
          value="Добавить"
          disabled={desc === '' || name === ''}
        />
      </div>
    </form>
  )
}
