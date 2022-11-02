import React from 'react'
import Item from './Item'

export default function ItemsList({ items, handleRemoveClick }) {
  return (
    <ul className="ui-list">
      {items.map((item) => {
        return (
          <li className="ui-item-list" key={item.id}>
            <Item info={item} />
            <button
              className="item-button"
              onClick={() => handleRemoveClick(item.id)}
            >
              Удалить
            </button>
          </li>
        )
      })}
    </ul>
  )
}
