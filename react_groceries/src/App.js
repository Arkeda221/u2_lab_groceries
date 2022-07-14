import './App.css'
import { useState } from 'react'
import groceryArray from './data/Groceries.json'
import Grocery from './components/Grocery'

const App = () => {
  const [list, setList] = useState(groceryArray)

  function compare(a, b) {
    if (a.item < b.item) {
      return -1
    }
    if (a.item > b.item) {
      return 1
    }
    return 0
  }

  list.sort(compare)

  const handleClick = (index) => {
    if (groceryArray.isPurchased === true) {
      let newList = [...list]
      newList.splice(index, 1)
      setList(newList)
    }
  }
  const handleClick2 = () => {
    return (groceryArray.isPurchased = true)
  }

  return (
    <div className="App">
      <h1>Alex's Grocery List</h1>
      <Grocery
        handleClick={handleClick}
        list={list}
        handleClick2={handleClick2}
      />
    </div>
  )
}

export default App
