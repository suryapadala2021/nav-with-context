// Write your code here
import './index.css'
import Navbar from '../Navbar/index'

const About = () => (
  <div className="about-container">
    <Navbar />
    <div className="about-content">
      <img
        className="about-img"
        src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
        alt="about"
      />
      <h1 className="about-heaading">About</h1>
    </div>
  </div>
)
export default About
