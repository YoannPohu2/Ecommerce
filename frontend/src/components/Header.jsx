import '../css/header.css'

function Header() {
  return (
    <header className="header">

      <div className="logo">
        Reboot
      </div>

      <div className="search-bar">
        <span className="search-icon">⌕</span>

        <input
          type="text"
          placeholder="Rechercher un produit"
        />
      </div>

      <div className="header-actions">
        <button>Compte</button>
        <button>Panier</button>
      </div>

    </header>
  )
}

export default Header