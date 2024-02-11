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

  const stock = {
    items,
    addItem
  }

  return (
    <StockContext.Provider value = {stock}>
      {children}
    </StockContext.Provider>
  )
}