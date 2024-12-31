import { NextPage } from 'next';

import { ShopLayout } from '@/components/layouts';



const Home: NextPage = () => {
  return (
    <ShopLayout title={ 'Teslo-Shop - Home' } pageDescription={ 'Encuentra los mejores productos de Teslo aquí.' }>
      <h1 className="text-2xl font-bold">Tienda</h1>
      <h2 className="md mb-1">Todos los productos</h2>
    </ShopLayout>
  );
};

export default Home;
