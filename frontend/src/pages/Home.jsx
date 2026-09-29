import '../css/home.css'

function Home() {
  return (
    <div className="home">

      {/* HEADER */}
      <header className="header">

        {/* Logo */}
        <div className="logo">
          Reboot
        </div>

        {/* Barre de recherche */}
        <div className="search-bar">
          <span className="search-icon">⌕</span>

          <input
            type="text"
            placeholder="Rechercher un produit"
          />
        </div>

        {/* Actions */}
        <div className="header-actions">
          <button>Compte</button>
          <button>Panier</button>
        </div>

      </header>

      {/* NAVIGATION */}
     <nav className="navbar">

  <div className="nav-dropdown">
    <a href="#" className="nav-link">
      Smartphone
    </a>

    <div className="dropdown-menu">
      <a href="#">iPhone</a>
      <a href="#">Samsung Galaxy</a>
      <a href="#">Google Pixel</a>
      <a href="#">Smartphones Android</a>
      <a href="#">Accessoires smartphone</a>
    </div>
  </div>

  <div className="nav-dropdown">
    <a href="#" className="nav-link">
      Ordinateur portable
    </a>

    <div className="dropdown-menu">
      <a href="#">MacBook</a>
      <a href="#">Ordinateurs portables Windows</a>
      <a href="#">Périphériques & Accessoires</a>
      <a href="">Ordinateurs portables gaming</a>

    </div>
  </div>

   <div className="nav-dropdown">
    <a href="#" className="nav-link">
      Tablette
    </a>

    <div className="dropdown-menu">
      <a href="#">Ipad</a>
      <a href="">Samsung Galaxy Tab</a>
      <a href="">Tablettes Android</a>
      <a href="">Accessoires tablette</a>
    </div>
  </div>

  <a href="#">Console</a>
  <a href="#">Montre connectée</a>
</nav>


      {/* CONTENU DE LA HOMEPAGE */}
      <main>

        {/* HERO */}
        <section className="hero">
          <div className="hero-content">
            <h1>
              La technologie mérite
              <br />
              une seconde vie.
            </h1>

            <p>
              Découvrez nos appareils reconditionnés
              au meilleur prix.
            </p>

            <button className="hero-button">
              Découvrir nos produits
            </button>
          </div>
        </section>


        {/* CATÉGORIES */}
        <section className="categories">

          <h2>Nos catégories</h2>

          <div className="category-list">

            <div className="category-card">
              <span>📱</span>
              <h3>Smartphones</h3>
            </div>

            <div className="category-card">
              <span>💻</span>
              <h3>Ordinateurs portables</h3>
            </div>

            <div className="category-card">
              <span>📱</span>
              <h3>Tablettes</h3>
            </div>

            <div className="category-card">
              <span>🎮</span>
              <h3>Consoles</h3>
            </div>

            <div className="category-card">
              <span>⌚</span>
              <h3>Montres connectées</h3>
            </div>

          </div>

        </section>


        {/* PRODUITS MIS EN AVANT */}
        <section className="products">

          <h2>Nos produits mis en avant</h2>

          <div className="product-list">

            <article className="product-card">
              <div className="product-image">
                Image produit
              </div>

              <h3>Smartphone reconditionné</h3>

              <p>À partir de 299 €</p>

              <button>Voir le produit</button>
            </article>


            <article className="product-card">
              <div className="product-image">
                Image produit
              </div>

              <h3>Ordinateur portable</h3>

              <p>À partir de 449 €</p>

              <button>Voir le produit</button>
            </article>


            <article className="product-card">
              <div className="product-image">
                Image produit
              </div>

              <h3>Console reconditionnée</h3>

              <p>À partir de 299 €</p>

              <button>Voir le produit</button>
            </article>

          </div>

        </section>


        {/* PROMOTIONS */}
        <section className="promotions">

          <h2>Les bonnes affaires</h2>

          <p>
            Profitez de nos promotions sur une sélection
            de produits reconditionnés.
          </p>

          <button>
            Voir les promotions
          </button>

        </section>


        {/* NOUVEAUTÉS */}
        <section className="new-products">

          <h2>Nouveautés</h2>

          <p>
            Découvrez les derniers produits ajoutés sur Reboot.
          </p>

        </section>

      </main>


      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-logo">
          Reboot
        </div>

        <div className="footer-column">
          <h3>Reboot</h3>
          <a href="#">À propos</a>
          <a href="#">Contact</a>
          <a href="#">FAQ</a>
        </div>

        <div className="footer-column">
          <h3>Nos produits</h3>
          <a href="#">Smartphones</a>
          <a href="#">Ordinateurs</a>
          <a href="#">Tablettes</a>
          <a href="#">Consoles</a>
        </div>

        <div className="footer-column">
          <h3>Aide</h3>
          <a href="#">Livraison</a>
          <a href="#">Retours</a>
          <a href="#">Garantie</a>
        </div>

      </footer>

    </div>
  )
}

export default Home