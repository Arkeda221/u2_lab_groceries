import './App.css'
import { useState } from 'react'
import groceryArray from './data/Groceries.json'
import Grocery from './components/Grocery'

const App = () => {
  const [list, setList] = useState(groceryArray)

  const handleClick = (index) => {
    if (groceryArray.isPurchased === true) {
      let newList = [...list]
      newList.sort()
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
