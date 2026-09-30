import '../css/navbar.css'


function Navbar() {
  return (
    <nav className="navbar">

      {/* SMARTPHONE */}
      <div className="nav-dropdown">
        <a href="/smartphone" className="nav-link">
          Smartphone
        </a>

        <div className="dropdown-menu">
          <a href="/smartphone/iphone">iPhone</a>
          <a href="/smartphone/samsung">Samsung Galaxy</a>
          <a href="/smartphone/google-pixel">Google Pixel</a>
          <a href="/smartphone/android">Smartphones Android</a>
          <a href="/smartphone/accessoires">Accessoires smartphone</a>
        </div>
      </div>


      {/* ORDINATEUR PORTABLE */}
      <div className="nav-dropdown">
        <a href="/laptop" className="nav-link">
          Ordinateur portable
        </a>

        <div className="dropdown-menu">
          <a href="#">MacBook</a>
          <a href="#">Ordinateurs portables Windows</a>
          <a href="#">Périphériques & Accessoires</a>
          <a href="#">Ordinateurs portables gaming</a>
        </div>
      </div>


      {/* TABLETTE */}
      <div className="nav-dropdown">
        <a href="tablet" className="nav-link">
          Tablette
        </a>

        <div className="dropdown-menu">
          <a href="#">iPad</a>
          <a href="#">Samsung Galaxy Tab</a>
          <a href="#">Tablettes Android</a>
          <a href="#">Accessoires tablette</a>
        </div>
      </div>


      {/* CONSOLE */}
      <div className="nav-dropdown">
        <a href="console" className="nav-link">
          Console
        </a>

        <div className="dropdown-menu">
          <a href="#">PlayStation</a>
          <a href="#">Nintendo</a>
          <a href="#">Xbox</a>
          <a href="#">Retro gaming</a>
          <a href="#">Accessoires jeux vidéo</a>
        </div>
      </div>


      {/* MONTRE CONNECTÉE */}
      <div className="nav-dropdown">
        <a href="#" className="nav-link">
          Montre connectée
        </a>

        <div className="dropdown-menu">
          <a href="#">Apple Watch</a>
          <a href="#">Samsung Galaxy Watch</a>
          <a href="#">Montres connectées Garmin</a>
          <a href="#">Autres montres connectées</a>
          <a href="#">Accessoires Apple Watch</a>
        </div>
      </div>

    </nav>
  )
}

export default Navbar