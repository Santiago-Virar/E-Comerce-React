import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: '#333', color: 'white' }}>
            <h2>SN Accesorios</h2>
            <ul style={{ display: 'flex', listStyle: 'none', gap: '15px' }}>
                <li><a href="#" style={{ color: 'white' }}>Inicio</a></li>
                <li><a href="#" style={{ color: 'white' }}>Productos</a></li>
                <li><a href="#" style={{ color: 'white' }}>Contacto</a></li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default NavBar;
