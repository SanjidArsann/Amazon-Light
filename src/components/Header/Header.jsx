import './Header.css';
import logo from '../../images/logo.png'
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div>
            <a href="/Order">Order</a>
            <a href="/Order Review">Order Review</a>
            <a href="/manage Inventory">Manage Inventory</a>
            <a href="/Login">Login</a>
            </div>
        </div>
    );
};

export default Header;