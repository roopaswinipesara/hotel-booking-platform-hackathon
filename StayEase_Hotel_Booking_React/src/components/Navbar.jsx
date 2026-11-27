export default function Navbar({ user, onLogin, onLogout }) {
  return (
    <header className="navbar">
      <a className="logo" href="#home" aria-label="StayEase home">Stay<span>Ease</span></a>
      <nav>
        <a href="#home">Home</a>
        <a href="#hotels">Hotels</a>
        <a href="#features">Features</a>
        {user && <a href="#my-bookings">My Bookings</a>}
        <a href="#admin">Admin</a>
      </nav>
      <div className="navbar-actions">
        {user ? (
          <>
            <span className="user-greeting">Hi, {user.name.split(' ')[0]}</span>
            <button className="login-btn" type="button" onClick={onLogout}>Logout</button>
          </>
        ) : (
          <>
            <button className="login-btn" type="button" onClick={() => onLogin('login')}>Login</button>
            <button className="signup-btn" type="button" onClick={() => onLogin('register')}>Sign Up</button>
          </>
        )}
      </div>
    </header>
  );
}
