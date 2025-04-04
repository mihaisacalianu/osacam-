import SearchBar from "../searchBar.jsx/SearchBar";
import ShoppingCart from "../shoppingCart/ShoppingCart";
import "./NavBar.css"

export default function NavBar({fromShopping}){
  const callFromShoppincart = (value) =>{
    fromShopping(value);
  }
  return(
    <>
      <div className="nav-bar items-center" >
        <h2 className="nav-bar-title font-[900] text-red-900">OSACAM</h2>
        <div className="flex w-[40%] items-center gap-4 justify-end">
          <SearchBar />
          <ShoppingCart btnPressed={callFromShoppincart}/>
        </div>
      </div>
    </>
  );
}
