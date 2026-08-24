import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import type { Product } from "../../data/products";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Link
      to={`/produk/${product.id}`}
      className="
        group
        block
        bg-white
        border
        border-gray-200
        rounded-lg
        overflow-hidden
        hover:border-orange-400
        hover:shadow-lg
        transition
        duration-200
      "
    >
      {/* IMAGE */}

      <div className="relative aspect-square bg-gray-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.nama}
          className="
            w-full
            h-full
            object-cover
            group-hover:scale-105
            transition
            duration-300
          "
        />

        <div
          className="
            absolute
            top-2
            left-2
            bg-orange-500
            text-white
            text-[10px]
            sm:text-xs
            font-medium
            px-2
            py-1
            rounded
          "
        >
          Terlaris
        </div>
      </div>

      {/* DETAIL */}

      <div className="p-3">
        <h3
          className="
            text-sm
            text-gray-800
            leading-5
            h-10
            overflow-hidden
          "
        >
          {product.nama}
        </h3>

        <p
          className="
            text-orange-600
            font-bold
            text-base
            sm:text-lg
            mt-2
          "
        >
          Rp{product.harga.toLocaleString("id-ID")}
        </p>

        <p className="text-xs text-gray-500 mt-1">
          {product.ukuran}
        </p>

        <div
          className="
            flex
            items-center
            justify-between
            mt-3
            gap-1
          "
        >
          <div className="flex items-center gap-1">
            <Star
              size={13}
              className="fill-yellow-400 text-yellow-400"
            />

            <span className="text-xs text-gray-600">
              {product.rating}
            </span>
          </div>

          <span className="text-xs text-gray-500">
            {product.terjual} terjual
          </span>
        </div>

        <div
          className="
            mt-3
            pt-3
            border-t
            flex
            justify-between
            items-center
          "
        >
          <span className="text-[11px] text-gray-500">
            Stok {product.stok}
          </span>

          <span
            className="
              text-[11px]
              text-blue-600
              font-medium
            "
          >
            Lihat Detail
          </span>
        </div>
      </div>
    </Link>
  );
}