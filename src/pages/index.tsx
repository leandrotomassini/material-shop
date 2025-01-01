import { NextPage } from 'next';

import { ShopLayout } from '@/components/layouts';
import { initialData } from '@/database/products';
import { UI } from '@/components/ui';



const Home: NextPage = () => {
  return (
    <ShopLayout title={ 'Teslo-Shop - Home' } pageDescription={ 'Encuentra los mejores productos de Teslo aquí.' }>
      <h1 className="text-2xl font-bold">Tienda</h1>
      <h2 className="md mb-1">Todos los productos</h2>

      <div className="p-4 xl:p-0 grid sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center">
        {
          initialData.products.map( product => (
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
          ) )
        }
      </div>
    </ShopLayout>
  );
};

export default Home;
