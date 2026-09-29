import { useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../css/admin.css'

function Admin() {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    category: '',
    subcategory: '',
    brand: '',
    model: '',
    year: '',
    color: '',
    storage: '',
    screen: '',
    connector: '',
    sim: ''
  })

  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const categories = {
    Smartphone: [
      'iPhone',
      'Samsung',
      'Google Pixel',
      'Xiaomi'
    ],
    'Ordinateur portable': [
      'MacBook',
      'PC portable',
      'PC gaming'
    ],
    Tablette: [
      'iPad',
      'Samsung Galaxy Tab',
      'Lenovo Tab'
    ],
    Console: [
      'PlayStation',
      'Xbox',
      'Nintendo'
    ],
    'Montre connectée': [
      'Apple Watch',
      'Samsung Galaxy Watch',
      'Garmin'
    ]
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setProduct((prev) => {
      const updatedProduct = {
        ...prev,
        [name]: value
      }

      // Si la catégorie change, on réinitialise la sous-catégorie
      if (name === 'category') {
        updatedProduct.subcategory = ''
      }

      return updatedProduct
    })
  }

  const generateSlug = (name) => {
    return name
      .toLowerCase()
      .trim()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setMessage('')
    setError('')
    setLoading(true)

    const productData = {
      name: product.name,
      slug: generateSlug(product.name),
      description: product.description,

      // Prix en centimes
      // Exemple : 899.99 € → 89999
      price: Math.round(Number(product.price) * 100),

      stock: Number(product.stock),

      // Catégorie
      category: product.category,
      subcategory: product.subcategory,

      // Informations produit
      brand: product.brand,
      model: product.model,
      year: Number(product.year),
      color: product.color,

      // Caractéristiques
      storage: product.storage,
      screen: product.screen,
      connector: product.connector,
      sim: product.sim
    }

    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(productData)
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data.message || 'Impossible de créer le produit.'
        )
      }

      setMessage('Produit créé avec succès !')

      console.log('Produit créé :', data.product)

      // Réinitialiser le formulaire
      setProduct({
        name: '',
        description: '',
        price: '',
        stock: '',
        category: '',
        subcategory: '',
        brand: '',
        model: '',
        year: '',
        color: '',
        storage: '',
        screen: '',
        connector: '',
        sim: ''
      })
    } catch (error) {
      console.error(error)

      setError(
        error.message || 'Une erreur est survenue lors de la création.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="admin">
      <Header />

      <Navbar />

      <main className="admin-page">

        <div className="admin-title">
          <h1>Administration</h1>
          <p>Ajouter un nouveau produit</p>
        </div>

        <form
          className="admin-form"
          onSubmit={handleSubmit}
        >

          {/* INFORMATIONS GÉNÉRALES */}

          <section className="admin-section">

            <h2>Informations générales</h2>

            <div className="form-group">

              <label htmlFor="name">
                Nom du produit
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={product.name}
                onChange={handleChange}
                placeholder="Ex : iPhone 17"
                required
              />

            </div>

            <div className="form-group">

              <label htmlFor="description">
                Description
              </label>

              <textarea
                id="description"
                name="description"
                value={product.description}
                onChange={handleChange}
                placeholder="Description du produit"
                required
              />

            </div>

          </section>


          {/* CATÉGORIE */}

          <section className="admin-section">

            <h2>Catégorie</h2>

            <div className="form-row">

              <div className="form-group">

                <label htmlFor="category">
                  Catégorie
                </label>

                <select
                  id="category"
                  name="category"
                  value={product.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Sélectionner une catégorie
                  </option>

                  {Object.keys(categories).map((category) => (
                    <option
                      key={category}
                      value={category}
                    >
                      {category}
                    </option>
                  ))}

                </select>

              </div>


              <div className="form-group">

                <label htmlFor="subcategory">
                  Sous-catégorie
                </label>

                <select
                  id="subcategory"
                  name="subcategory"
                  value={product.subcategory}
                  onChange={handleChange}
                  disabled={!product.category}
                  required
                >
                  <option value="">
                    Sélectionner une sous-catégorie
                  </option>

                  {product.category &&
                    categories[product.category].map(
                      (subcategory) => (
                        <option
                          key={subcategory}
                          value={subcategory}
                        >
                          {subcategory}
                        </option>
                      )
                    )}

                </select>

              </div>

            </div>

          </section>


          {/* PRIX ET STOCK */}

          <section className="admin-section">

            <h2>Prix et stock</h2>

            <div className="form-row">

              <div className="form-group">

                <label htmlFor="price">
                  Prix (€)
                </label>

                <input
                  id="price"
                  name="price"
                  type="number"
                  step="0.01"
                  min="0"
                  value={product.price}
                  onChange={handleChange}
                  placeholder="899.99"
                  required
                />

              </div>


              <div className="form-group">

                <label htmlFor="stock">
                  Stock
                </label>

                <input
                  id="stock"
                  name="stock"
                  type="number"
                  min="0"
                  value={product.stock}
                  onChange={handleChange}
                  placeholder="10"
                  required
                />

              </div>

            </div>

          </section>


          {/* INFORMATIONS PRODUIT */}

          <section className="admin-section">

            <h2>Informations produit</h2>

            <div className="form-row">

              <div className="form-group">

                <label htmlFor="brand">
                  Marque
                </label>

                <input
                  id="brand"
                  name="brand"
                  type="text"
                  value={product.brand}
                  onChange={handleChange}
                  placeholder="Apple"
                  required
                />

              </div>


              <div className="form-group">

                <label htmlFor="model">
                  Modèle
                </label>

                <input
                  id="model"
                  name="model"
                  type="text"
                  value={product.model}
                  onChange={handleChange}
                  placeholder="iPhone 17"
                  required
                />

              </div>

            </div>


            <div className="form-row">

              <div className="form-group">

                <label htmlFor="year">
                  Année
                </label>

                <input
                  id="year"
                  name="year"
                  type="number"
                  value={product.year}
                  onChange={handleChange}
                  placeholder="2026"
                  required
                />

              </div>


              <div className="form-group">

                <label htmlFor="color">
                  Couleur
                </label>

                <input
                  id="color"
                  name="color"
                  type="text"
                  value={product.color}
                  onChange={handleChange}
                  placeholder="Noir"
                  required
                />

              </div>

            </div>

          </section>


          {/* CARACTÉRISTIQUES */}

          <section className="admin-section">

            <h2>Caractéristiques</h2>

            <div className="form-row">

              <div className="form-group">

                <label htmlFor="storage">
                  Stockage
                </label>

                <input
                  id="storage"
                  name="storage"
                  type="text"
                  value={product.storage}
                  onChange={handleChange}
                  placeholder="256 Go"
                  required
                />

              </div>


              <div className="form-group">

                <label htmlFor="screen">
                  Écran
                </label>

                <input
                  id="screen"
                  name="screen"
                  type="text"
                  value={product.screen}
                  onChange={handleChange}
                  placeholder="6.3 pouces"
                  required
                />

              </div>

            </div>


            <div className="form-row">

              <div className="form-group">

                <label htmlFor="connector">
                  Connecteur
                </label>

                <input
                  id="connector"
                  name="connector"
                  type="text"
                  value={product.connector}
                  onChange={handleChange}
                  placeholder="USB-C"
                  required
                />

              </div>


              <div className="form-group">

                <label htmlFor="sim">
                  SIM
                </label>

                <input
                  id="sim"
                  name="sim"
                  type="text"
                  value={product.sim}
                  onChange={handleChange}
                  placeholder="Nano-SIM + eSIM"
                  required
                />

              </div>

            </div>

          </section>


          {/* MESSAGES */}

          {message && (
            <div className="admin-success">
              {message}
            </div>
          )}

          {error && (
            <div className="admin-error">
              {error}
            </div>
          )}


          {/* BOUTON */}

          <button
            type="submit"
            className="admin-submit"
            disabled={loading}
          >
            {loading
              ? 'Création en cours...'
              : 'Ajouter le produit'}
          </button>

        </form>

      </main>

      <Footer />

    </div>
  )
}

export default Admin