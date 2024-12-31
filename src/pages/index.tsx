import { Typography } from '@mui/material';
import { ShopLayout } from '@/components/layouts';

export default function Home() {
  return (
    <ShopLayout
      title={ 'Teslo-Shop - Home' }
      pageDescription={ 'Encuentra los mejores productos de Teslo aquí.' }
    >
      <Typography variant="h1" component="h1">
        h1. Heading
      </Typography>
    </ShopLayout>
  );
}