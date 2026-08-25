import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";

import { useState } from "react";

export default function UserNavbar() {
  const [open, setOpen] = useState(false);

  const menus = [
    {
      name: "Home",
      path: "/",
    },

    {
      name: "Kategori",
      path: "/kategori",
    },

    {
      name: "Custom",
      path: "/custom",
    },

    {
      name: "Kontak",
      path: "/kontak",
    },
  ];

  return (
    <nav
      className="
fixed 
top-0
left-0
right-0
z-50
bg-white
shadow-md
"
    >
      <div
        className="
max-w-7xl
mx-auto
px-30
h-20
flex
items-center
justify-between
"
      >
        {/* LOGO */}

        <Link
          to="/"
          className="
text-2xl
font-bold
text-blue-600
"
        >
          Rama
          <span className="text-orange-500">Terpal</span>
        </Link>

        {/* Desktop Menu */}

        <div
          className="
hidden
md:flex
gap-8
items-center
"
        >
          {menus.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="
font-medium
text-gray-700
hover:text-blue-600
transition
"
            >
              {item.name}
            </Link>
          ))}

          <Link
            to="/checkout"
            className="
flex
items-center
gap-2
bg-orange-500
text-white
px-5
py-2
rounded-full
hover:bg-orange-600
"
          >
            <ShoppingCart size={18} />
            Checkout
          </Link>
        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="
md:hidden
"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}

      {open && (
        <div
          className="
md:hidden
bg-white
border-t
px-6
py-5
space-y-4
"
        >
          {menus.map((item) => (
            <Link
              onClick={() => setOpen(false)}
              key={item.name}
              to={item.path}
              className="
block
text-gray-700
"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
