const products = [
  {name: 'product1', price: 100.00},
  {name: 'product2', price: 200.00},
  {name: 'product2', price: 200.00},
]

function App() {
  return (
    <div>
      <h1 style={{color: 'red'}}>Re-Store</h1>
      <ul>
        {/* This is a piece of js code inside the tsx/pseudo html return  */}
        {products.map((item, index) => (
          <li key={index}>{item.name} - {item.price}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
