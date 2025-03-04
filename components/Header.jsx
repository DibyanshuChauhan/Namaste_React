const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <img className="image" src="https://marketplace.canva.com/EAFowsrK6x8/1/0/1600w/canva-red-and-yellow-catering-flat-illustrative-food-place-logo-rYbQJ_qtaz8.jpg" alt="Food App Logo" />
            </div>
            <input className="textarea" type="text" placeholder="Enter the Item to Search..." />
            <button className="btn">Search</button>
            <div className="nav_items">
                <ul className="nav_items__list">
                    <li>Home</li>
                    <li>Contact</li>
                    <li>Menu</li>
                    <li>Order</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;