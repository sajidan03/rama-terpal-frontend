import { Link } from "react-router-dom";

import { ArrowRight, ShieldCheck, Ruler, Truck, Boxes } from "lucide-react";

import ProductCard from "../../components/user/ProductCard";

// DATA DUMMY

const products = [
  {
    id: 1,
    nama: "Terpal A12 Premium Biru",
    bahan: "A12",
    warna: "Biru",
    ukuran: "3 x 4 Meter",
    harga: 250000,
    stok: 50,
    image: "https://images.unsplash.com/photo-1586864387789-628af9feed72",
  },

  {
    id: 2,
    nama: "Terpal PVC Anti Air Premium",
    bahan: "PVC",
    warna: "Orange",
    ukuran: "4 x 6 Meter",
    harga: 500000,
    stok: 30,
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
  },

  {
    id: 3,
    nama: "Terpal Kanvas Tebal",
    bahan: "Kanvas",
    warna: "Hijau",
    ukuran: "2 x 3 Meter",
    harga: 350000,
    stok: 20,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },

  {
    id: 4,
    nama: "Terpal Truck Heavy Duty",
    bahan: "Heavy Duty",
    warna: "Hitam",
    ukuran: "5 x 8 Meter",
    harga: 850000,
    stok: 15,
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c",
  },
];

const categories = [
  {
    title: "A5",
    desc: "Terpal A5",
  },

  {
    title: "A8",
    desc: "Terpal A8",
  },

  {
    title: "A12",
    desc: "Terpal A12",
  },

  {
    title: "PVC",
    desc: "PVC",
  },

  {
    title: "Kanvas",
    desc: "Kanvas",
  },

  {
    title: "Custom",
    desc: "Custom Ukuran",
  },
];

export default function LandingPage() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="bg-gray-50">
      {/* HERO */}

      <section
        className="
bg-gradient-to-r
from-blue-700
to-blue-500
text-white
py-24
px-30
"
      >
        <div
          className="
max-w-7xl
mx-auto
grid
md:grid-cols-2
gap-10
items-center
"
        >
          <div>
            <p
              className="
text-orange-400
font-bold
mb-4
"
            >
              RAMA TERPAL
            </p>

            <h1
              className="
text-3xl
font-bold
leading-tight
"
            >
              Terpal Berkualitas untuk Berbagai Kebutuhan
            </h1>

            <p
              className="
mt-6
text-blue-100
text-lg
"
            >
              Pilih berbagai bahan dan ukuran terpal atau pesan ukuran custom
              sesuai kebutuhan Anda.
            </p>

            <div
              className="
mt-8
flex
gap-4
"
            >
              <Link
                to="/kategori"
                className="
bg-orange-500
px-6
py-3
rounded-xl
flex
items-center
gap-2
hover:bg-orange-600
"
              >
                Lihat Produk
                <ArrowRight size={20} />
              </Link>

              <Link
                to="/custom"
                className="
bg-white
text-blue-700
px-6
py-3
rounded-xl
"
              >
                Custom Terpal
              </Link>
            </div>
          </div>

          <div
            className="
rounded-3xl
overflow-hidden
"
          >
            <img
              src="https://images.unsplash.com/photo-1586864387789-628af9feed72"
              className="
w-full
h-80
object-cover
"
            />
          </div>
        </div>
      </section>

      {/* FEATURE */}

      <section
        className="
max-w-7xl
mx-auto
px-30
-translate-y-10
"
      >
        <div
          className="
bg-white
rounded-2xl
shadow-lg
grid
md:grid-cols-4
overflow-hidden
"
        >
          <div className="p-6 flex gap-4 items-center hover:bg-gray-50">
            <div className="bg-blue-50 p-3 rounded-xl">
              <ShieldCheck className="text-blue-600" />
            </div>

            <div>
              <h3 className="font-semibold">Bahan Berkualitas</h3>

              <p className="text-sm text-gray-500">
                Material kuat dan tahan lama
              </p>
            </div>
          </div>

          <div className="p-6 flex gap-4 items-center hover:bg-gray-50">
            <div className="bg-blue-50 p-3 rounded-xl">
              <Ruler className="text-blue-600" />
            </div>

            <div>
              <h3 className="font-semibold">Custom Ukuran</h3>

              <p className="text-sm text-gray-500">Sesuai kebutuhan</p>
            </div>
          </div>

          <div className="p-6 flex gap-4 items-center hover:bg-gray-50">
            <div className="bg-blue-50 p-3 rounded-xl">
              <Boxes className="text-blue-600" />
            </div>

            <div>
              <h3 className="font-semibold">Banyak Pilihan</h3>

              <p className="text-sm text-gray-500">Beragam tipe terpal</p>
            </div>
          </div>

          <div className="p-6 flex gap-4 items-center hover:bg-gray-50">
            <div className="bg-blue-50 p-3 rounded-xl">
              <Truck className="text-blue-600" />
            </div>

            <div>
              <h3 className="font-semibold">Mudah Dipesan</h3>

              <p className="text-sm text-gray-500">Checkout WhatsApp</p>
            </div>
          </div>
        </div>
      </section>

      {/* KATEGORI */}

      <section
        className="
max-w-7xl
mx-auto
px-30
pb-10
"
      >
        <div className="flex justify-between mb-6">
          <h2
            className="
text-3xl
font-bold
"
          >
            Kategori
          </h2>

          <Link
            to="/kategori"
            className="
text-blue-600
"
          >
            Lihat Semua
          </Link>
        </div>

        <div
          className="
grid
grid-cols-2
md:grid-cols-6
gap-4
"
        >
          {categories.map((item) => (
            <div
              key={item.title}
              className="
bg-white
rounded-xl
p-6
text-center
hover:shadow-md
transition
"
            >
              <div
                className="
w-14
h-14
rounded-full
bg-blue-50
mx-auto
flex
items-center
justify-center
font-bold
text-blue-600
"
              >
                {item.title}
              </div>

              <p
                className="
mt-4
text-gray-700
"
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUK */}

      <section
        className="
max-w-7xl
mx-auto
px-30
pb-20
"
      >
        <div
          className="
flex
justify-between
items-center
mb-8
"
        >
          <div>
            <h2
              className="
text-3xl
font-bold
text-gray-800
"
            >
              Produk Unggulan
            </h2>

            <p
              className="
text-gray-500
mt-2
"
            >
              Pilihan terbaik Rama Terpal
            </p>
          </div>

          <Link
            to="/kategori"
            className="
text-blue-600
"
          >
            Lihat Semua
          </Link>
        </div>

        <div
          className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-6
"
        >
          {featuredProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
