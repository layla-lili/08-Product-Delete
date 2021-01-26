const DeleteButton = (props) => {
  const handleDelete = () => {
    props.deleteProduct(props.product.id);
    props.setProduct(null);
  };
  return (
    <button className="btn btn-outline-danger" onClick={handleDelete}>
      Delete
    </button>
  );
};

export default DeleteButton;
