import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Star,
  Package,
  Ruler,
  Palette,
  ShoppingCart
} from "lucide-react";

import { products } from "../../data/products";



function formatRupiah(value: number) {

  return new Intl.NumberFormat(
    "id-ID",
    {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0
    }
  ).format(value)

}



export default function DetailProductPage() {


  const { id } = useParams();



  const product = products.find(
    item => item.id === Number(id)
  );



  if (!product) {

    return (

      <div
        className="
min-h-screen
flex
items-center
justify-center
"
      >

        <h2
          className="
text-xl
text-gray-600
"
        >
          Produk tidak ditemukan
        </h2>

      </div>

    )

  }





  const pesanWhatsapp = `

Halo Rama Terpal,

Saya tertarik dengan produk:

${product.nama}

Detail Produk:

Type:
${product.type}

Ukuran:
${product.ukuran}

Bahan:
${product.bahan}

Warna:
${product.warna}

Harga:
${formatRupiah(product.harga)}

Mohon informasi ketersediaan dan pemesanan.

Terima kasih.

`;



  const whatsappURL =
    `https://wa.me/6281234567890?text=${encodeURIComponent(pesanWhatsapp)}`;





  return (

    <div
      className="
min-h-screen
bg-gray-50
px-5
py-10
"
    >


      <div
        className="
mx-auto
max-w-6xl
"
      >



        {/* BACK */}

        <Link

          to="/kategori"

          className="
inline-flex
items-center
gap-2
text-sm
text-gray-500
hover:text-blue-600
"

        >

          <ArrowLeft size={18} />

          Kembali ke katalog

        </Link>







        <div
          className="
mt-8
grid
gap-10
lg:grid-cols-2
"
        >






          {/* IMAGE */}


          <div
            className="
overflow-hidden
rounded-3xl
bg-white
border
border-gray-100
"
          >


            <img

              src={product.image}

              alt={product.nama}

              className="
h-[450px]
w-full
object-cover
"

            />


          </div>









          {/* INFORMATION */}


          <div>





            <div
              className="
flex
items-center
gap-3
"
            >


              <span
                className="
rounded-full
bg-blue-100
px-4
py-1
text-sm
font-medium
text-blue-600
"
              >

                {product.type}

              </span>


            </div>





            <h1
              className="
mt-5
text-3xl
font-semibold
text-gray-900
"
            >

              {product.nama}

            </h1>





            <div
              className="
mt-5
flex
items-center
gap-3
"
            >


              <div
                className="
flex
items-center
gap-1
rounded-lg
bg-yellow-50
px-3
py-2
text-yellow-600
"
              >

                <Star size={17} fill="currentColor" />

                {product.rating}

              </div>



              <p
                className="
text-sm
text-gray-500
"
              >

                {product.terjual} terjual

              </p>



            </div>







            <p
              className="
mt-6
text-3xl
font-semibold
text-orange-500
"
            >

              {formatRupiah(product.harga)}

            </p>







            <div
              className="
mt-8
rounded-2xl
bg-white
border
border-gray-100
p-5
"
            >


              <h2
                className="
font-medium
text-gray-800
"
              >
                Informasi Produk
              </h2>




              <div
                className="
mt-5
space-y-4
text-sm
text-gray-600
"
              >



                <p
                  className="
flex
items-center
gap-3
"
                >

                  <Ruler size={18} />

                  Ukuran:
                  {product.ukuran}

                </p>




                <p
                  className="
flex
items-center
gap-3
"
                >

                  <Package size={18} />

                  Stok:
                  {product.stok} tersedia

                </p>




                <p
                  className="
flex
items-center
gap-3
"
                >

                  <Palette size={18} />

                  Warna:
                  {product.warna}

                </p>



              </div>


            </div>








            <p
              className="
mt-6
leading-relaxed
text-gray-600
"
            >

              {product.deskripsi}

            </p>







            <a

              href={whatsappURL}

              target="_blank"

              rel="noreferrer"

              className="
mt-8
flex
items-center
justify-center
gap-3
rounded-xl
bg-green-500
py-4
font-medium
text-white
transition
hover:bg-green-600
"

            >


              <ShoppingCart size={20} />

              Pesan Melalui WhatsApp


            </a>






          </div>





        </div>





      </div>


    </div>

  )


}