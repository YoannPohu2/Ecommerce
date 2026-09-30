import { useEffect, useState } from 'react'

import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import '../css/admin.css'

const categories = {
  Smartphone: [
    'iPhone',
    'Samsung',
    'Google Pixel',
    'Xiaomi',
  ],

  'Ordinateur portable': [
    'MacBook',
    'PC portable',
    'PC gaming',
  ],

  Tablette: [
    'iPad',
    'Samsung Galaxy Tab',
    'Lenovo Tab',
  ],

  Console: [
    'PlayStation',
    'Xbox',
    'Nintendo',
  ],

  'Montre connectée': [
    'Apple Watch',
    'Samsung Galaxy Watch',
    'Garmin',
  ],
}

const emptyProduct = {
  name: '',
  category: '',
  subcategory: '',
  price: '',
  stock: '',
  description: '',
  brand: '',
  model: '',
  year: '',
  color: '',
  storage: '',
  screen: '',
  connector: '',
  sim: '',
}

function Admin() {

  const [activePage, setActivePage] = useState('dashboard')

  const [products, setProducts] = useState([])

  const [product, setProduct] = useState(emptyProduct)

  const [editingProduct, setEditingProduct] = useState(null)

  const [showForm, setShowForm] = useState(false)

  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  /*
   * Récupérer les produits
   */
  const fetchProducts = async () => {

    try {

      setError('')

      const response = await fetch('/api/products')

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data.message || 'Impossible de récupérer les produits.'
        )
      }

      setProducts(data.products || [])

    } catch (error) {

      console.error(error)

      setError(error.message)

    }
  }

  /*
   * Charger les produits au démarrage
   */
  useEffect(() => {
    fetchProducts()
  }, [])

  /*
   * Modifier les champs du formulaire
   */
  const handleChange = (e) => {

    const { name, value } = e.target

    setProduct((previous) => ({
      ...previous,
      [name]: value,
    }))

    setMessage('')
    setError('')
  }

  /*
   * Générer le slug
   */
  const generateSlug = (name) => {

    return name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
  }

  /*
   * Réinitialiser le formulaire
   */
  const resetForm = () => {

    setProduct(emptyProduct)
    setEditingProduct(null)
    setShowForm(false)

    setMessage('')
    setError('')
  }

  /*
   * Ajouter un produit
   */
  const handleCreate = async (e) => {

    e.preventDefault()

    setLoading(true)
    setMessage('')
    setError('')

    try {

      const productData = {
        name: product.name,
        slug: generateSlug(product.name),
        description: product.description,

        price: Math.round(
          Number(product.price) * 100
        ),

        stock: Number(product.stock),

        category: product.category,
        subcategory: product.subcategory,

        brand: product.brand,
        model: product.model,
        year: Number(product.year),

        color: product.color,
        storage: product.storage,
        screen: product.screen,
        connector: product.connector,
        sim: product.sim,
      }

      const response = await fetch('/api/products', {

        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },

        body: JSON.stringify(productData),

      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data.message ||
          'Impossible de créer le produit.'
        )
      }

      setMessage('Produit créé avec succès.')

      await fetchProducts()

      resetForm()

      setActivePage('products')

    } catch (error) {

      console.error(error)

      setError(error.message)

    } finally {

      setLoading(false)

    }
  }

  /*
   * Modifier un produit
   */
  const handleUpdate = async (e) => {

    e.preventDefault()

    if (!editingProduct) {
      return
    }

    setLoading(true)
    setMessage('')
    setError('')

    try {

      const productData = {
        name: product.name,
        slug: generateSlug(product.name),
        description: product.description,

        price: Math.round(
          Number(product.price) * 100
        ),

        stock: Number(product.stock),

        category: product.category,
        subcategory: product.subcategory,

        brand: product.brand,
        model: product.model,
        year: Number(product.year),

        color: product.color,
        storage: product.storage,
        screen: product.screen,
        connector: product.connector,
        sim: product.sim,
      }

      const response = await fetch(
        `/api/products/${editingProduct.id}`,
        {
          method: 'PUT',

          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },

          body: JSON.stringify(productData),
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data.message ||
          'Impossible de modifier le produit.'
        )
      }

      setMessage('Produit modifié avec succès.')

      await fetchProducts()

      resetForm()

      setActivePage('products')

    } catch (error) {

      console.error(error)

      setError(error.message)

    } finally {

      setLoading(false)

    }
  }

  /*
   * Supprimer un produit
   */
  const handleDelete = async (id) => {

    const confirmed = window.confirm(
      'Voulez-vous vraiment supprimer ce produit ?'
    )

    if (!confirmed) {
      return
    }

    try {

      setError('')
      setMessage('')

      const response = await fetch(
        `/api/products/${id}`,
        {
          method: 'DELETE',
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data.message ||
          'Impossible de supprimer le produit.'
        )
      }

      setMessage('Produit supprimé avec succès.')

      await fetchProducts()

    } catch (error) {

      console.error(error)

      setError(error.message)

    }
  }

  /*
   * Préparer la modification
   */
  const handleEdit = (productToEdit) => {

    setEditingProduct(productToEdit)

    setProduct({
      name: productToEdit.name || '',
      category: productToEdit.category || '',
      subcategory: productToEdit.subcategory || '',
      price: productToEdit.price
        ? productToEdit.price / 100
        : '',
      stock: productToEdit.stock ?? '',
      description: productToEdit.description || '',
      brand: productToEdit.brand || '',
      model: productToEdit.model || '',
      year: productToEdit.year || '',
      color: productToEdit.color || '',
      storage: productToEdit.storage || '',
      screen: productToEdit.screen || '',
      connector: productToEdit.connector || '',
      sim: productToEdit.sim || '',
    })

    setShowForm(true)
    setActivePage('products')
  }

  /*
   * Statistiques
   */
  const totalProducts = products.length

  const totalStock = products.reduce(
    (total, product) =>
      total + Number(product.stock || 0),
    0
  )

  const totalCategories = new Set(
    products.map((product) => product.category)
  ).size

  const lowStock = products.filter(
    (product) => Number(product.stock) <= 5
  ).length

  /*
   * Formulaire produit
   */
  const renderProductForm = () => (

    <section className="admin-product-form">

      <div className="admin-product-header">

        <div>

          <h2>
            {editingProduct
              ? 'Modifier le produit'
              : 'Ajouter un produit'
            }
          </h2>

          <p>
            {editingProduct
              ? 'Modifiez les informations du produit.'
              : 'Ajoutez un nouveau produit au catalogue.'
            }
          </p>

        </div>

        <button
          type="button"
          className="admin-cancel"
          onClick={resetForm}
        >
          Retour
        </button>

      </div>

      {message && (
        <div className="admin-message admin-success">
          {message}
        </div>
      )}

      {error && (
        <div className="admin-message admin-error">
          {error}
        </div>
      )}

      <form
        onSubmit={
          editingProduct
            ? handleUpdate
            : handleCreate
        }
      >

        <div className="admin-section">

          <h3>Informations générales</h3>

          <div className="admin-grid">

            <div className="admin-field">

              <label>Nom du produit</label>

              <input
                type="text"
                name="name"
                placeholder="Ex : iPhone 17"
                value={product.name}
                onChange={handleChange}
                required
              />

            </div>

            <div className="admin-field">

              <label>Marque</label>

              <input
                type="text"
                name="brand"
                placeholder="Ex : Apple"
                value={product.brand}
                onChange={handleChange}
                required
              />

            </div>

            <div className="admin-field">

              <label>Modèle</label>

              <input
                type="text"
                name="model"
                placeholder="Ex : iPhone 17"
                value={product.model}
                onChange={handleChange}
                required
              />

            </div>

            <div className="admin-field">

              <label>Année</label>

              <input
                type="number"
                name="year"
                placeholder="2026"
                value={product.year}
                onChange={handleChange}
                required
              />

            </div>

            <div className="admin-field">

              <label>Prix (€)</label>

              <input
                type="number"
                name="price"
                min="0"
                step="0.01"
                placeholder="899"
                value={product.price}
                onChange={handleChange}
                required
              />

            </div>

            <div className="admin-field">

              <label>Stock</label>

              <input
                type="number"
                name="stock"
                min="0"
                placeholder="10"
                value={product.stock}
                onChange={handleChange}
                required
              />

            </div>

          </div>

        </div>

        <div className="admin-section">

          <h3>Catégorie</h3>

          <div className="admin-grid">

            <div className="admin-field">

              <label>Catégorie</label>

              <select
                name="category"
                value={product.category}
                onChange={(e) => {

                  setProduct({
                    ...product,
                    category: e.target.value,
                    subcategory: '',
                  })

                }}
                required
              >

                <option value="">
                  Sélectionner une catégorie
                </option>

                {Object.keys(categories).map(
                  (category) => (

                    <option
                      key={category}
                      value={category}
                    >
                      {category}
                    </option>

                  )
                )}

              </select>

            </div>

            <div className="admin-field">

              <label>Sous-catégorie</label>

              <select
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
                  categories[
                    product.category
                  ].map((subcategory) => (

                    <option
                      key={subcategory}
                      value={subcategory}
                    >
                      {subcategory}
                    </option>

                  ))
                }

              </select>

            </div>

          </div>

        </div>

        <div className="admin-section">

          <h3>Caractéristiques</h3>

          <div className="admin-grid">

            <div className="admin-field">

              <label>Couleur</label>

              <input
                type="text"
                name="color"
                placeholder="Noir"
                value={product.color}
                onChange={handleChange}
                required
              />

            </div>

            <div className="admin-field">

              <label>Stockage</label>

              <input
                type="text"
                name="storage"
                placeholder="256 Go"
                value={product.storage}
                onChange={handleChange}
                required
              />

            </div>

            <div className="admin-field">

              <label>Taille d'écran</label>

              <input
                type="text"
                name="screen"
                placeholder='6.3 pouces'
                value={product.screen}
                onChange={handleChange}
                required
              />

            </div>

            <div className="admin-field">

              <label>Connecteur</label>

              <input
                type="text"
                name="connector"
                placeholder="USB-C"
                value={product.connector}
                onChange={handleChange}
                required
              />

            </div>

            <div className="admin-field">

              <label>SIM</label>

              <input
                type="text"
                name="sim"
                placeholder="Nano-SIM + eSIM"
                value={product.sim}
                onChange={handleChange}
                required
              />

            </div>

          </div>

        </div>

        <div className="admin-section">

          <h3>Description</h3>

          <textarea
            name="description"
            placeholder="Description du produit..."
            value={product.description}
            onChange={handleChange}
            rows="6"
            required
          />

        </div>

        <div className="admin-actions">

          <button
            type="button"
            className="admin-cancel"
            onClick={resetForm}
          >
            Annuler
          </button>

          <button
            type="submit"
            className="admin-submit"
            disabled={loading}
          >
            {loading
              ? 'Enregistrement...'
              : editingProduct
                ? 'Enregistrer les modifications'
                : 'Créer le produit'
            }
          </button>

        </div>

      </form>

    </section>

  )

  /*
   * Liste des produits
   */
  const renderProducts = () => (

    <section className="admin-products">

      <div className="admin-section-title">

        <div>

          <h2>Gestion des produits</h2>

          <p>
            Ajoutez, modifiez ou supprimez les produits du catalogue.
          </p>

        </div>

        <button
          className="admin-add-button"
          onClick={() => {

            setProduct(emptyProduct)
            setEditingProduct(null)
            setShowForm(true)

          }}
        >
          + Ajouter un produit
        </button>

      </div>

      {message && (
        <div className="admin-message admin-success">
          {message}
        </div>
      )}

      {error && (
        <div className="admin-message admin-error">
          {error}
        </div>
      )}

      {products.length === 0 ? (

        <div className="admin-empty">

          <h3>Aucun produit</h3>

          <p>
            Commencez par ajouter votre premier produit.
          </p>

          <button
            className="admin-add-button"
            onClick={() => setShowForm(true)}
          >
            Ajouter un produit
          </button>

        </div>

      ) : (

        <div className="admin-table-container">

          <table className="admin-table">

            <thead>

              <tr>

                <th>ID</th>
                <th>Produit</th>
                <th>Catégorie</th>
                <th>Prix</th>
                <th>Stock</th>
                <th>Actions</th>

              </tr>

            </thead>

            <tbody>

              {products.map((item) => (

                <tr key={item.id}>

                  <td>#{item.id}</td>

                  <td>

                    <strong>
                      {item.name}
                    </strong>

                    <small>
                      {item.brand} · {item.model}
                    </small>

                  </td>

                  <td>

                    <span>
                      {item.category}
                    </span>

                    <small>
                      {item.subcategory}
                    </small>

                  </td>

                  <td>
                    {(item.price / 100).toFixed(2)} €
                  </td>

                  <td>

                    <span
                      className={
                        Number(item.stock) <= 5
                          ? 'stock-low'
                          : 'stock-ok'
                      }
                    >
                      {item.stock}
                    </span>

                  </td>

                  <td>

                    <div className="admin-table-actions">

                      <button
                        className="admin-edit"
                        onClick={() =>
                          handleEdit(item)
                        }
                      >
                        Modifier
                      </button>

                      <button
                        className="admin-delete"
                        onClick={() =>
                          handleDelete(item.id)
                        }
                      >
                        Supprimer
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </section>

  )

  /*
   * Dashboard
   */
  const renderDashboard = () => (

    <section className="admin-dashboard">

      <div className="admin-section-title">

        <div>

          <h2>Dashboard</h2>

          <p>
            Vue d'ensemble de votre boutique Reboot.
          </p>

        </div>

      </div>

      <div className="admin-stat-grid">

        <div className="admin-stat-card">

          <span>Produits</span>

          <strong>{totalProducts}</strong>

          <small>
            produits dans le catalogue
          </small>

        </div>

        <div className="admin-stat-card">

          <span>Stock</span>

          <strong>{totalStock}</strong>

          <small>
            unités disponibles
          </small>

        </div>

        <div className="admin-stat-card">

          <span>Catégories</span>

          <strong>{totalCategories}</strong>

          <small>
            catégories utilisées
          </small>

        </div>

        <div className="admin-stat-card">

          <span>Stock faible</span>

          <strong>{lowStock}</strong>

          <small>
            produits à surveiller
          </small>

        </div>

      </div>

      <div className="admin-dashboard-card">

        <h3>Derniers produits</h3>

        {products.slice(-5).reverse().map(
          (product) => (

            <div
              className="admin-dashboard-product"
              key={product.id}
            >

              <div>

                <strong>
                  {product.name}
                </strong>

                <span>
                  {product.category} · {product.subcategory}
                </span>

              </div>

              <strong>
                {(product.price / 100).toFixed(2)} €
              </strong>

            </div>

          )
        )}

      </div>

    </section>

  )

  return (

    <div className="admin">

      <Header />

      <Navbar />

      <main className="admin-page">

        <div className="admin-layout">

          {/* SIDEBAR */}

          <aside className="admin-sidebar">

            <div className="admin-sidebar-title">

              <h1>Dashboard</h1>

            </div>

            <nav>

              <button
                className={
                  activePage === 'dashboard'
                    ? 'active'
                    : ''
                }
                onClick={() =>
                  setActivePage('dashboard')
                }
              >
                Dashboard
              </button>

              <button
                className={
                  activePage === 'products'
                    ? 'active'
                    : ''
                }
                onClick={() => {
                  setActivePage('products')
                  setShowForm(false)
                }}
              >
                Produits
              </button>

              <button
                onClick={() =>
                  setActivePage('orders')
                }
              >
                Commandes
              </button>

              <button
                onClick={() =>
                  setActivePage('customers')
                }
              >
                Clients
              </button>

              <button
                onClick={() =>
                  setActivePage('stock')
                }
              >
                Stocks
              </button>

              <button
                onClick={() =>
                  setActivePage('categories')
                }
              >
                Catégories
              </button>

            </nav>

          </aside>

          {/* CONTENU */}

          <div className="admin-content">

            {activePage === 'dashboard' &&
              renderDashboard()
            }

            {activePage === 'products' &&
              !showForm &&
              renderProducts()
            }

            {activePage === 'products' &&
              showForm &&
              renderProductForm()
            }

            {activePage === 'orders' && (

              <div className="admin-coming-soon">

                <h2>Commandes</h2>

                <p>
                  La gestion des commandes sera disponible prochainement.
                </p>

              </div>

            )}

            {activePage === 'customers' && (

              <div className="admin-coming-soon">

                <h2>Clients</h2>

                <p>
                  La gestion des clients sera disponible prochainement.
                </p>

              </div>

            )}

            {activePage === 'stock' && (

              <div className="admin-coming-soon">

                <h2>Stocks</h2>

                <p>
                  La gestion avancée des stocks sera disponible prochainement.
                </p>

              </div>

            )}

            {activePage === 'categories' && (

              <div className="admin-coming-soon">

                <h2>Catégories</h2>

                <p>
                  La gestion des catégories sera disponible prochainement.
                </p>

              </div>

            )}

          </div>

        </div>

      </main>

      <Footer />

    </div>
  )
}

export default Admin