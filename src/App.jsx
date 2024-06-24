import './App.css';
import { useState, useEffect } from 'react';
import Content from './componentes/content';


function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(json => setProducts(json))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="App">
    <Content products={products} />
  


    </div>
  );
}

export default App;
