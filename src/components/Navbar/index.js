// Write your code here
import './index.css'

const Navbar = () => (
  <div className="nav-container">
    <img
      className="website-logo"
      src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
      alt="website logo"
    />
    <ul className="nav-items-list">
      <li className="nav-item">
        <p>Home</p>
      </li>
      <li>
        <p>About</p>
      </li>
    </ul>
    <img
      src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
      alt="theme"
      className="dark-theme-img"
    />
  </div>
)
export default Navbar
