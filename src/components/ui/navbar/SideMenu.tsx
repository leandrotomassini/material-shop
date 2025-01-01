import { FC } from 'react';
import Link from 'next/link';

import { UI } from '../';



interface Props {
  isOpen: boolean;
  toggleMenu: () => void;
}

export const SideMenu: FC<Props> = ( { toggleMenu, isOpen = false } ) => {

  return (
    <>
      {/* Overlay */ }
      <div
        className={ `fixed inset-0 bg-black/50 transition-opacity duration-300 ease-in-out z-30 ${ isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }` }
        onClick={ toggleMenu }
      />

      {/* Sidenav */ }
      <div
        className={ `fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${ isOpen ? 'translate-x-0' : '-translate-x-full'
          }` }
      >

        <UI.Navbar className="p-4 pt-20 flex flex-col">
          <UI.NavbarContent className="flex flex-col gap-4">

            <UI.Input label="Buscar" size={ 'md' } type="text" />

            <Link color="foreground" href="/" className="flex">
              <h1 className="text-xl font-bold">Teslo | </h1>
              <h2 className="text-xl pl-1">Shop</h2>
            </Link>

            <Link
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Perfil
            </Link>

            <Link
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Mis ordentes
            </Link>

            <Link
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Ingresar
            </Link>

            <Link
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Salir
            </Link>

            <hr />

            <Link
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Productos
            </Link>

            <Link
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Ordenes
            </Link>

            <Link
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Usuario
            </Link>
          </UI.NavbarContent>
        </UI.Navbar>
      </div>
    </>
  );
};
