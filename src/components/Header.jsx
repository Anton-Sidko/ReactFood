import { Link } from 'react-router-dom';

function Header() {
    return <nav className="deep-orange lighten-2">
        <div className="nav-wrapper">
            <Link to="/" className="brand-logo">React Shop</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contacts">Contacts</Link>
                </li>
                <li>
                    <a href="https://github.com/Anton-Sidko/ReactShop" target="_blank" rel="noreferrer">Repo</a>
                </li>
            </ul>
        </div>
    </nav>
}

export {Header}