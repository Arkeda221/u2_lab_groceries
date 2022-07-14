const Grocery = (props) => {
  return (
    <div className="main">
    {props.list.map((list, index) => (
      <div className="groceryList">

      <h2>Item: {list.item}</h2>
      <h2>Brand: {list.brand}</h2>
      <h2>Units: {list.units}</h2>
      <h2>Quantity: {list.quantity}</h2>

      <button className="remove" onClick = {() => props.handleClick(index) }>Remove</button>

      <button className="purchased" onClick = {() =>props.handleClick2()}>Purchased</button>

 
    </div>
      
  ))}
   </div>
  )
}

export default Grocery;


