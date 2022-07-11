function Header() {
  return (
    <header>
      <nav className="nav-container">
        <img
          class="nav-logo"
          src="https://i0.wp.com/www.primefaces.org/wp-content/uploads/2017/09/feature-react.png?fit=260%2C260&ssl=1"
        />
        <ul className="nav-items">
          <li>About</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
