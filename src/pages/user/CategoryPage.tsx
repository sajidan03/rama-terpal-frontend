import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Search,
  Package,
  Ruler,
  ArrowRight,
} from "lucide-react";

import { products } from "../../data/products";

const categories = [
  "Semua",
  "A12",
  "A10",
  "A8",
  "A5",
  "A3",
  "A2",
  "Makmur",
];

function formatRupiah(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function CategoryPage() {
  const [active, setActive] = useState("Semua");
  const [keyword, setKeyword] = useState("");

  const filteredProducts = products.filter((product) => {
    const kategoriCocok =
      active === "Semua" || product.type === active;

    const pencarianCocok =
      `${product.nama} ${product.ukuran} ${product.type}`
        .toLowerCase()
        .includes(keyword.trim().toLowerCase());

    return kategoriCocok && pencarianCocok;
  });

  return (
    <div
      className="
        min-h-screen
        overflow-x-hidden
        bg-gray-50

        pt-12
        pb-10

        sm:pt-14
        sm:pb-12

        lg:pt-16
        lg:pb-16
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-7xl

          px-4
          sm:px-6
          md:px-8
          lg:px-30
        "
      >
        {/* HEADER */}
        <div>
          <h1
            className="
              text-2xl
              font-semibold
              leading-tight
              text-gray-900

              sm:text-3xl
            "
          >
            Katalog Terpal
          </h1>

          <p
            className="
              mt-2
              max-w-2xl
              text-sm
              leading-6
              text-gray-500
            "
          >
            Temukan terpal berdasarkan tipe dan ukuran yang tersedia
          </p>
        </div>

        {/* CATEGORY */}
        <div
          className="
            mt-6
            grid
            grid-cols-2
            gap-3

            sm:mt-8
            sm:grid-cols-4
            sm:gap-4

            lg:grid-cols-4

            xl:grid-cols-8
          "
        >
          {categories.map((category) => {
            const jumlahProduk =
              category === "Semua"
                ? products.length
                : products.filter(
                    (item) => item.type === category
                  ).length;

            const isActive = active === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                aria-pressed={isActive}
                className={`
                  min-w-0
                  rounded-xl
                  border
                  p-3
                  text-left
                  transition-all
                  duration-300

                  sm:rounded-2xl
                  sm:p-4

                  lg:p-5

                  ${
                    isActive
                      ? `
                        border-blue-600
                        bg-blue-600
                        text-white
                        shadow-lg
                      `
                      : `
                        border-gray-100
                        bg-white
                        text-gray-900
                        shadow-sm
                        hover:border-blue-100
                        hover:shadow-md
                        lg:hover:-translate-y-1
                      `
                  }
                `}
              >
                <p
                  className="
                    truncate
                    text-lg
                    font-semibold

                    sm:text-xl
                    lg:text-2xl
                  "
                >
                  {category}
                </p>

                <p
                  className="
                    mt-1
                    truncate
                    text-[11px]
                    opacity-80

                    sm:mt-2
                    sm:text-xs
                  "
                >
                  {category === "Semua"
                    ? "Semua Produk"
                    : `Terpal ${category}`}
                </p>

                <p
                  className="
                    mt-3
                    text-[11px]
                    font-medium

                    sm:mt-4
                    sm:text-xs
                  "
                >
                  {jumlahProduk} Produk
                </p>
              </button>
            );
          })}
        </div>

        {/* SEARCH */}
        <div
          className="
            mt-7
            sm:mt-10
          "
        >
          <div
            className="
              relative
              w-full
              sm:max-w-xl
            "
          >
            <Search
              size={20}
              className="
                pointer-events-none
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-gray-400
              "
            />

            <input
              type="search"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Cari ukuran atau tipe terpal..."
              aria-label="Cari produk terpal"
              className="
                w-full
                rounded-xl
                border
                border-gray-200
                bg-white

                py-3
                pl-12
                pr-4

                text-sm
                text-gray-800

                shadow-sm
                outline-none
                transition

                placeholder:text-gray-400

                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-100

                sm:py-3.5
                sm:pr-5
              "
            />
          </div>
        </div>

        {/* PRODUCT HEADER */}
        <div
          className="
            mt-8
            mb-5

            sm:mt-10
            sm:mb-6
          "
        >
          <div
            className="
              flex
              flex-col
              gap-1

              sm:flex-row
              sm:items-end
              sm:justify-between
              sm:gap-4
            "
          >
            <div>
              <h2
                className="
                  text-lg
                  font-semibold
                  text-gray-800

                  sm:text-xl
                "
              >
                Produk Terpal
              </h2>

              <p
                className="
                  mt-1
                  text-xs
                  text-gray-500

                  sm:text-sm
                "
              >
                {filteredProducts.length} produk tersedia
              </p>
            </div>

            {active !== "Semua" && (
              <p
                className="
                  mt-1
                  text-xs
                  text-gray-500

                  sm:mt-0
                  sm:text-sm
                "
              >
                Kategori:{" "}
                <span className="font-medium text-blue-600">
                  {active}
                </span>
              </p>
            )}
          </div>
        </div>

        {/* PRODUCT GRID */}
        {filteredProducts.length > 0 && (
          <div
            className="
              grid
              grid-cols-1
              gap-4

              sm:grid-cols-2
              sm:gap-5

              lg:grid-cols-3
              lg:gap-6

              xl:grid-cols-4
            "
          >
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="
                  group
                  flex
                  min-w-0
                  flex-col
                  overflow-hidden

                  rounded-xl
                  border
                  border-gray-100
                  bg-white
                  shadow-sm

                  transition-all
                  duration-300

                  sm:rounded-2xl

                  hover:border-gray-200
                  hover:shadow-xl

                  lg:hover:-translate-y-1
                "
              >
                {/* PRODUCT IMAGE */}
                <Link
                  to={`/produk/${product.id}`}
                  aria-label={`Lihat detail ${product.nama}`}
                  className="
                    relative
                    block

                    h-48
                    w-full

                    overflow-hidden
                    bg-gray-100

                    sm:h-52
                    lg:h-56
                    xl:h-52
                  "
                >
                  <img
                    src={product.image}
                    alt={product.nama}
                    loading="lazy"
                    className="
                      h-full
                      w-full
                      object-cover

                      transition-transform
                      duration-500

                      group-hover:scale-105
                    "
                  />

                  {/* BADGE TYPE */}
                  <div
                    className="
                      absolute
                      left-3
                      top-3

                      rounded-full
                      bg-white/95

                      px-2.5
                      py-1

                      text-[11px]
                      font-medium
                      text-blue-600

                      shadow-sm
                      backdrop-blur-sm

                      sm:left-4
                      sm:top-4
                      sm:px-3
                      sm:text-xs
                    "
                  >
                    {product.type}
                  </div>
                </Link>

                {/* DETAIL PRODUCT */}
                <div
                  className="
                    flex
                    flex-1
                    flex-col

                    p-4
                    sm:p-5
                  "
                >
                  {/* PRODUCT NAME */}
                  <Link
                    to={`/produk/${product.id}`}
                    className="
                      line-clamp-2
                      min-h-[44px]

                      text-sm
                      font-medium
                      leading-6
                      text-gray-800

                      transition-colors

                      hover:text-blue-600

                      sm:min-h-[48px]
                      sm:text-base
                    "
                  >
                    {product.nama}
                  </Link>

                  {/* PRODUCT INFO */}
                  <div
                    className="
                      mt-3
                      space-y-2

                      text-xs
                      text-gray-500

                      sm:mt-4
                      sm:text-sm
                    "
                  >
                    {/* SIZE */}
                    <p
                      className="
                        flex
                        min-w-0
                        items-center
                        gap-2
                      "
                    >
                      <Ruler
                        size={15}
                        className="shrink-0"
                      />

                      <span className="truncate">
                        {product.ukuran}
                      </span>
                    </p>

                    {/* STOCK */}
                    <p
                      className="
                        flex
                        min-w-0
                        items-center
                        gap-2
                      "
                    >
                      <Package
                        size={15}
                        className="shrink-0"
                      />

                      <span className="truncate">
                        Stok {product.stok} tersedia
                      </span>
                    </p>
                  </div>

                  {/* PRICE & BUTTON */}
                  <div
                    className="
                      mt-auto
                      flex
                      flex-col
                      gap-3
                      pt-5

                      min-[390px]:flex-row
                      min-[390px]:items-center
                      min-[390px]:justify-between
                    "
                  >
                    <p
                      className="
                        min-w-0
                        break-words

                        text-base
                        font-semibold
                        leading-tight
                        text-orange-500

                        sm:text-lg
                      "
                    >
                      {formatRupiah(product.harga)}
                    </p>

                    <Link
                      to={`/produk/${product.id}`}
                      className="
                        inline-flex
                        w-full
                        shrink-0

                        items-center
                        justify-center
                        gap-2

                        rounded-xl
                        bg-blue-600

                        px-4
                        py-2.5

                        text-xs
                        font-medium
                        text-white

                        shadow-sm

                        transition-all
                        duration-200

                        hover:bg-blue-700
                        hover:shadow-md

                        focus:outline-none
                        focus:ring-2
                        focus:ring-blue-500
                        focus:ring-offset-2

                        min-[390px]:w-auto

                        sm:text-sm
                      "
                    >
                      Detail

                      <ArrowRight
                        size={16}
                        className="shrink-0"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* EMPTY STATE */}
        {filteredProducts.length === 0 && (
          <div
            className="
              rounded-2xl
              border
              border-dashed
              border-gray-200
              bg-white

              px-4
              py-14

              text-center

              sm:px-6
              sm:py-20
            "
          >
            <div
              className="
                mx-auto
                flex
                h-14
                w-14
                items-center
                justify-center

                rounded-full
                bg-gray-50

                sm:h-16
                sm:w-16
              "
            >
              <Package
                size={34}
                className="text-gray-300"
              />
            </div>

            <h3
              className="
                mt-4
                text-base
                font-semibold
                text-gray-700

                sm:text-lg
              "
            >
              Produk tidak ditemukan
            </h3>

            <p
              className="
                mx-auto
                mt-2
                max-w-md

                text-xs
                leading-5
                text-gray-500

                sm:text-sm
                sm:leading-6
              "
            >
              Coba cari menggunakan ukuran atau tipe terpal lainnya.
            </p>

            <button
              type="button"
              onClick={() => {
                setKeyword("");
                setActive("Semua");
              }}
              className="
                mt-5

                rounded-xl
                border
                border-gray-200
                bg-white

                px-4
                py-2.5

                text-sm
                font-medium
                text-gray-700

                transition

                hover:border-blue-200
                hover:bg-blue-50
                hover:text-blue-600
              "
            >
              Reset Pencarian
            </button>
          </div>
        )}
      </div>
    </div>
  );
}