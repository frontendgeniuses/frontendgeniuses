
import logo from ".././assets/clarusway-logo.png"
import "../header/Header.css"

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt='logo' className='logo' />
    </div>
  )
}

export default Header
