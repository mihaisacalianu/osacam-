import NavBar from './components/navBar/NavBar';
import ShoppingCartPopUp from './components/shoppingCartPopUp/ShoppingCartPopUp';
import { useState } from 'react';


function App() {
const [render, setRender] = useState(true);

const display = (value) =>{
  setRender(value)
}
  return (
    < >
      <NavBar fromShopping={display} />
      {!render ? <ShoppingCartPopUp /> : null}
    </>
  )
}

export default App
