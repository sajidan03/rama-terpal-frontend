import { Link } from "react-router-dom";
import {
  ArrowRight,
  Boxes,
  Ruler,
  ShieldCheck,
  Truck,
} from "lucide-react";

import ProductCard from "../../components/user/ProductCard";
import Footer from "../../components/user/Footer";
import { products } from "../../data/products";

export default function LandingPage() {
  return (
    <div className="bg-gray-50">
      {/* HERO */}

      <section
        className="
          bg-blue-700
          text-white
          px-5
          py-12
          sm:py-16
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
                text-orange-300
                font-semibold
                mb-3
              "
            >
              RAMA TERPAL
            </p>

            <h1
              className="
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-bold
                leading-tight
              "
            >
              Terpal Berkualitas untuk Berbagai Kebutuhan
            </h1>

            <p
              className="
                mt-5
                text-blue-100
                max-w-xl
              "
            >
              Pilih berbagai bahan dan ukuran terpal atau pesan
              ukuran custom sesuai kebutuhan Anda.
            </p>

            <div
              className="
                flex
                flex-wrap
                gap-3
                mt-7
              "
            >
              <Link
                to="/kategori"
                className="
                  bg-orange-500
                  hover:bg-orange-600
                  px-5
                  py-3
                  rounded-lg
                  flex
                  items-center
                  gap-2
                  font-medium
                "
              >
                Lihat Produk

                <ArrowRight size={18} />
              </Link>

              <Link
                to="/custom"
                className="
                  bg-white
                  text-blue-700
                  px-5
                  py-3
                  rounded-lg
                  font-medium
                "
              >
                Custom Terpal
              </Link>
            </div>
          </div>

          <div
            className="
              rounded-2xl
              overflow-hidden
              h-64
              sm:h-72
            "
          >
            <img
              src="https://images.unsplash.com/photo-1586864387789-628af9feed72?auto=format&fit=crop&w=1000&q=80"
              alt="Rama Terpal"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* KEUNGGULAN */}

      <section className="px-4 -mt-5 relative z-10">
        <div
          className="
            max-w-7xl
            mx-auto
            bg-white
            border
            rounded-xl
            grid
            grid-cols-2
            lg:grid-cols-4
          "
        >
          <Feature
            icon={<ShieldCheck size={25} />}
            title="Bahan Berkualitas"
            description="Pilihan material terpal"
          />

          <Feature
            icon={<Ruler size={25} />}
            title="Custom Ukuran"
            description="Sesuai kebutuhan"
          />

          <Feature
            icon={<Boxes size={25} />}
            title="Banyak Pilihan"
            description="Beragam tipe terpal"
          />

          <Feature
            icon={<Truck size={25} />}
            title="Mudah Dipesan"
            description="Checkout via WhatsApp"
          />
        </div>
      </section>

      {/* KATEGORI */}

      <section className="px-4 py-10">
        <div className="max-w-7xl mx-auto">
          <div
            className="
              flex
              justify-between
              items-center
              mb-5
            "
          >
            <h2
              className="
                text-xl
                sm:text-2xl
                font-bold
                text-gray-800
              "
            >
              Kategori
            </h2>

            <Link
              to="/kategori"
              className="
                text-sm
                text-blue-600
                font-medium
              "
            >
              Lihat Semua
            </Link>
          </div>

          <div
            className="
              grid
              grid-cols-3
              sm:grid-cols-4
              md:grid-cols-6
              gap-3
            "
          >
            <CategoryMini title="A5" />
            <CategoryMini title="A8" />
            <CategoryMini title="A12" />
            <CategoryMini title="PVC" />
            <CategoryMini title="Kanvas" />
            <CategoryMini title="Custom" />
          </div>
        </div>
      </section>

      {/* PRODUCT */}

      <section className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <div
            className="
              bg-white
              border-b-4
              border-orange-500
              px-5
              py-4
              mb-4
            "
          >
            <h2
              className="
                text-xl
                sm:text-2xl
                font-bold
                text-orange-600
              "
            >
              Rekomendasi Produk
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Pilihan terpal untuk kebutuhan Anda
            </p>
          </div>

          {/* GRID SHOPEE STYLE */}

          <div
            className="
              grid
              grid-cols-2
              sm:grid-cols-3
              md:grid-cols-4
              lg:grid-cols-5
              xl:grid-cols-6
              gap-2
              sm:gap-3
            "
          >
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Link
              to="/kategori"
              className="
                border
                border-blue-600
                text-blue-600
                hover:bg-blue-600
                hover:text-white
                transition
                px-10
                py-3
                rounded-lg
                font-medium
              "
            >
              Lihat Semua Produk
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}



function Feature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        p-4
        sm:p-5
        flex
        items-center
        gap-3
        border-r
        border-b
        lg:border-b-0
      "
    >
      <div
        className="
          text-blue-600
          bg-blue-50
          p-2
          rounded-lg
        "
      >
        {icon}
      </div>

      <div>
        <p
          className="
            font-semibold
            text-sm
            text-gray-800
          "
        >
          {title}
        </p>

        <p
          className="
            text-xs
            text-gray-500
            hidden
            sm:block
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}



function CategoryMini({
  title,
}: {
  title: string;
}) {
  return (
    <Link
      to="/kategori"
      className="
        bg-white
        border
        rounded-lg
        py-5
        px-2
        text-center
        hover:border-orange-500
        hover:text-orange-600
        transition
      "
    >
      <div
        className="
          w-12
          h-12
          mx-auto
          mb-3
          rounded-full
          bg-blue-50
          flex
          items-center
          justify-center
          text-blue-600
          font-bold
        "
      >
        {title.substring(0, 2)}
      </div>

      <p className="text-sm font-medium">
        {title}
      </p>
    </Link>
  );
}