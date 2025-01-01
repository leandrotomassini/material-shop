import { FC } from 'react';

import { IProduct } from '@/interfaces';
import { ProductCard } from './ProductCard';




interface Props {
  products: IProduct[];
}

export const ProductList: FC<Props> = ( { products } ) => {

  return (
    <div className="p-4 xl:p-0 grid sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center">
      { products.map( product => (
        <ProductCard
          key={ product.slug }
          product={ product }
        />
      ) ) }
    </div>
  );
};
