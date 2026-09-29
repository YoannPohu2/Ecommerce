import { useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import '../css/admin.css'

function Admin() {

  const [product, setProduct] = useState({
    name: '',
    category: '',
    subcategory: '',
    price: '',
    stock: '',
    description: '',
    brand: '',
    model: '',
    color: '',
    storage: '',
    screen: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setProduct({
      ...product,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('Produit à créer :', product)
  }

  return (
    <div className="admin">

      <Header />

      <Navbar />

      <main className="admin-page">

        <div className="admin-header">
          <h1>Administration</h1>
          <p>Créer et gérer les produits Reboot.</p>
        </div>

        <section className="admin-product">

          <div className="admin-product-header">
            <h2>Créer une fiche produit</h2>
            <p>
              Ajoutez les informations du produit qui sera affiché
              dans le catalogue.
            </p>
          </div>

          <form onSubmit={handleSubmit}>

            {/* INFORMATIONS GÉNÉRALES */}

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
                  />
                </div>

                <div className="admin-field">
                  <label>Prix (€)</label>
                  <input
                    type="number"
                    name="price"
                    placeholder="899"
                    value={product.price}
                    onChange={handleChange}
                  />
                </div>

                <div className="admin-field">
                  <label>Stock</label>
                  <input
                    type="number"
                    name="stock"
                    placeholder="10"
                    value={product.stock}
                    onChange={handleChange}
                  />
                </div>

              </div>

            </div>


            {/* CATÉGORIE */}

            <div className="admin-section">

              <h3>Catégorie</h3>

              <div className="admin-grid">

                <div className="admin-field">
                  <label>Catégorie</label>

                  <select
                    name="category"
                    value={product.category}
                    onChange={handleChange}
                  >
                    <option value="">Sélectionner une catégorie</option>
                    <option value="smartphone">Smartphone</option>
                    <option value="ordinateur">Ordinateur portable</option>
                    <option value="tablette">Tablette</option>
                    <option value="console">Console</option>
                    <option value="montre">Montre connectée</option>
                  </select>

                </div>

                <div className="admin-field">
                  <label>Sous-catégorie</label>

                  <select
                    name="subcategory"
                    value={product.subcategory}
                    onChange={handleChange}
                  >
                    <option value="">Sélectionner une sous-catégorie</option>
                    <option value="iphone">iPhone</option>
                    <option value="samsung">Samsung</option>
                    <option value="google-pixel">Google Pixel</option>
                    <option value="macbook">MacBook</option>
                    <option value="windows">Windows</option>
                    <option value="gaming">Gaming</option>
                  </select>

                </div>

              </div>

            </div>


            {/* CARACTÉRISTIQUES */}

            <div className="admin-section">

              <h3>Caractéristiques</h3>

              <div className="admin-grid">

                <div className="admin-field">
                  <label>Couleur</label>

                  <input
                    type="text"
                    name="color"
                    placeholder="Ex : Noir"
                    value={product.color}
                    onChange={handleChange}
                  />

                </div>

                <div className="admin-field">
                  <label>Stockage</label>

                  <input
                    type="text"
                    name="storage"
                    placeholder="Ex : 256 Go"
                    value={product.storage}
                    onChange={handleChange}
                  />

                </div>

                <div className="admin-field">
                  <label>Taille d'écran</label>

                  <input
                    type="text"
                    name="screen"
                    placeholder='Ex : 6.3"'
                    value={product.screen}
                    onChange={handleChange}
                  />

                </div>

              </div>

            </div>


            {/* DESCRIPTION */}

            <div className="admin-section">

              <h3>Description</h3>

              <div className="admin-field">

                <textarea
                  name="description"
                  placeholder="Décrivez le produit..."
                  value={product.description}
                  onChange={handleChange}
                  rows="7"
                />

              </div>

            </div>


            {/* IMAGES */}

            <div className="admin-section">

              <h3>Images</h3>

              <div className="admin-upload">

                <span>Ajouter les images du produit</span>

                <input
                  type="file"
                  multiple
                  accept="image/*"
                />

              </div>

            </div>


            {/* ACTIONS */}

            <div className="admin-actions">

              <button
                type="button"
                className="admin-cancel"
              >
                Annuler
              </button>

              <button
                type="submit"
                className="admin-submit"
              >
                Créer le produit
              </button>

            </div>

          </form>

        </section>

      </main>

      <Footer />

    </div>
  )
}

export default Admin