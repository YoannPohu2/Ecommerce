import '../css/smartphone.css'

import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Smartphone() {
  return (
    <div className="smartphone">

      <Header />

      <Navbar />

      <main className="smartphone-page">

        <section className="smartphone-header">
          <h1>Smartphones</h1>

          <p>
            Découvrez notre sélection de smartphones.
          </p>
        </section>

        <section className="smartphone-categories">

          <a
            href="/smartphone/iphone"
            className="smartphone-category"
          >
            <div className="smartphone-category-image">
              Image
            </div>

            <h2>iPhone</h2>
          </a>

          <a
            href="/smartphone/samsung"
            className="smartphone-category"
          >
            <div className="smartphone-category-image">
              Image
            </div>

            <h2>Samsung Galaxy</h2>
          </a>

          <a
            href="/smartphone/google-pixel"
            className="smartphone-category"
          >
            <div className="smartphone-category-image">
              Image
            </div>

            <h2>Google Pixel</h2>
          </a>

          <a
            href="/smartphone/android"
            className="smartphone-category"
          >
            <div className="smartphone-category-image">
              Image
            </div>

            <h2>Smartphones Android</h2>
          </a>

          <a
            href="/smartphone/accessoires"
            className="smartphone-category"
          >
            <div className="smartphone-category-image">
              Image
            </div>

            <h2>Accessoires smartphone</h2>
          </a>

        </section>

      </main>

      <Footer />

    </div>
  )
}

export default Smartphone