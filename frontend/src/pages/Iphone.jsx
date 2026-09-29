import { useState } from 'react'

import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import '../css/iphone.css'

const products = [
  {
    id: 1,
    name: 'iPhone 17',
    model: 'iPhone 17',
    year: 2026,
    screen: '6.3"',
    storage: '256 Go',
    color: 'Noir',
    operator: 'Débloqué',
    connector: 'USB-C',
    sim: 'Nano-SIM + eSIM',
    price: 899,
    sales: 120
  },
  {
    id: 2,
    name: 'iPhone 16',
    model: 'iPhone 16',
    year: 2024,
    screen: '6.1"',
    storage: '128 Go',
    color: 'Noir',
    operator: 'Débloqué',
    connector: 'USB-C',
    sim: 'Nano-SIM + eSIM',
    price: 699,
    sales: 180
  },
  {
    id: 3,
    name: 'iPhone 15',
    model: 'iPhone 15',
    year: 2023,
    screen: '6.1"',
    storage: '256 Go',
    color: 'Bleu',
    operator: 'Débloqué',
    connector: 'USB-C',
    sim: 'Nano-SIM + eSIM',
    price: 599,
    sales: 250
  },
  {
    id: 4,
    name: 'iPhone 14',
    model: 'iPhone 14',
    year: 2022,
    screen: '6.1"',
    storage: '128 Go',
    color: 'Violet',
    operator: 'Débloqué',
    connector: 'Lightning',
    sim: 'Nano-SIM + eSIM',
    price: 499,
    sales: 300
  },
  {
    id: 5,
    name: 'iPhone 13',
    model: 'iPhone 13',
    year: 2021,
    screen: '6.1"',
    storage: '128 Go',
    color: 'Noir',
    operator: 'Débloqué',
    connector: 'Lightning',
    sim: 'Nano-SIM + eSIM',
    price: 399,
    sales: 350
  },
  {
    id: 6,
    name: 'iPhone 12',
    model: 'iPhone 12',
    year: 2020,
    screen: '6.1"',
    storage: '64 Go',
    color: 'Blanc',
    operator: 'Débloqué',
    connector: 'Lightning',
    sim: 'Nano-SIM + eSIM',
    price: 299,
    sales: 420
  },
  {
    id: 7,
    name: 'iPhone 11',
    model: 'iPhone 11',
    year: 2019,
    screen: '6.1"',
    storage: '64 Go',
    color: 'Vert',
    operator: 'Débloqué',
    connector: 'Lightning',
    sim: 'Nano-SIM + eSIM',
    price: 249,
    sales: 500
  },
  {
    id: 8,
    name: 'iPhone XS',
    model: 'iPhone XS',
    year: 2018,
    screen: '5.8"',
    storage: '256 Go',
    color: 'Gris',
    operator: 'Débloqué',
    connector: 'Lightning',
    sim: 'Nano-SIM + eSIM',
    price: 199,
    sales: 550
  }
]

