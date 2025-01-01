import Link from 'next/link';
import { Icons, UI } from './';
import { useState } from 'react';

export const Navbar = () => {
  const [ isOpen, setIsOpen ] = useState( false );

  const toggleMenu = () => setIsOpen( !isOpen );

  return (
    <>
      <UI.Navbar shouldHideOnScroll className="relative z-150">
        <UI.NavbarBrand className="flex items-center">
          <Link color="foreground" href="/" className="flex">
            <h1 className="text-xl font-bold">Teslo | </h1>
            <h2 className="text-xl pl-1">Shop</h2>
          </Link>
        </UI.NavbarBrand>

        <UI.NavbarContent className="hidden sm:flex gap-4" justify="center">
          <UI.NavbarItem>
            <Link color="foreground" href="#">
              Hombres
            </Link>
          </UI.NavbarItem>
          <UI.NavbarItem isActive>
            <Link aria-current="page" href="#">
              Mujeres
            </Link>
          </UI.NavbarItem>
          <UI.NavbarItem>
            <Link color="foreground" href="#">
              Niños
            </Link>
          </UI.NavbarItem>
        </UI.NavbarContent>

        <UI.NavbarContent justify="end" className="flex items-center justify-center">
          <UI.NavbarItem>
            <Link href="#" color="foreground">
              <UI.Button startContent={ <Icons.IoSearchOutline size={ 30 } /> } variant="light" />
            </Link>
          </UI.NavbarItem>
          <UI.NavbarItem>
            <Link href="#" color="foreground">
              <UI.Button startContent={ <UI.Badge color="primary" content="5"><Icons.IoCartOutline size={ 26 } /></UI.Badge> } variant="light" />
            </Link>
          </UI.NavbarItem>
          <UI.NavbarItem>
            <UI.Button
              startContent={ <Icons.IoMenuOutline size={ 30 } /> }
              variant="light"
              onPress={ toggleMenu }
            />
          </UI.NavbarItem>
        </UI.NavbarContent>
      </UI.Navbar>

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

          <UI.NavbarBrand className="flex items-center">
            <Link color="foreground" href="/" className="flex">
              <h1 className="text-xl font-bold">Teslo | </h1>
              <h2 className="text-xl pl-1">Shop</h2>
            </Link>
          </UI.NavbarBrand>

          <UI.NavbarContent className="flex flex-col gap-4">

            <Link
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Hombres
            </Link>

            <Link
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Mujeres
            </Link>

            <Link
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Niños
            </Link>
          </UI.NavbarContent>
        </UI.Navbar>
      </div>
    </>
  );
};

export default Navbar;