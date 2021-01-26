import { DetailWrapper } from "../styles";
import DeleteButton from "./DeleteButton";

const ProductDetail = (props) => {
  const product = props.product;
  return (
    <DetailWrapper className="text-left">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />

      <p>{product.description}</p>
      <p className="text-danger">{product.price} BHD</p>
      <button
        className="btn btn-outline-info"
        onClick={() => props.setProduct(null)}
      >
        Go back home!
      </button>
      <DeleteButton
        deleteProduct={props.deleteProduct}
        product={product}
        setProduct={props.setProduct}
      />
    </DetailWrapper>
  );
};

export default ProductDetail;
