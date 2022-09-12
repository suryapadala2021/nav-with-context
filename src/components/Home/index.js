// Write your code here
import './index.css'
import Navbar from '../Navbar/index'

const Home = () => (
  <div className="home-container">
    <Navbar />
    <div className="home-content">
      <img
        className="home-img"
        src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
        alt="home"
      />
      <h1 className="home-heading">Home</h1>
    </div>
  </div>
)
export default Home
