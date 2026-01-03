const ProductCard = ({ image, title }) => {
  return (
    <div className="product">
      <img src={image} alt={`${title}-image`} />
      <h3>{title}</h3>
    </div>
  );
};
export default ProductCard;
