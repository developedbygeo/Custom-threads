import Product from './Product';
import { StyledSection } from '../UI/Container.styled';

const gridSettings = {
  cols: '1fr',
  rows: 'auto',
  gap: '3rem',
};

const ProductList = ({ products }) => {
  return (
    <StyledSection className="products" as="ul" gridSettings={gridSettings}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </StyledSection>
  );
};

export default ProductList;
