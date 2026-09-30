import '../css/category.css'

import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Console() {
  return (
    <div className="category-layout">

      <Header />

      <Navbar />

      <main className="category-page">

        <section className="category-header">
          <h1>Consoles</h1>

          <p>
            Découvrez notre sélection de consoles de jeux vidéo.
          </p>
        </section>

        <section className="category-list">

          <a
            href="/console/playstation"
            className="category-card"
          >
            <div className="category-image">
              Image
            </div>

            <h2>PlayStation</h2>
          </a>

          <a
            href="/console/nintendo"
            className="category-card"
          >
            <div className="category-image">
              Image
            </div>

            <h2>Nintendo</h2>
          </a>

          <a
            href="/console/xbox"
            className="category-card"
          >
            <div className="category-image">
              Image
            </div>

            <h2>Xbox</h2>
          </a>

          <a
            href="/console/retro-gaming"
            className="category-card"
          >
            <div className="category-image">
              Image
            </div>

            <h2>Retro gaming</h2>
          </a>

          <a
            href="/console/accessoires"
            className="category-card"
          >
            <div className="category-image">
              Image
            </div>

            <h2>Accessoires jeux vidéo</h2>
          </a>

        </section>

      </main>

      <Footer />

    </div>
  )
}

export default Console
