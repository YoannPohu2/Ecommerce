import '../css/home.css'

import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="home">

      <Header />

      <Navbar />


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

            <a href="/smartphone" className="category-card">
              <span>📱</span>
              <h3>Smartphones</h3>
            </a>

            <a href="/laptop" className="category-card">
              <span>💻</span>
              <h3>Ordinateurs portables</h3>
            </a>

            <a href="/tablet"  className="category-card">
              <span>📱</span>
              <h3>Tablettes</h3>
            </a>

            <a href="/console"  className="category-card">
              <span>🎮</span>
              <h3>Consoles</h3>
            </a>

            <a href="/watch"  className="category-card">
              <span>⌚</span>
              <h3>Montres connectées</h3>
            </a>

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

              <button>
                Voir le produit
              </button>

            </article>


            <article className="product-card">

              <div className="product-image">
                Image produit
              </div>

              <h3>Ordinateur portable</h3>

              <p>À partir de 449 €</p>

              <button>
                Voir le produit
              </button>

            </article>


            <article className="product-card">

              <div className="product-image">
                Image produit
              </div>

              <h3>Console reconditionnée</h3>

              <p>À partir de 299 €</p>

              <button>
                Voir le produit
              </button>

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


      <Footer />

    </div>
  )
}

export default Home