import "./Product.css";

const Product = (props) => {
  const { name, img, price, stock } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6>{name}</h6>
        <p>Price: {price}</p>
        <p>In Stock: {stock}</p>
      </div>
      <button className="btn-cart">Add To Cart</button>
    </div>
  );
};

export default Product;
