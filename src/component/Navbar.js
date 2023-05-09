import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import Sidebar from './Sidebars'
import { faHome, faList, faCog , faCookieBite} from "@fortawesome/free-solid-svg-icons"
import { faSquareGooglePlus } from "@fortawesome/free-brands-svg-icons"


export default function Navbar() {

  const [sidebar, setSidebar] = useState(false)
  const location = useLocation()
  const links = [
  {
    name: 'Home',
    path: '/',
    icon: faHome
  },
  {
    name: "Recipes",
    path: "/recipes",
    icon: faList
  },
  {
    name: "FoodRecipe",
    path: "/recipes1",
    icon: faCookieBite
  },
  {
    name: "Settings",
    path: "/settings",
    icon: faCog
  },
  {
    name: "Recommend",
    path: "/recommend",
    icon: faSquareGooglePlus
  }
  
]
function closeSidebar(){
  setSidebar(false)
}
  return (
    <>
      <div className='navbar container'>
        <Link to='/' className='logo'>Left<span>O</span>ver</Link>
        <div className='nav-links'>
          {links.map((link, index) => (
            <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.name}>{link.name}</Link>
          ))}
          {/* <a href='#!'>Home</a>
          <a href='#!'>Recipes</a>
          <a href='#!'>Setting</a> */}
        </div>
        <div onClick={() => setSidebar(!sidebar)} className={sidebar ? "sidebar-btn active" : "sidebar-btn"}>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>
      </div>
      { sidebar && <Sidebar close = {closeSidebar} links={links} />}
    </>
  )
}
