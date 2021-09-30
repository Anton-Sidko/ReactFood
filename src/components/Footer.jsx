function Footer() {
    return <footer className="page-footer deep-orange lighten-1">
        <div className="footer-copyright deep-orange lighten-1">
            <div className="container">
                © {new Date().getFullYear()} Copyright Text
                <a className="white-text text-lighten-5 right" href="https://github.com/Anton-Sidko/ReactShop">Repo</a>
            </div>
        </div>
    </footer>
}

export {Footer}