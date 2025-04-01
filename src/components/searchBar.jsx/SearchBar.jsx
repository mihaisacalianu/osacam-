// import { FaSearch } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";


export default function SearchBar() {
  return (
    <div className="w-[60%] flex">
      <form action="get" className="relative w-full max-w-md">
        <IoIosSearch  className="bg-[#F5F5F5] hover:bg-[#E5E5E5] absolute left-0 top-0 rounded-l-md h-9 w-[2.5rem]"/>
        <input type="text" className=" bg-[#F5F5F5] pl-12 p-1.5 w-full rounded-md hover:bg-[#E5E5E5]" placeholder="Search your product..." />
      </form>
    </div>
  )
}
// shortcut for component function  rfc
