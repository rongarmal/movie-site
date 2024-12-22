import { NavLink } from "react-router"

function Head() {
  return (
    <div className="flex item-center justify-between bg-slate-300">
      <img src="/images/movie.png"class="h-11 w-auto"></img>
    <ul className="flex gap-5 font-bold text-black text-sm pt-3">
    <NavLink to="/" className="hover:text-red-600">Main page</NavLink>
    <NavLink to="/about" className="hover:text-stone-600">contacts</NavLink>
    <br></br>
    </ul>
    </div>
  )
}

export default Head