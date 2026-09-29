import '../css/footer.css'

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-logo">
        Reboot
      </div>


      <div className="footer-column">
        <h3>Reboot</h3>

        <a href="#">À propos</a>
        <a href="#">Contact</a>
        <a href="#">FAQ</a>
      </div>


      <div className="footer-column">
        <h3>Nos produits</h3>

        <a href="/smartphone">Smartphones</a>
        <a href="#">Ordinateurs</a>
        <a href="#">Tablettes</a>
        <a href="#">Consoles</a>
      </div>


      <div className="footer-column">
        <h3>Aide</h3>

        <a href="#">Livraison</a>
        <a href="#">Retours</a>
        <a href="#">Garantie</a>
      </div>

    </footer>
  )
}

export default Footer