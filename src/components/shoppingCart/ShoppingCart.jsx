import { RiShoppingBasket2Line } from "react-icons/ri";
import Button from "../button/Button";
import { useState } from "react";

export default function ShoppingCart({btnPressed}) {

  const [pressed, setPressed] = useState(false);

  const onClick = ()=>{
    setPressed(!pressed)
    btnPressed(pressed)
  }

  return (
    <>
      <Button handleClick={()=>onClick()} >
        {<RiShoppingBasket2Line  className="text-3xl hover:text-red-700"/>}
        </Button>
    </>
  )
}
