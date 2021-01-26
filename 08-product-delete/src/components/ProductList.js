import { useState } from "react";
import { ListWrapper } from "../styles";
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";

const ProductList = (props) => {
  const [query, setQuery] = useState("");

  const productList = props.products
    .filter((product) => product.name.toLowerCase().includes(query))
    .map((product) => (
      <ProductItem
        key={product.id}
        product={product}
        setProduct={props.setProduct}
        deleteProduct={props.deleteProduct}
      />
    ));
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{productList}</ListWrapper>
    </>
  );
};

export default ProductList;
