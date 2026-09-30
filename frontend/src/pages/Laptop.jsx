import '../css/category.css'

import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Laptop() {
  return (
    <div className="laptop">

      <Header />

      <Navbar />

      <main className="category-page">

        <section className="category-header">
          <h1>Ordinateurs portables</h1>

          <p>
            Découvrez notre sélection d'ordinateurs portables.
          </p>
        </section>

        <section className="category-list">

          <a
            href="/laptop/macbook"
            className="category-card"
          >
            <div className="category-image">
              Image
            </div>

            <h2>MacBook</h2>
          </a>

          <a
            href="/laptop/windows"
            className="category-card"
          >
            <div className="category-image">
              Image
            </div>

            <h2>Ordinateurs portables Windows</h2>
          </a>

          <a
            href="/laptop/accessoires"
            className="category-card"
          >
            <div className="category-image">
              Image
            </div>

            <h2>Périphériques & Accessoires</h2>
          </a>

          <a
            href="/laptop/gaming"
            className="category-card"
          >
            <div className="category-image">
              Image
            </div>

            <h2>Ordinateurs portables gaming</h2>
          </a>

        </section>

      </main>

      <Footer />

    </div>
  )
}

export default Laptop
