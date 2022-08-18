import logo from '../../images/logo-white.png';

function Navigation() {
  return (
    <header>
      <nav className="nav">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Features</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Experience</a></li>
          <li className="logo">
            <a href="">
              <img src={logo} alt="logo" className="white"/>
              <img src={logo} alt="logo" className="black"/>
            </a>
          </li>
          <li><a href="">Pricing</a></li>
          <li><a href="">Our client</a></li>
          <li><a href="">Blog</a></li>
          <li><a href="">Contact</a></li>
        </ul>
        <a href="javascript:void(0);" className='nav-icon'>
          <span></span>
          <span></span>
          <span></span>
        </a>
      </nav>
    </header>
  )
}

export default Navigation;