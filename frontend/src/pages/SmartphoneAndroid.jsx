import { useEffect, useState } from 'react'

import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import '../css/subcategory.css'

function SmartphoneAndroid() {
  const [products, setProducts] = useState([])

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const [priceMin, setPriceMin] = useState('')
  const [priceMax, setPriceMax] = useState('')

  const [model, setModel] = useState('')
  const [year, setYear] = useState('')
  const [screen, setScreen] = useState('')
  const [storage, setStorage] = useState('')
  const [color, setColor] = useState('')
  const [connector, setConnector] = useState('')
  const [sim, setSim] = useState('')

  const [sort, setSort] = useState('price-asc')

  const [filters, setFilters] = useState({})

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        setError('')

        const response = await fetch('/api/products', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        })

        if (!response.ok) {
          throw new Error('Impossible de récupérer les produits.')
        }

        const data = await response.json()

        setProducts(data.products || [])
      } catch (error) {
        console.error(error)

        setError(
          error.message ||
            'Une erreur est survenue lors du chargement des produits.'
        )
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const handleFilter = () => {
    setFilters({
      priceMin,
      priceMax,
      model,
      year,
      screen,
      storage,
      color,
      connector,
      sim,
    })
  }

  const resetFilters = () => {
    setPriceMin('')
    setPriceMax('')
    setModel('')
    setYear('')
    setScreen('')
    setStorage('')
    setColor('')
    setConnector('')
    setSim('')

    setFilters({})
  }

  let filteredProducts = products.filter((product) => {

    if (product.category !== 'Smartphone') {
      return false
    }

    if (product.subcategory !== 'Smartphones Android') {
      return false
    }

    if (
      filters.priceMin &&
      product.price / 100 < Number(filters.priceMin)
    ) {
      return false
    }

    if (
      filters.priceMax &&
      product.price / 100 > Number(filters.priceMax)
    ) {
      return false
    }

    if (filters.model && product.model !== filters.model) {
      return false
    }

    if (
      filters.year &&
      product.year !== Number(filters.year)
    ) {
      return false
    }

    if (
      filters.screen &&
      product.screen !== filters.screen
    ) {
      return false
    }

    if (
      filters.storage &&
      product.storage !== filters.storage
    ) {
      return false
    }

    if (
      filters.color &&
      product.color !== filters.color
    ) {
      return false
    }

    if (
      filters.connector &&
      product.connector !== filters.connector
    ) {
      return false
    }

    if (
      filters.sim &&
      product.sim !== filters.sim
    ) {
      return false
    }

    return true
  })

  if (sort === 'price-asc') {
    filteredProducts.sort((a, b) => a.price - b.price)
  }

  if (sort === 'price-desc') {
    filteredProducts.sort((a, b) => b.price - a.price)
  }

  const formatPrice = (price) => {
    return (price / 100).toFixed(2)
  }

  return (
    <div className="subcategory">

      <Header />

      <Navbar />

      <main className="subcategory-page">

        <div className="subcategory-title">

          <h1>Smartphones Android</h1>

          <p>
            Découvrez notre sélection de smartphones Android reconditionnés.
          </p>

        </div>

        <section className="subcategory-content">

          <aside className="subcategory-filters">

            <h2>Filtrer</h2>

            <div className="filter-group">

              <label>Prix</label>

              <div className="price-inputs">

                <input
                  type="number"
                  placeholder="Min €"
                  value={priceMin}
                  onChange={(e) =>
                    setPriceMin(e.target.value)
                  }
                />

                <input
                  type="number"
                  placeholder="Max €"
                  value={priceMax}
                  onChange={(e) =>
                    setPriceMax(e.target.value)
                  }
                />

              </div>

            </div>

            <div className="filter-group">

              <label>Modèle</label>

              <select
                value={model}
                onChange={(e) =>
                  setModel(e.target.value)
                }
              >

                <option value="">
                  Tous les modèles
                </option>

                <option value="Xiaomi 15">
                  Xiaomi 15
                </option>

                <option value="Xiaomi 14">
                  Xiaomi 14
                </option>

                <option value="Xiaomi 13">
                  Xiaomi 13
                </option>

                <option value="OnePlus 13">
                  OnePlus 13
                </option>

                <option value="OnePlus 12">
                  OnePlus 12
                </option>

                <option value="Google Pixel 10">
                  Google Pixel 10
                </option>

                <option value="Google Pixel 9">
                  Google Pixel 9
                </option>

              </select>

            </div>

            <div className="filter-group">

              <label>Année de sortie</label>

              <select
                value={year}
                onChange={(e) =>
                  setYear(e.target.value)
                }
              >

                <option value="">
                  Toutes les années
                </option>

                {Array.from(
                  { length: 11 },
                  (_, index) => 2026 - index
                ).map((year) => (

                  <option
                    key={year}
                    value={year}
                  >
                    {year}
                  </option>

                ))}

              </select>

            </div>

            <div className="filter-group">

              <label>Taille d'écran</label>

              <select
                value={screen}
                onChange={(e) =>
                  setScreen(e.target.value)
                }
              >

                <option value="">
                  Toutes les tailles
                </option>

                <option value='6.1"'>6.1"</option>
                <option value='6.2"'>6.2"</option>
                <option value='6.3"'>6.3"</option>
                <option value='6.4"'>6.4"</option>
                <option value='6.6"'>6.6"</option>
                <option value='6.7"'>6.7"</option>
                <option value='6.8"'>6.8"</option>

              </select>

            </div>

            <div className="filter-group">

              <label>Capacité de stockage</label>

              <select
                value={storage}
                onChange={(e) =>
                  setStorage(e.target.value)
                }
              >

                <option value="">
                  Toutes les capacités
                </option>

                <option value="128 Go">128 Go</option>
                <option value="256 Go">256 Go</option>
                <option value="512 Go">512 Go</option>
                <option value="1 To">1 To</option>

              </select>

            </div>

            <div className="filter-group">

              <label>Couleur</label>

              <select
                value={color}
                onChange={(e) =>
                  setColor(e.target.value)
                }
              >

                <option value="">
                  Toutes les couleurs
                </option>

                <option value="Noir">Noir</option>
                <option value="Blanc">Blanc</option>
                <option value="Bleu">Bleu</option>
                <option value="Violet">Violet</option>
                <option value="Vert">Vert</option>
                <option value="Gris">Gris</option>

              </select>

            </div>

            <div className="filter-group">

              <label>Connecteur</label>

              <select
                value={connector}
                onChange={(e) =>
                  setConnector(e.target.value)
                }
              >

                <option value="">
                  Tous
                </option>

                <option value="USB-C">
                  USB-C
                </option>

              </select>

            </div>

            <div className="filter-group">

              <label>Carte SIM</label>

              <select
                value={sim}
                onChange={(e) =>
                  setSim(e.target.value)
                }
              >

                <option value="">
                  Toutes
                </option>

                <option value="Nano-SIM + eSIM">
                  Nano-SIM + eSIM
                </option>

                <option value="eSIM">
                  eSIM
                </option>

              </select>

            </div>

            <button
              className="filter-button"
              onClick={handleFilter}
            >
              Filtrer
            </button>

            <button
              className="reset-button"
              onClick={resetFilters}
            >
              Réinitialiser
            </button>

          </aside>

          <section className="subcategory-products">

            <div className="products-toolbar">

              <span>
                {filteredProducts.length} produits
              </span>

              <select
                value={sort}
                onChange={(e) =>
                  setSort(e.target.value)
                }
              >

                <option value="price-asc">
                  Prix croissant
                </option>

                <option value="price-desc">
                  Prix décroissant
                </option>

              </select>

            </div>

            {loading && (
              <div className="subcategory-message">
                Chargement des produits...
              </div>
            )}

            {!loading && error && (
              <div className="subcategory-message">
                {error}
              </div>
            )}

            {!loading &&
              !error &&
              filteredProducts.length > 0 && (

                <div className="subcategory-grid">

                  {filteredProducts.map((product) => (

                    <article
                      key={product.id}
                      className="subcategory-card"
                    >

                      <div className="subcategory-card-image">
                        Image produit
                      </div>

                      <div className="subcategory-card-content">

                        <h2>
                          {product.name}
                        </h2>

                        <p>
                          {product.storage} · {product.color}
                        </p>

                        <span className="subcategory-card-price">
                          {formatPrice(product.price)} €
                        </span>

                        <button>
                          Voir le produit
                        </button>

                      </div>

                    </article>

                  ))}

                </div>

              )}

            {!loading &&
              !error &&
              filteredProducts.length === 0 && (

                <div className="subcategory-message">
                  Aucun smartphone Android ne correspond à vos critères.
                </div>

              )}

          </section>

        </section>

      </main>

      <Footer />

    </div>
  )
}

export default SmartphoneAndroid