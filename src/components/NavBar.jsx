
function NavBar ({ brand, links }) {
    return (
        <nav>
            <strong>{brand}</strong>
            <div>
                {links.map((link) => (
                    <a key={link.href} href={link.href}>
                        {link.label}
                    </a>
                ))}
            </div>
        </nav>
    );
}

export default NavBar;