import '../css/category.css'

import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Watch() {
  return (
    <div className="category-layout">

      <Header />

      <Navbar />

      <main className="category-page">

        <section className="category-header">
          <h1>Montres connectées</h1>

          <p>
            Découvrez notre sélection de montres connectées.
          </p>
        </section>

        <section className="category-list">

          <a
            href="/watch/apple-watch"
            className="category-card"
          >
            <div className="category-image">
              Image
            </div>

            <h2>Apple Watch</h2>
          </a>

          <a
            href="/watch/samsung-galaxy-watch"
            className="category-card"
          >
            <div className="category-image">
              Image
            </div>

            <h2>Samsung Galaxy Watch</h2>
          </a>

          <a
            href="/watch/garmin"
            className="category-card"
          >
            <div className="category-image">
              Image
            </div>

            <h2>Montres connectées Garmin</h2>
          </a>

          <a
            href="/watch/autres"
            className="category-card"
          >
            <div className="category-image">
              Image
            </div>

            <h2>Autres montres connectées</h2>
          </a>

          <a
            href="/watch/accessoires-apple-watch"
            className="category-card"
          >
            <div className="category-image">
              Image
            </div>

            <h2>Accessoires Apple Watch</h2>
          </a>

        </section>

      </main>

      <Footer />

    </div>
  )
}

export default Watch


