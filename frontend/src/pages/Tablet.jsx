import '../css/category.css'

import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Tablet() {
  return (
    <div className="category-layout">

      <Header />

      <Navbar />

      <main className="category-page">

        <section className="category-header">
          <h1>Tablettes</h1>

          <p>
            Découvrez notre sélection de tablettes.
          </p>
        </section>

        <section className="category-list">

          <a
            href="/tablette/ipad"
            className="category-card"
          >
            <div className="category-image">
              Image
            </div>

            <h2>iPad</h2>
          </a>

          <a
            href="/tablette/samsung-galaxy-tab"
            className="category-card"
          >
            <div className="category-image">
              Image
            </div>

            <h2>Samsung Galaxy Tab</h2>
          </a>

          <a
            href="/tablette/android"
            className="category-card"
          >
            <div className="category-image">
              Image
            </div>

            <h2>Tablettes Android</h2>
          </a>

          <a
            href="/tablette/windows"
            className="category-card"
          >
            <div className="category-image">
              Image
            </div>

            <h2>Tablettes Windows</h2>
          </a>

          <a
            href="/tablette/accessoires"
            className="category-card"
          >
            <div className="category-image">
              Image
            </div>

            <h2>Accessoires tablette</h2>
          </a>

        </section>

      </main>

      <Footer />

    </div>
  )
}

export default Tablet
