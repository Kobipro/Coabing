import { useContext } from 'react';

import ProductCard from '../../Components/Shops-Product-Card/shops-product-card.component';

import { ProductsContext } from '../../Context/products.context';

import './jackets.component.styles.css';

const Jackets = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className='products-container'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Jackets;
