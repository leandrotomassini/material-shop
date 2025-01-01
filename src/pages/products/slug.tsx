import { ProductSlideshow, ShopLayout } from '@/components';
import { Icons, UI } from '@/components/ui';
import { initialData } from '@/database/products';

const product = initialData.products[ 0 ];

const ProductPage = () => {
  return (
    <ShopLayout title={ product.title } pageDescription={ product.description }>
      <div className="grid gap-3 grid-cols-12 justify-center">
        <div className="col-span-12 md:col-span-7">
          <ProductSlideshow images={ product.images } />
        </div>

        <UI.Card className="col-span-12 md:col-span-5">
          <UI.CardHeader className="flex flex-col items-start">
            <h1 className="text-3xl">{ product.title }</h1>
            <h2 className="text-2xl font-bold pt-1">${ product.price }</h2>
          </UI.CardHeader>

          <UI.CardFooter className="flex flex-col items-start space-y-4">
            {/* item counter */ }

            {/* Agregar al carrito */ }
            <UI.Button color="primary" startContent={ <Icons.IoCartOutline size={ 24 } /> } size="lg">
              Agregar al carrito
            </UI.Button>

            {/* <UI.Chip color="danger" size="lg" variant="flat">
              <h4 className="font-bold text-xl">No hay disponibles</h4>
            </UI.Chip> */}

            <h4 className="text-xl">Descripción:</h4>

            <p className="text-left">
              { product.description }
            </p>
          </UI.CardFooter>
        </UI.Card>
      </div>
    </ShopLayout>
  );
};

export default ProductPage;
