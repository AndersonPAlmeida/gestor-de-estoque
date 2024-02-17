import { createContext, useState } from "react";
import PropTypes from "prop-types"

export const StockContext = createContext({})

StockContextProvider.propTypes = {
  children: PropTypes.node
}

export function StockContextProvider({ children }) {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem('obv-react-stock');

    if(!storedItems) return []

    const items = JSON.parse(storedItems)
    items.forEach(item => {
      item.createdAt = new Date(item.createdAt)
      item.updateAt = new Date(item.updateAt)
    })

    return items
  })

  function addItem(item) {
    setItems(currentState => {
      const updateItems = [item, ...currentState]
      localStorage.setItem('obv-react-stock', JSON.stringify(updateItems))

      return updateItems
    })
  }

  function deleteItem(itemId) {
    setItems(currentState => {
      const updateItems = currentState.filter(item => item.id !== +itemId)
      localStorage.setItem('obv-react-stock', JSON.stringify(updateItems))

      return updateItems
    })
  }

  function updateItems(itemId, newAtrributes) {
    setItems(currentState => {
      const itemIndex = currentState.findIndex(item => item.id === +itemId)
      const updateItems = [...currentState]

      Object.assign(updateItems[itemIndex], newAtrributes, { updateAt: new Date() }),
      localStorage.setItem('obv-react-stock', JSON.stringify(updateItems))

      return updateItems
    })  
  }

  function getItem(itemId) {
    return items.find(item => item.id === +itemId)
  }

  const stock = {
    items,
    addItem,
    getItem,
    updateItems,
    deleteItem
  }

  return (
    <StockContext.Provider value = {stock}>
      {children}
    </StockContext.Provider>
  )
}