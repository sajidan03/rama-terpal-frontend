import { useState } from "react";
import {
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";

import {
  ChevronRight,
  Minus,
  Plus,
  ShoppingCart,
  Star,
  Store,
  Truck,
} from "lucide-react";

import { products } from "../../data/products";



export default function DetailProductPage() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [jumlah, setJumlah] = useState(1);

  const product = products.find(
    (item) => item.id === Number(id)
  );


  if (!product) {
    return (
      <div
        className="
          max-w-7xl
          mx-auto
          px-5
          py-20
          text-center
        "
      >
        <h1 className="text-3xl font-bold">
          Produk Tidak Ditemukan
        </h1>

        <Link
          to="/"
          className="
            inline-block
            mt-5
            text-blue-600
          "
        >
          Kembali ke Beranda
        </Link>
      </div>
    );
  }


  function tambahJumlah() {
    if (jumlah < product!.stok) {
      setJumlah(jumlah + 1);
    }
  }


  function kurangJumlah() {
    if (jumlah > 1) {
      setJumlah(jumlah - 1);
    }
  }


  function checkout() {
    navigate(
      `/checkout?product=${product!.id}&qty=${jumlah}`
    );
  }


  return (
    <div className="bg-gray-50 min-h-screen">
      {/* BREADCRUMB */}

      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          py-5
        "
      >
        <div
          className="
            flex
            items-center
            gap-2
            text-sm
            text-gray-500
          "
        >
          <Link
            to="/"
            className="hover:text-blue-600"
          >
            Home
          </Link>

          <ChevronRight size={15} />

          <Link
            to="/kategori"
            className="hover:text-blue-600"
          >
            Produk
          </Link>

          <ChevronRight size={15} />

          <span className="text-gray-800">
            {product.nama}
          </span>
        </div>
      </div>


      {/* PRODUCT DETAIL */}

      <section
        className="
          max-w-7xl
          mx-auto
          px-4
          pb-10
        "
      >
        <div
          className="
            bg-white
            rounded-xl
            border
            p-5
            grid
            lg:grid-cols-2
            gap-8
          "
        >
          {/* IMAGE */}

          <div>
            <div
              className="
                bg-gray-100
                rounded-xl
                overflow-hidden
                aspect-square
                max-h-[530px]
              "
            >
              <img
                src={product.image}
                alt={product.nama}
                className="
                  w-full
                  h-full
                  object-cover
                "
              />
            </div>
          </div>


          {/* DETAIL */}

          <div>
            <h1
              className="
                text-2xl
                lg:text-3xl
                font-semibold
                text-gray-900
                leading-tight
              "
            >
              {product.nama}
            </h1>


            {/* RATING */}

            <div
              className="
                flex
                flex-wrap
                items-center
                gap-4
                mt-4
                pb-5
                border-b
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-1
                "
              >
                <span
                  className="
                    text-orange-600
                    font-semibold
                  "
                >
                  {product.rating}
                </span>

                <Star
                  size={17}
                  className="
                    fill-yellow-400
                    text-yellow-400
                  "
                />
              </div>

              <span className="text-gray-300">
                |
              </span>

              <span className="text-sm text-gray-600">
                {product.terjual} Terjual
              </span>
            </div>


            {/* PRICE */}

            <div
              className="
                bg-orange-50
                rounded-lg
                p-5
                mt-5
              "
            >
              <p
                className="
                  text-3xl
                  font-bold
                  text-orange-600
                "
              >
                Rp{product.harga.toLocaleString(
                  "id-ID"
                )}
              </p>
            </div>


            {/* ATTRIBUTE */}

            <div className="mt-7 space-y-5">
              <DetailRow
                label="Bahan"
                value={product.bahan}
              />

              <DetailRow
                label="Ukuran"
                value={product.ukuran}
              />

              <DetailRow
                label="Warna"
                value={product.warna}
              />

              <DetailRow
                label="Stok"
                value={`${product.stok} tersedia`}
              />
            </div>


            {/* JUMLAH */}

            <div
              className="
                flex
                items-center
                mt-7
              "
            >
              <p
                className="
                  w-28
                  text-sm
                  text-gray-500
                "
              >
                Jumlah
              </p>

              <div className="flex">
                <button
                  onClick={kurangJumlah}
                  className="
                    w-10
                    h-10
                    border
                    flex
                    items-center
                    justify-center
                    hover:bg-gray-100
                  "
                >
                  <Minus size={16} />
                </button>

                <div
                  className="
                    w-14
                    h-10
                    border-y
                    flex
                    items-center
                    justify-center
                  "
                >
                  {jumlah}
                </div>

                <button
                  onClick={tambahJumlah}
                  className="
                    w-10
                    h-10
                    border
                    flex
                    items-center
                    justify-center
                    hover:bg-gray-100
                  "
                >
                  <Plus size={16} />
                </button>
              </div>

              <span
                className="
                  ml-4
                  text-sm
                  text-gray-500
                "
              >
                Tersisa {product.stok}
              </span>
            </div>


            {/* BUTTON */}

            <div
              className="
                flex
                flex-col
                sm:flex-row
                gap-3
                mt-8
              "
            >
              <button
                onClick={checkout}
                className="
                  flex-1
                  border
                  border-orange-500
                  bg-orange-50
                  text-orange-600
                  font-semibold
                  py-4
                  rounded-lg
                  flex
                  justify-center
                  items-center
                  gap-2
                  hover:bg-orange-100
                "
              >
                <ShoppingCart size={20} />

                Checkout
              </button>

              <button
                onClick={checkout}
                className="
                  flex-1
                  bg-orange-500
                  hover:bg-orange-600
                  text-white
                  font-semibold
                  py-4
                  rounded-lg
                "
              >
                Beli Sekarang
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* STORE INFO */}

      <section
        className="
          max-w-7xl
          mx-auto
          px-4
          pb-6
        "
      >
        <div
          className="
            bg-white
            border
            rounded-xl
            p-6
            flex
            flex-col
            sm:flex-row
            sm:items-center
            justify-between
            gap-5
          "
        >
          <div
            className="
              flex
              items-center
              gap-4
            "
          >
            <div
              className="
                w-14
                h-14
                bg-blue-600
                text-white
                rounded-full
                flex
                items-center
                justify-center
              "
            >
              <Store />
            </div>

            <div>
              <h3 className="font-bold text-lg">
                Rama Terpal
              </h3>

              <p className="text-sm text-gray-500">
                Penyedia berbagai jenis terpal
              </p>
            </div>
          </div>

          <div
            className="
              flex
              items-center
              gap-2
              text-sm
              text-gray-600
            "
          >
            <Truck className="text-blue-600" />

            Pemesanan melalui WhatsApp
          </div>
        </div>
      </section>


      {/* DESCRIPTION */}

      <section
        className="
          max-w-7xl
          mx-auto
          px-4
          pb-16
        "
      >
        <div
          className="
            bg-white
            border
            rounded-xl
            p-6
          "
        >
          <h2
            className="
              text-xl
              font-bold
              text-gray-900
            "
          >
            Deskripsi Produk
          </h2>

          <div
            className="
              mt-5
              text-gray-600
              leading-7
            "
          >
            <p>{product.deskripsi}</p>

            <div className="mt-6 space-y-2">
              <p>
                <strong>Bahan:</strong>{" "}
                {product.bahan}
              </p>

              <p>
                <strong>Ukuran:</strong>{" "}
                {product.ukuran}
              </p>

              <p>
                <strong>Warna:</strong>{" "}
                {product.warna}
              </p>

              <p>
                <strong>Stok:</strong>{" "}
                {product.stok}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



function DetailRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center">
      <p
        className="
          w-28
          text-sm
          text-gray-500
        "
      >
        {label}
      </p>

      <p
        className="
          text-gray-800
          font-medium
        "
      >
        {value}
      </p>
    </div>
  );
}