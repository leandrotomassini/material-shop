import { ShopLayout } from '@/components/layouts';
import { UI } from '@/components/ui';



const Custom404 = () => (
  <ShopLayout title={ 'Page not found' } pageDescription={ 'No hay nada que mostrar aquí.' }>
    <div className="flex items-center  justify-center pt-20">
      <UI.Card>
        <UI.CardHeader>
          <h2 className="text-2xl font-bold">Page not found</h2>
        </UI.CardHeader>
        <UI.CardBody>
          No hay nada que mostrar aquí.
        </UI.CardBody>
      </UI.Card>
    </div>
  </ShopLayout>
);

export default Custom404;