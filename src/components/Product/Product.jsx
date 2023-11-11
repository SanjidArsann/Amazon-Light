import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { name, img, price, stock } = props.product;
  const handleToCart = props.handleToCart;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6>{name}</h6>
        <p>Price: {price}</p>
        <p>In Stock: {stock}</p>
      </div>
      <button onClick={() => handleToCart(props.product)} className="btn-cart">
        Add To Cart 
         <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
