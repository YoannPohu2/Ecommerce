import '../css/category.css'

import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Smartphone() {
  return (
    <div className="smartphone">

      <Header />

      <Navbar />

      <main className="category-page">

        {/* =========================
            TITRE
        ========================= */}

        <section className="category-header">

          <h1>
            Smartphones
          </h1>

          <p>
            Découvrez notre sélection de smartphones.
          </p>

        </section>


        {/* =========================
            CATÉGORIES
        ========================= */}

        <section className="category-list">


          {/* =========================
              IPHONE
          ========================= */}

          <a
            href="/smartphone/iphone"
            className="category-card"
          >

            <div className="category-image">

              <img
                src="/images/smartphones/iphone.png"
                alt="iPhone"
              />

            </div>

            <h2>
              iPhone
            </h2>

          </a>


          {/* =========================
              SAMSUNG
          ========================= */}

          <a
            href="/smartphone/samsung"
            className="category-card"
          >

            <div className="category-image">

              <img
                src="/images/smartphones/samsung.jpg"
                alt="Samsung Galaxy"
              />

            </div>

            <h2>
              Samsung Galaxy
            </h2>

          </a>


          {/* =========================
              GOOGLE PIXEL
          ========================= */}

          <a
            href="/smartphone/google-pixel"
            className="category-card"
          >

            <div className="category-image">

              <img
                src="/images/smartphones/google_pixel.jpg"
                alt="Google Pixel"
              />

            </div>

            <h2>
              Google Pixel
            </h2>

          </a>


          {/* =========================
              ANDROID
          ========================= */}

          <a
            href="/smartphone/android"
            className="category-card"
          >

            <div className="category-image">

              <img
                src="/images/smartphones/android.jpg"
                alt="Smartphones Android"
              />

            </div>

            <h2>
              Smartphones Android
            </h2>

          </a>


          {/* =========================
              ACCESSOIRES
          ========================= */}

          <a
            href="/smartphone/accessoires"
            className="category-card"
          >

            <div className="category-image">

              <img
                src="/images/smartphones/accessoires.jpg"
                alt="Accessoires smartphone"
              />

            </div>

            <h2>
              Accessoires smartphone
            </h2>

          </a>


        </section>

      </main>

      <Footer />

    </div>
  )
}

export default Smartphone