import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import '../css/product.css'

function Product() {
  const { id } = useParams()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  /*
   * =========================
   * RÉCUPÉRATION DU PRODUIT
   * =========================
   */

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)
        setError('')

        const response = await fetch(`/api/products/${id}`, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        })

        if (!response.ok) {
          throw new Error('Produit introuvable.')
        }

        const data = await response.json()

        setProduct(data.product)
      } catch (error) {
        console.error(error)

        setError(
          error.message ||
            'Une erreur est survenue lors du chargement du produit.'
        )
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])


  /*
   * =========================
   * FORMAT PRIX
   * =========================
   */

  const formatPrice = (price) => {
    return (price / 100).toFixed(2)
  }


  /*
   * =========================
   * CHARGEMENT
   * =========================
   */

  if (loading) {
    return (
      <div className="product-layout">

        <Header />

        <Navbar />

        <main className="product-page">

          <div className="product-message">
            Chargement du produit...
          </div>

        </main>

        <Footer />

      </div>
    )
  }


  /*
   * =========================
   * ERREUR
   * =========================
   */

  if (error || !product) {
    return (
      <div className="product-layout">

        <Header />

        <Navbar />

        <main className="product-page">

          <div className="product-message">
            {error || 'Produit introuvable.'}
          </div>

        </main>

        <Footer />

      </div>
    )
  }


  /*
   * =========================
   * PAGE PRODUIT
   * =========================
   */

  return (
    <div className="product-layout">

      <Header />

      <Navbar />

      <main className="product-page">

        {/* =========================
            PRODUIT
        ========================= */}

        <div className="product-detail">

          {/* =========================
              GALERIE
          ========================= */}

          <section className="product-gallery">

            <div className="product-main-image">
              Image produit
            </div>

            <div className="product-thumbnails">

              <div>
                Image 1
              </div>

              <div>
                Image 2
              </div>

              <div>
                Image 3
              </div>

            </div>

          </section>


          {/* =========================
              INFORMATIONS
          ========================= */}

          <section className="product-info">

            <h1>
              {product.name}
            </h1>


            {/* DESCRIPTION */}

            {product.description && (
              <p className="product-description">
                {product.description}
              </p>
            )}


            {/* PRIX */}

            <div className="product-price">
              {formatPrice(product.price)} €
            </div>


            {/* STOCK */}

            <div className="product-stock">

              {product.stock > 0
                ? `${product.stock} produit(s) en stock`
                : 'Rupture de stock'}

            </div>


            {/* =========================
                VARIANTES
            ========================= */}

            <div className="product-variants">

              <h2>
                Variantes
              </h2>

              <div className="variant-group">

                {product.color && (
                  <div>
                    <strong>
                      Couleur :
                    </strong>{' '}
                    {product.color}
                  </div>
                )}

                {product.storage && (
                  <div>
                    <strong>
                      Stockage :
                    </strong>{' '}
                    {product.storage}
                  </div>
                )}

                {product.connector && (
                  <div>
                    <strong>
                      Connecteur :
                    </strong>{' '}
                    {product.connector}
                  </div>
                )}

                {product.sim && (
                  <div>
                    <strong>
                      SIM :
                    </strong>{' '}
                    {product.sim}
                  </div>
                )}

              </div>

            </div>


            {/* =========================
                PANIER
            ========================= */}

            <button
              className="add-to-cart-button"
              disabled={product.stock <= 0}
            >

              {product.stock > 0
                ? 'Ajouter au panier'
                : 'Rupture de stock'}

            </button>

          </section>

        </div>


        {/* =========================
            CARACTÉRISTIQUES
        ========================= */}

        <section className="product-specifications">

          <h2>
            Caractéristiques
          </h2>


          <div className="specifications-list">

            {/* =========================
                MARQUE / MODÈLE
            ========================= */}

            <div className="specification-row">

              <span className="specification-label">
                Marque
              </span>

              <span className="specification-value">
                {product.brand || '-'}
              </span>


              <span className="specification-label">
                Modèle
              </span>

              <span className="specification-value">
                {product.model || '-'}
              </span>

            </div>


            {/* =========================
                ANNÉE / ÉCRAN
            ========================= */}

            <div className="specification-row">

              <span className="specification-label">
                Année
              </span>

              <span className="specification-value">
                {product.year || '-'}
              </span>


              <span className="specification-label">
                Écran
              </span>

              <span className="specification-value">
                {product.screen || '-'}
              </span>

            </div>


            {/* =========================
                STOCKAGE / COULEUR
            ========================= */}

            <div className="specification-row">

              <span className="specification-label">
                Stockage
              </span>

              <span className="specification-value">
                {product.storage || '-'}
              </span>


              <span className="specification-label">
                Couleur
              </span>

              <span className="specification-value">
                {product.color || '-'}
              </span>

            </div>


            {/* =========================
                CONNECTEUR / SIM
            ========================= */}

            <div className="specification-row">

              <span className="specification-label">
                Connecteur
              </span>

              <span className="specification-value">
                {product.connector || '-'}
              </span>


              <span className="specification-label">
                Carte SIM
              </span>

              <span className="specification-value">
                {product.sim || '-'}
              </span>

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  )
}

export default Product