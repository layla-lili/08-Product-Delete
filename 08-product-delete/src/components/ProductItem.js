import { ProductWrapper } from "../styles";
import DeleteButton from "./DeleteButton";
const ProductItem = (props) => {
  const product = props.product;
  const setProduct = props.setProduct;

  return (
    <ProductWrapper>
      <p>{product.name}</p>
      <p className="price">Price: {product.price} BHD</p>
      <img
        src={product.image}
        alt={product.name}
        onClick={() => setProduct(product)}
      />
      <br />
      <DeleteButton
        deleteProduct={props.deleteProduct}
        product={product}
        setProduct={setProduct}
      />
    </ProductWrapper>
  );
};

export default ProductItem;
