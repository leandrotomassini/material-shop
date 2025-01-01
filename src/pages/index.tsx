import { NextPage } from 'next';

import { ProductList, ShopLayout } from '@/components';
import { initialData } from '@/database/products';



const Home: NextPage = () => {
  return (
    <ShopLayout title={ 'Teslo-Shop - Home' } pageDescription={ 'Encuentra los mejores productos de Teslo aquí.' }>

      <h1 className="text-2xl font-bold">Tienda</h1>
      <h2 className="md mb-1">Todos los productos</h2>

      <ProductList
        products={ initialData.products as any }
      />

    </ShopLayout>
  );
};

export default Home;