function Iphone() {

  const [priceMin, setPriceMin] = useState('')
  const [priceMax, setPriceMax] = useState('')

  const [model, setModel] = useState('')
  const [year, setYear] = useState('')
  const [screen, setScreen] = useState('')
  const [storage, setStorage] = useState('')
  const [color, setColor] = useState('')
  const [operator, setOperator] = useState('')
  const [connector, setConnector] = useState('')
  const [sim, setSim] = useState('')

  const [sort, setSort] = useState('sales')

  const [filters, setFilters] = useState({})

  const handleFilter = () => {
    setFilters({
      priceMin,
      priceMax,
      model,
      year,
      screen,
      storage,
      color,
      operator,
      connector,
      sim
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
    setOperator('')
    setConnector('')
    setSim('')

    setFilters({})
  }

  let filteredProducts = products.filter((product) => {

    if (
      filters.priceMin &&
      product.price < Number(filters.priceMin)
    ) {
      return false
    }

    if (
      filters.priceMax &&
      product.price > Number(filters.priceMax)
    ) {
      return false
    }

    if (
      filters.model &&
      product.model !== filters.model
    ) {
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
      filters.operator &&
      product.operator !== filters.operator
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

  if (sort === 'sales') {
    filteredProducts.sort((a, b) => b.sales - a.sales)
  }

  return (
    <div className="iphone">

      <Header />

      <Navbar />

      <main className="iphone-page">

        <div className="iphone-title">
          <h1>iPhone</h1>

          <p>
            Découvrez notre sélection d'iPhone reconditionnés.
          </p>
        </div>

        <section className="iphone-content">

          {/* FILTRES */}

          <aside className="iphone-filters">

            <h2>Filtrer</h2>

            <div className="filter-group">

              <label>Prix</label>

              <div className="price-inputs">

                <input
                  type="number"
                  placeholder="Min €"
                  value={priceMin}
                  onChange={(e) => setPriceMin(e.target.value)}
                />

                <input
                  type="number"
                  placeholder="Max €"
                  value={priceMax}
                  onChange={(e) => setPriceMax(e.target.value)}
                />

              </div>

            </div>

            <div className="filter-group">

              <label>Modèle</label>

              <select
                value={model}
                onChange={(e) => setModel(e.target.value)}
              >
                <option value="">Tous les modèles</option>

                {Array.from(
                  { length: 10 },
                  (_, index) => 17 - index
                ).map((number) => (
                  <option
                    key={number}
                    value={`iPhone ${number}`}
                  >
                    iPhone {number}
                  </option>
                ))}

              </select>

            </div>

            <div className="filter-group">

              <label>Année de sortie</label>

              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                <option value="">Toutes les années</option>

                {Array.from(
                  { length: 11 },
                  (_, index) => 2026 - index
                ).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}

              </select>

            </div>

            <div className="filter-group">

              <label>Taille d'écran</label>

              <select
                value={screen}
                onChange={(e) => setScreen(e.target.value)}
              >
                <option value="">Toutes les tailles</option>
                <option value='4.7"'>4.7"</option>
                <option value='5.4"'>5.4"</option>
                <option value='5.8"'>5.8"</option>
                <option value='6.1"'>6.1"</option>
                <option value='6.3"'>6.3"</option>
                <option value='6.7"'>6.7"</option>
                <option value='6.9"'>6.9"</option>
              </select>

            </div>

            <div className="filter-group">

              <label>Capacité de stockage</label>

              <select
                value={storage}
                onChange={(e) => setStorage(e.target.value)}
              >
                <option value="">Toutes les capacités</option>
                <option value="32 Go">32 Go</option>
                <option value="64 Go">64 Go</option>
                <option value="128 Go">128 Go</option>
                <option value="256 Go">256 Go</option>
                <option value="512 Go">512 Go</option>
                <option value="1 To">1 To</option>
                <option value="2 To">2 To</option>
              </select>

            </div>

            <div className="filter-group">

              <label>Couleur</label>

              <select
                value={color}
                onChange={(e) => setColor(e.target.value)}
              >
                <option value="">Toutes les couleurs</option>
                <option value="Noir">Noir</option>
                <option value="Blanc">Blanc</option>
                <option value="Bleu">Bleu</option>
                <option value="Violet">Violet</option>
                <option value="Vert">Vert</option>
                <option value="Gris">Gris</option>
              </select>

            </div>

            <div className="filter-group">

              <label>Verrouillage opérateur</label>

              <select
                value={operator}
                onChange={(e) => setOperator(e.target.value)}
              >
                <option value="">Tous</option>
                <option value="Débloqué">Débloqué</option>
                <option value="Verrouillé">Verrouillé</option>
              </select>

            </div>

            <div className="filter-group">

              <label>Connecteur</label>

              <select
                value={connector}
                onChange={(e) => setConnector(e.target.value)}
              >
                <option value="">Tous</option>
                <option value="USB-C">USB-C</option>
                <option value="Lightning">Lightning</option>
              </select>

            </div>

            <div className="filter-group">

              <label>Carte SIM</label>

              <select
                value={sim}
                onChange={(e) => setSim(e.target.value)}
              >
                <option value="">Toutes</option>
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


          {/* PRODUITS */}

          <section className="iphone-products">

            <div className="products-toolbar">

              <span>
                {filteredProducts.length} produits
              </span>

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="sales">
                  Meilleures ventes
                </option>

                <option value="price-asc">
                  Prix croissant
                </option>

                <option value="price-desc">
                  Prix décroissant
                </option>
              </select>

            </div>

            <div className="iphone-grid">

              {filteredProducts.map((product) => (

                <article
                  key={product.id}
                  className="iphone-card"
                >

                  <div className="iphone-card-image">
                    Image produit
                  </div>

                  <div className="iphone-card-content">

                    <h2>{product.name}</h2>

                    <p>
                      {product.storage} · {product.color}
                    </p>

                    <span className="iphone-card-price">
                      {product.price} €
                    </span>

                    <button>
                      Voir le produit
                    </button>

                  </div>

                </article>

              ))}

            </div>

          </section>

        </section>

      </main>

      <Footer />

    </div>
  )
}

export default Iphone