import { FC } from 'react';

import { IProduct } from '@/interfaces';
import { UI } from '../ui';




interface Props {
  product: IProduct;
}

export const ProductCard: FC<Props> = ( { product } ) => {
  return (
    <UI.Card
      className="grid-item"
      key={ product.slug }
      isPressable
    >
      <UI.CardBody>
        <UI.Image
          src={ `products/${ product.images[ 0 ] }` }
          alt={ product.description }
          isBlurred
          isZoomed
        />
      </UI.CardBody>
      <UI.CardFooter>
        <h3 className="text-xl">{ product.title }</h3>
      </UI.CardFooter>
    </UI.Card>
  );
};
