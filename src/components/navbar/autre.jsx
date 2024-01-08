import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();

  // Styles pour les liens
  const linkStyle = {
    textDecoration: 'none',
    color: 'black', // Choisir la couleur de votre texte
  };

  // Styles pour l'élément actif
  const activeStyle = {
    fontWeight: 'bold',
    textDecoration: 'underline',
  };

  return (
    <div>
      <ul style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
        <li style={{ marginRight: '15px' }}>
          <Link to="/" style={location.pathname === '/' ? { ...linkStyle, ...activeStyle } : linkStyle}>Accueil</Link>
        </li>
        <li style={{ marginRight: '15px' }}>
          <Link to="/nos-produits" style={location.pathname === '/nos-produits' ? { ...linkStyle, ...activeStyle } : linkStyle}>Nos produits</Link>
        </li>
        <li style={{ marginRight: '15px' }}>
          <Link to="/panier" style={location.pathname === '/panier' ? { ...linkStyle, ...activeStyle } : linkStyle}>Panier</Link>
        </li>
        <li style={{ marginRight: '15px' }}>
          <Link to="/connexion" style={location.pathname === '/connexion' ? { ...linkStyle, ...activeStyle } : linkStyle}>Connexion</Link>
        </li>
        <li style={{ marginRight: '15px' }}>
          <Link to="/inscription" style={location.pathname === '/inscription' ? { ...linkStyle, ...activeStyle } : linkStyle}>Inscription</Link>
        </li>
        <li>
          <Link to="/mon-compte" style={location.pathname === '/mon-compte' ? { ...linkStyle, ...activeStyle } : linkStyle}>Mon compte</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
